import { FunctionComponent } from 'react';
import pkg from 'package.json';
import Head from 'next/head';

export const Title: FunctionComponent = props => {
  return (
    <Head>
      <title>
        {props.children ? props.children + ' - ' : ''}
        {pkg.niceName}
      </title>
    </Head>
  );
};

export default Title;
