import React, {FC} from 'react';
// next
import Head from 'next/head';
// components
// import {Link} from '../components/elements';
import Link from 'next/link';
// next router
import Router from 'next/router';
// cookie
import cookie from 'js-cookie';

const Home: FC = () => {
  React.useEffect(() => {
    if (!cookie.get('accessToken')) {
      Router.push('/auth/signin');
    } else {
      Router.push('/dashboard');
    }
  });
  return (
    <div>
      <Head>
        <title>FactStream</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-center">
        <h1>Welcome to Factstream</h1>
        <Link href="/dashboard">
          <a>Go to Dashbaord</a>
        </Link>
      </main>
    </div>
  );
};

export default Home;
