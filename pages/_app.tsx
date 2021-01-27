import 'tailwindcss/tailwind.css';
import 'styles/global.scss';

import { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import nprogress from 'nprogress';
import { RecoilRoot } from 'recoil';
import Title from 'components/Layout/Title';

Router.events.on('routeChangeStart', () => {
  nprogress.start();
});

Router.events.on('routeChangeError', () => {
  nprogress.done();
});

Router.events.on('routeChangeComplete', () => {
  nprogress.done();
});

const _App: NextComponentType<AppContext, AppInitialProps, AppProps> = props => {
  const { Component, pageProps } = props;
  return (
    <>
      <Title></Title>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
};

export default _App;
