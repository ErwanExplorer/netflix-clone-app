import React from 'react';
import '../styles/Row.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import requests from '../config/requests';
import { Link } from 'react-router-dom';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

interface RowProps {
    title: string;
    fetchUrl: string;
    isPoster?: boolean;
}

const Row = ({ title, fetchUrl, isPoster }: RowProps) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
        }
        fetchData();
    }, []);

    return (
        <div className='row'>
            <h2 className='row__title'>{title}</h2>
            <div className="row__images">

                {
                    movies.map((movie: any) => (
                        <div key={movie.id}>
                            {isPoster ? (

                                <Link to={`/video/${movie.id}`}><button className="banner__button banner__button--play"></button>
                                    < img src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt={movie.title} className='row__image' />
                                </Link>

                            ) : (
                                <Link to={`/video/${movie.id}`}><button className="banner__button banner__button--play"></button>
                                    < img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie.title} className='row__image' />
                                </Link>
                            )}
                        </div>

                    ))
                }

            </div>
        </div>
    );
};

export default Row;