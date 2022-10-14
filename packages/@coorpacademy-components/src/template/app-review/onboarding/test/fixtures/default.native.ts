export const defaultProps = {
    'aria-label': 'Review Presentation Container',
    title: 'What is<br/>Revision mode ?',
    text:
      'Egestas elementum duis bibendum velit tempus nulla arcu eget volutpat.<br/><br/>Diam tincidunt lacus, cras ullamcorper diam, sit tincidunt fames. Maecenas eros, in mollis gravida ut neque, integer a. Vel et tellus dui in integer.',
    button: "Ok, I got it!",
    labelsList: {
      skills: {text: 'Choose 1 Skill', tooltipText: 'This is the tooltip text'},
      questions: {text: 'Answer 5 Questions', tooltipText: 'This is the tooltip text'},
      lifes: {
        text: 'You have Infinite Lifes',
        tooltipText: 'This is the tooltip text, a tooltip text'
      },
      allright: {text: 'Get it all right', tooltipText: 'Egestas elementum duis bibendum'}
    }
  };
  
  export default {props: defaultProps};
  