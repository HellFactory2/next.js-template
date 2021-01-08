import { FunctionComponent } from 'react';
import { niceName } from 'package.json';
import Head from 'next/head';

export const Title: FunctionComponent = props => {
  return (
    <Head>
      <title>
        {props.children ? props.children + ' - ' : ''}
        {niceName}
      </title>
    </Head>
  );
};

export default Title;
