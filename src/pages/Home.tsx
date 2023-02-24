import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Row from '../components/Row';
import requests from '../config/requests';

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Row title="Programme Originaux Netflix"
                fetchUrl={requests.fetchNetflixOriginals}
                isPoster={true}
            />
            <Row title="Tendances actuelles"
                fetchUrl={requests.fetchTopRated}
            />
            <Row title="Films documentaires"
                fetchUrl={requests.fetchDocumentaries}
            />
            <Row title="Films d'actions"
                fetchUrl={requests.fetchActionMovies}
            />
            <Footer />
        </>
    );
};

export default Home;