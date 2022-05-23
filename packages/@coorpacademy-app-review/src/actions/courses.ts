export const RECEIVED_COURSE = '@@api/RECEIVED_COURSE';

export type $RECEIVED_COURSE = {
  type: '@@api/RECEIVED_COURSE';
  payload: string;
};

export const receivedCourse = (course: any): $RECEIVED_COURSE => ({
  type: RECEIVED_COURSE,
  payload: course
});
