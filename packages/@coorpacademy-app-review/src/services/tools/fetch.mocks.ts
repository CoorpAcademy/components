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

export const token: string = process.env.API_TEST_TOKEN || 'no-API_TEST_TOKEN';
