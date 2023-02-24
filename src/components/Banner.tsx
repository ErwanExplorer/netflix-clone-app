import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/Banner.scss';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import requests from '../config/requests';
import axios from 'axios';
import QuickView from './QuickView';
import Video from '../components/Video';
import { Link } from 'react-router-dom';

const Banner = () => {

    const [movie, setMovie] = useState<any>([]);
    const [showQuickView, setShowQuickView] = useState(false);

    function handleClickPopup() {
        showQuickView ? setShowQuickView(false) : setShowQuickView(true);
    }

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
        }
        fetchData();
    }, []);

    function truncateText(str: string, n: number) {
        return str?.length > n ? str?.length > n ? str.substr(0, n - 1) + '...' : str : "Aucune description disponible";
    }

    const bannerStyle = {
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
    };

    console.log(showQuickView)

    return (
        <header className='banner' style={bannerStyle}>
            <div className="banner__content">
                <h1 className="banner__title">{movie?.title || movie?.original_title || movie?.name}</h1>
                <p className="banner__description">{truncateText(movie.overview, 100)}</p>
                <div className="banner__buttons">
                    <Link to={`/video/${movie.id}`}><button className="banner__button banner__button--play"><PlayArrowIcon /> Lecture</button></Link>
                    <button className="banner__button banner__button--play"><PlayArrowIcon /> Lecture</button>
                    <button className="banner__button" onClick={handleClickPopup}><InfoOutlinedIcon /> Plus d'Infos</button>
                </div>
            </div>
            <QuickView
                bannerStyle={bannerStyle}
                movie={movie}
                popup={handleClickPopup}
                popupStatut={showQuickView}
            />
        </header>
    );
};

export default Banner;