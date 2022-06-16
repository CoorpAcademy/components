import React, {FunctionComponent} from 'react';

export type Props = {plop: string};

const DemoTs: FunctionComponent = ({plop}: Props) => <p>{plop}</p>;

export default DemoTs;
