import {Response} from './fetch-responses';

export const toResponse = (status: number, statusText: string, body: string): Promise<Response> =>
  Promise.resolve({
    ok: status < 400,
    status,
    statusText,
    json: (): Promise<unknown> => Promise.resolve(body).then(JSON.parse),
    text: (): Promise<string> => Promise.resolve(body)
  });

type FetchFunction = () => Promise<Response>;

export const okJSONResponse = (body: unknown): FetchFunction => () =>
  toResponse(200, 'OK', JSON.stringify(body));

export const internalServerErrorJSONResponse = (body: unknown): FetchFunction => () =>
  toResponse(500, 'InternalServerError', JSON.stringify(body));

export const notFoundJSONResponse = (body: unknown): FetchFunction => () =>
  toResponse(404, 'Not Found', JSON.stringify(body));

export const okTextResponse = (body: string): FetchFunction => () => toResponse(200, 'OK', body);

export const internalServerErrorTextResponse = (body: string): FetchFunction => () =>
  toResponse(500, 'InternalServerError', body);
