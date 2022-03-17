
import defaultProps from './default';

const {props} = defaultProps;
export default {
    props: {
        ...props,
        description: 'Max file size: 5MO. Recommended format: SVG (if your client uses a majority of IE, use PNG format instead). Recommended aspect ratio : horizontal 2:1 (e.g. 500px x 250px). Maximum recommended aspect ratio 1:1 (e.g. 500x500, which means that it should not be taller than its width).'
    }
}
