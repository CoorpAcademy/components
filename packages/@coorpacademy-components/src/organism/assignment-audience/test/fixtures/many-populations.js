import few from './few-populations';

const regions = ['France', 'Germany', 'Italy', 'Spain', 'UK', 'Japan', 'Canada', 'Brazil'];
const groups = ['Managers', 'Sales', 'Support', 'Engineering'];
export default {
  props: {
    ...few.props,
    populations: {
      ...few.props.populations,
      options: groups.flatMap((group, groupIndex) =>
        regions.map((region, index) => ({
          name: `${group} ${region}`,
          value: `${group.toLowerCase()}-${index}`,
          selected: groupIndex === 1 && index === 0,
          count: `${120 + groupIndex * 80 + index * 9} users`
        }))
      )
    }
  }
};
