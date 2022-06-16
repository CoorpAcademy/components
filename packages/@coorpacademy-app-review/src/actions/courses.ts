export const RECEIVED_COURSE = '@@api/RECEIVED_COURSE';

export type ReceivedCourse = {
  type: '@@api/RECEIVED_COURSE';
  payload: unknown;
};

export const receivedCourse = (course: unknown): ReceivedCourse => ({
  type: RECEIVED_COURSE,
  payload: course
});
