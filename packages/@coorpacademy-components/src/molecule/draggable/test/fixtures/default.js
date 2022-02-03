export default {
  props: {
    id: 'draggableId',
    dragging: true,
    onDragStart: () => console.log('onDragStart'),
    onDragOver: () => console.log('onDragOver'),
    onDragLeave: () => console.log('onDragLeave'),
    onDrop: () => console.log('onDrop'),
    children: []
  }
};
