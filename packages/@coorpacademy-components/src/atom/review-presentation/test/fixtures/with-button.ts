import {OnboardingProps} from '../../prop-types';
import { defaultProps } from './default';
  
export const withButtonProps = {
    ...defaultProps,
    title: 'What is<br/>Revision mode ?',
    text: 'Egestas elementum duis bibendum velit tempus nulla arcu eget volutpat.<br/><br/>Diam tincidunt lacus, cras ullamcorper diam, sit tincidunt fames. Maecenas eros, in mollis gravida ut neque, integer a. Vel et tellus dui in integer.',
    button: 'Ok, I got it!'
  };
  
  
type Fixture = {
    props: OnboardingProps;
  };
  
  const fixture: Fixture = {
      props: {
        ...withButtonProps,
        onPress: () => null,
    }
  };
  
  export default fixture;
  