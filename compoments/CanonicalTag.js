import Head from 'next/head';
import { useRouter } from 'next/router';

const CanonicalTag = () => {
  const router = useRouter();
  const baseUrl = 'https://www.kimskage.com'; 

  return (
    <Head>
      <meta name="google-site-verification" content="zgswpdICchqaSXfJFzQURHEgwoN4N251UTb3Eu1NguE" />
      <link
        rel="canonical"
        href={`${baseUrl}${router.asPath === '/' ? '' : router.asPath}`}
      />
    </Head>
  );
};

export default CanonicalTag;
