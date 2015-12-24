import h from 'virtual-dom/h';

import Title from './Title';
import style from './style.css';

export default (props) =>
  h(`article.${style.Container}`
  , {}
  , [ Title({}, props.title)
    , h(`p.${style.SubTitle}`, {}, 'Saisissez votre réponse')
    , h('form'
      , {}
      , [ h(`textarea.${style.TextArea}`, {}, [])
        , h(`button.${style.Button}`, {}, 'Vérifier la réponse')
        ]
      )
    ]
  )
;
