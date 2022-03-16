import defaultProps from './default';

const {props} = defaultProps;

export default {
    props: {
        ...props,
        error: 'The file is invalid'
    }
}
