import React, {FunctionComponent} from 'react';
import {Props, propTypes} from './typings';

const DemoTs: FunctionComponent<Props> = ({plop}: Props) => <p>{plop}</p>;

DemoTs.propTypes = propTypes;

export default DemoTs;
