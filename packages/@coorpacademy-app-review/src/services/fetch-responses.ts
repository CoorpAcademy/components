export type Response = {
  ok: boolean;
  status: number;
  statusText: string;
  json: () => Promise<unknown>;
  text: () => Promise<string>;
};

export type Fetch = (
  url?: string,
  options?: {headers: {authorization: string}}
) => Promise<Response>;

export class ResponseError extends Error {
  public statusCode: number;

  public constructor(status: number, statusText: string, body = '') {
    super(`${statusText} ${body}`.trim());
    this.name = 'ResponseError';
    this.statusCode = status;
  }
}

export const toJSON = async (response: Response): Promise<unknown> => {
  if (!response.ok) {
    const body = await response.text();
    throw new ResponseError(response.status, response.statusText, body);
  }

  try {
    return await response.json();
  } catch (err) {
    throw new ResponseError(response.status, response.statusText);
  }
};

export const toText = async (response: Response): Promise<string> => {
  const body = await response.text();

  if (!response.ok) {
    throw new ResponseError(response.status, response.statusText, body);
  }

  return body;
};

export const toVoid = async (response: Response): Promise<void> => {
  if (!response.ok) {
    const body = await response.text();
    throw new ResponseError(response.status, response.statusText, body);
  }
  return;
};
