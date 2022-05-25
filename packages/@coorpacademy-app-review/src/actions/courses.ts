export const RECEIVED_COURSE = '@@api/RECEIVED_COURSE';

export type ReceivedCourse = {
  type: '@@api/RECEIVED_COURSE';
  payload: string;
};

export const receivedCourse = (course: any): ReceivedCourse => ({
  type: RECEIVED_COURSE,
  payload: course
});
