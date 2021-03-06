// @flow strict

import path from 'path';
import fs from 'fs';
import zlib from 'zlib';

export type IconSet = {|
  date: string,
  parent: string,
  licence: string,
  name: string,
  sort: number,
  identifier: string
|};

export type IconSetGroup = {|
  name: string,
  sort: number,
  identifier: number
|};

export type IconSetGroupItem = {|
  height: number,
  parent: string,
  licence: string,
  width: number,
  date: string,
  identifier: string,
  file: string,
  type: number,
  unicode: number,
  tags: string,
  name: string
|};

export type Meta = {|
  sets: {[string]: IconSet},
  groups: {[string]: IconSetGroup},
  items: {[string]: IconSetGroupItem}
|};

const getIconJarPath = (iconJar: string): string =>
  // $FlowFixMe path.join is defined
  path.join(__dirname, '../../third-party', iconJar);

export const parseMeta = (iconJar: string): Meta => {
  // $FlowFixMe path.join is defined
  const file = fs.readFileSync(path.join(getIconJarPath(iconJar), 'META'));

  return JSON.parse(zlib.gunzipSync(file).toString());
};

export const getSVGFilePath = (iconJar: string, fileName: string): string =>
  // $FlowFixMe path.join is defined
  path.join(getIconJarPath(iconJar), 'icons', fileName);
