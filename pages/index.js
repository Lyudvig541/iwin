import React from 'react';
import Landing from '../src/components/Landing';
import Head from 'next/head';

export default function Home() {

    return (
        <>
            <Head>
                <title>iWIN - Decentralized Gambling Platform</title>
                <meta property="og:title" content="iWIN - Decentralized Gambling Platform" key="title"/>
            </Head>
            <Landing />
        </>
    );

}
