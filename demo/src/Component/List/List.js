import Style from './List.css';

export default (React) => (props) => (
  <ul>
    {
      React.Children.map(
        props.children,
        child => ( <li className={ Style.item }>{ child }</li> )
      )
    }
  </ul>
)
