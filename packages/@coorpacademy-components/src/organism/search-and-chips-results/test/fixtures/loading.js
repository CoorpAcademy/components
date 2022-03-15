import props from './default';

export default {
    ...props,
    props: {
        ...props.props,
        isLoading: true
    }
}
