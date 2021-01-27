import { NextComponentType } from 'next';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
  DocumentProps,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const _Document: NextComponentType<DocumentContext, DocumentInitialProps, DocumentProps> & {
  renderDocument: Function;
} = () => {
  return (
    <Html className="h-auto min-h-screen">
      <Head />
      <body className="overflow-x-hidden overflow-y-auto">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

_Document.getInitialProps = async ctx => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    };
  } finally {
    sheet.seal();
  }
};

_Document.renderDocument = Document.renderDocument;

export default _Document;
