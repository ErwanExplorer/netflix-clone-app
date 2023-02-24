import React from 'react';
import '../styles/QuickView.scss';
import CancelIcon from '@material-ui/icons/Cancel';

interface RowProps {
    movie: any;
    popup: () => void;
    popupStatut: boolean;
    bannerStyle: any;
}

const QuickView = ({ bannerStyle, movie, popup, popupStatut }: RowProps) => {
    return (
        <div className={`quickview ${popupStatut && "open"}`}>
            <div className="quickview__banner" style={bannerStyle}>
                <div className="quickview__content">
                    <h3 className="quickview__title">{movie?.title || movie?.original_title || movie?.name}</h3>
                    <p>{movie.overview}</p>
                    <p>{movie.overview}</p>
                    <p>{movie.overview}</p>
                </div>
                <button className="quickview__close" onClick={popup}><CancelIcon /></button>
            </div>
        </div>
    );
};

export default QuickView;