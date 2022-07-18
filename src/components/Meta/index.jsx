import Head from 'next/head';

const Meta = (props) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={props.keywords} />
      <meta name='description' content={props.description} />
      <meta property='og:title' content={props.ogTitle} />
      <meta property='og:type' content={props.ogType} />
      <meta property='og:url' content={props.ogUrl} />
      <meta property='og:image' content={props.ogImage} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{props.title}</title>
    </Head>
  );
};

export default Meta;
