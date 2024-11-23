import React, { useEffect, useState } from 'react';
import './index.css'
const NewsPreview = ({ data, closemodal }) => {
    const [isError, setError] = useState(false)
    const [closeBtn, setCloseBtn] = useState(false)

    useEffect(() => {
        if (window.innerWidth < 768)
            setCloseBtn(true)
    }, [])

    return (
        <div className="news-preview-card">
            {closeBtn && <div onClick={closemodal} id='close-btn'>
                <h1>X</h1>
            </div>}
            {isError ? <div className='news-preview-img'>
                <p>Image not available</p>
            </div> : <img className='news-preview-img' onError={() => setError(true)} src={data.urlToImage} alt='news-img' />}
            <div className='news-preview-about'>
                <p className='headline-title'>{data.title}</p>
                <p className='news-preview-by'><span>shorts</span> by {data.author} / {data.publishedAt} </p>
                <p className='news-preview-desc'>{data.description}</p>
                <a href={data.url} target="_blank" rel="noopener noreferrer" className='read-more'>read more at {data.source.name}</a>
            </div>
        </div>
    );
};

export default NewsPreview;