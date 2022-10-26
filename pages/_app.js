import { useEffect, useMemo, useState } from 'react';
import '../styles/globals.css';
import { Web3ReactProvider } from '@web3-react/core';
import { Provider } from 'react-redux';
import dynamic from 'next/dynamic';
import Layout from '../src/components/Layout';
import Web3ReactManager from '../src/components/Web3ReactManager';
import getLibrary from '../src/utils/getLibrary';
import { useRouter } from 'next/router';
import ErrorBoundaries from '../src/components/Error/ErrorBoundaries';
import { ThemeNew } from '../src/constants/themeNew';
import { ThemeProvider } from 'styled-components';
import store from '../src/store';
import storage from '../src/utils/storage';


const Web3ReactProviderDefault = dynamic(
    () => import('../src/utils/getDefaultProvider'),
    { ssr: false }
);

function MyApp({ Component }) {

    const router = useRouter();
    const paths = useMemo(() => ['/error', '/dice', '/flip', '/wheel', '/mines', '/kong', '/keno', '/'], []);
    const [mode, setMode] = useState('lightMode');

    const changeMode = () => {

        setMode((storage.get('lightMode') && 'lightMode') || 'darkMode');

    };

    useEffect(() => {

        paths.indexOf(router.pathname) < 0 && router.push('/error');

    }, [paths, router, router.pathname]);

    return (
        <Provider store={store}>
            <ErrorBoundaries>
                <Web3ReactProvider getLibrary={getLibrary}>
                    <Web3ReactProviderDefault getLibrary={getLibrary}>
                        <Web3ReactManager>
                            <ThemeProvider theme={ThemeNew[mode]}>
                                <Layout changeMode={changeMode}>
                                    <Component />
                                </Layout>
                            </ThemeProvider>
                        </Web3ReactManager>
                    </Web3ReactProviderDefault>
                </Web3ReactProvider>
            </ErrorBoundaries>
        </Provider>
    );

}

export default MyApp;
