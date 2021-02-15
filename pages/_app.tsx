import 'tailwindcss/tailwind.css';
import 'styles/global.scss';

import { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppProps } from 'next/app';
import Router from 'next/router';
import nprogress from 'nprogress';
import { RecoilRoot } from 'recoil';

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
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default _App;
