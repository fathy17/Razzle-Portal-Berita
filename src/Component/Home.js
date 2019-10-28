import React, { Fragment, useContext, useEffect } from 'react';
import News from './Home/News'
import Terbaru from './Home/Terbaru'
import BeritaContextProvider, { BeritaContext } from '../Store/BeritaContext';
import { CircularProgress } from '@material-ui/core';
import { Helmet } from "react-helmet";
import Navbar from './Home/Navbar';


const Home = () => {
    const { berita } = useContext(BeritaContext)
    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
            <BeritaContextProvider>
                <Helmet>
                    <title>Ekspose Sulsel</title>
                    <link rel="canonical" href="https://eksposesulsel.com/" />
                    <meta name="description" content="Portal Berita Sulawesi Selatan" />
                    <meta name="keywords" content="Portal Berita Sulawesi Selatan" />
                </Helmet>
                <Navbar />
                <div className="margin">
                    {berita.length ? (
                        <Fragment>
                            <News />
                            <Terbaru />
                        </Fragment>
                    ) : (
                            <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '1000000' }}>
                                <CircularProgress />
                            </div>
                        )}
                </div>
            </BeritaContextProvider>
    );
}

export default Home;