// Press ctrl+space for code completion
export default function transformer(file, api) {
  const j = api.jscodeshift;
  
  const ast = j(file.source);
  
  const hasTreant = ast.find(j.Identifier, {name: 'treant'}).length > 0;
  if (!hasTreant) return ast.toSource();
  
  const otherComponentNames = [];
  
  console.log(j.Program)
  ast.find(j.ImportDefaultSpecifier)
  	.forEach(path => {
      if (path.value.local &&
          path.value.local.name.startsWith('create')
      ) {
        const newName = path.value.local.name.slice(6);
        otherComponentNames.push(newName);
        path.value.local.name = newName;
      }
  	});
  
  ast.find(j.Program)
    .forEach(path => {
    path.value.body.unshift(
      j.importDeclaration(
        [j.importDefaultSpecifier(j.identifier('Inferno'))], 
        j.literal('inferno')
      )
    )
  });
  
  ast
    .find(j.ExportDefaultDeclaration)
    .forEach(path => {
    	if (path.value.declaration.type !== 'ArrowFunctionExpression') return
    	const body = path.value.declaration.body.body
        	.filter(path => 
              !(
              	path.type === 'VariableDeclaration' &&
              	path.declarations.filter(declaration => {
                  return declaration.init && declaration.init.name === 'treant'
                }).length > 0
              )
            );
    	
    	const returnStatement = body.find(path => {
          return path.type === 'ReturnStatement'
        });
    	const exportStatement = j.exportDefaultDeclaration(returnStatement.argument);
    	
    	const component = body.filter(path => 
          path.type === 'VariableDeclaration' &&
          path.declarations.length === 1 &&
		  path.declarations[0].id.type === 'Identifier' &&
		  path.declarations[0].id.name === returnStatement.argument.name
        );
    
    const body2 = body.filter(p => p !== returnStatement);
    const variables = body2.slice(0, body2.indexOf(component) - 1)
    	.filter(variable => !(
          variable.type === 'VariableDeclaration' &&
          variable.declarations.length === 1 &&
		  variable.declarations[0].id.type === 'Identifier' &&
		  otherComponentNames.includes(variable.declarations[0].id.name)
        ));
    
    component.forEach(path => {
      const func = path.declarations[0].init.type === 'CallExpression' ?
            path.declarations[0].init.arguments[0] :
		    path.declarations[0].init;
      if (func.body.type === 'BlockStatement') {
        func.body.body = func.body.body.filter(variable => !(
            variable.type === 'VariableDeclaration' &&
            variable.declarations.length === 1 &&
            variable.declarations[0].id.type === 'Identifier' &&
            otherComponentNames.includes(variable.declarations[0].id.name)
          ));
        return;
      };
      func.body = j.blockStatement([
        ...variables,
        j.returnStatement(func.body)
      ]);
    });
    
    component.forEach(path => {
      const func = path.declarations[0].init.type === 'CallExpression' ?
            path.declarations[0].init.arguments[0] :
		    path.declarations[0].init;
      const params = func.params;      

      const propsParam = j.property('init', j.identifier('XYZprops'), j.identifier('XYZprops'));
      	propsParam.shorthand = true;
      let newParams = [propsParam];
      if (params.find(param => param.name === 'children')) {
      	const childrenParam = j.property('init', j.identifier('children'), j.identifier('children'));
      	childrenParam.shorthand = true;
        newParams.unshift(childrenParam);
      }
      
      	path.declarations[0].init.params = [
          j.objectPattern(newParams),
        ];
    });
    // (props, children) => ({children, XYZprops})
    const body3 = body2.slice(body2.indexOf(component) - 1)
    	
    	j(path).replaceWith(
			[
              ...body3,
              exportStatement
            ]
        );
    });

  return ast.toSource();
}
