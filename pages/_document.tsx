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

const _Document: NextComponentType<DocumentContext, DocumentInitialProps, DocumentProps> & {
  renderDocument: Function;
} = () => {
  return (
    <Html className="h-auto min-h-screen">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="overflow-x-hidden overflow-y-auto">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

_Document.getInitialProps = async ctx => {
  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
    styles: <>{initialProps.styles}</>,
  };
};

_Document.renderDocument = Document.renderDocument;

export default _Document;
