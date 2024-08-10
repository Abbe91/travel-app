import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Fragment } from 'react';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Fragment>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  document.addEventListener('DOMContentLoaded', function() {
                    document.documentElement.removeAttribute('data-new-gr-c-s-check-loaded');
                    document.documentElement.removeAttribute('data-gr-ext-installed');
                    document.body.removeAttribute('data-new-gr-c-s-check-loaded');
                    document.body.removeAttribute('data-gr-ext-installed');
                  });
                `,
              }}
            />
          </Fragment>
        </body>
      </Html>
    );
  }
}

export default MyDocument;