import crossFetch from 'cross-fetch';

export const toResponse = (
  statusCode: number,
  statusText: string,
  body: string
): Promise<Response> =>
  Promise.resolve({
    ok: statusCode < 400,
    status: statusCode,
    statusText,
    json: (): Promise<unknown> => Promise.resolve(body).then(JSON.parse),
    text: (): Promise<string> => Promise.resolve(body)
  } as Response);

export const okJSONResponse =
  (body: unknown): typeof crossFetch =>
  () =>
    toResponse(200, 'OK', JSON.stringify(body));

export const internalServerErrorJSONResponse =
  (body: unknown): typeof crossFetch =>
  () =>
    toResponse(500, 'InternalServerError', JSON.stringify(body));

export const notFoundJSONResponse =
  (body: unknown): typeof crossFetch =>
  () =>
    toResponse(404, 'Not Found', JSON.stringify(body));

export const okTextResponse =
  (body: string): typeof crossFetch =>
  () =>
    toResponse(200, 'OK', body);

export const internalServerErrorTextResponse =
  (body: string): typeof crossFetch =>
  () =>
    toResponse(500, 'InternalServerError', body);

/* {
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
} */
export const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
