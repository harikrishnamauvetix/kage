import Head from 'next/head';
import { useRouter } from 'next/router';

const CanonicalTag = () => {
  const router = useRouter();
  const baseUrl = 'https://www.kimskage.com'; 

  return (
    <Head>
      <link
        rel="canonical"
        href={`${baseUrl}${router.asPath === '/' ? '' : router.asPath}`}
      />
    </Head>
  );
};

export default CanonicalTag;
