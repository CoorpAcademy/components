// @flow strict

import path from 'path';
import fs from 'fs';
import zlib from 'zlib';

export type Set = {|
  date: string,
  parent: string,
  licence: string,
  name: string,
  sort: number,
  identifier: string
|};

export type Group = {|
  name: string,
  sort: number,
  identifier: number
|};

export type Item = {|
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
  sets: {[string]: Set},
  groups: {[string]: Group},
  items: {[string]: Item}
|};

const getIconJarPath = (iconJar: string): string => path.join(__dirname, '../../third-party', iconJar);

export const parseMeta = (iconJar: string): Meta => {
  const file = fs.readFileSync(path.join(getIconJarPath(iconJar), 'META'));

  return JSON.parse(zlib.gunzipSync(file));
};

export const getSVGFilePath = (iconJar: string, fileName: string): string =>
  path.join(getIconJarPath(iconJar), 'icons', fileName);
