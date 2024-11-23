import { useState } from 'react';
import './index.css'
const NewsCard = ({ data, onclick, index }) => {
    const [isError, setError] = useState(false)
    return (
        <div className="news-card">
            {isError ? <div className='news-img'>
                <p>Image not available</p>
            </div> : <img onClick={() => onclick(index)} className='news-img' onError={() => setError(true)} src={data.urlToImage} alt='news-img' />}
            <div className='news-about'>
                <div style={{ maxHeight: "85%", minHeight: "85%", overflow: "hidden", width: "100%" }}>
                    <p onClick={() => onclick(index)} className='headline-title'>{data.title}</p>
                    <p className='news-by'><span>shorts</span> by {data.author} / {data.publishedAt} </p>
                    <p onClick={() => onclick(index)} className='news-desc'>{data.description}</p>
                </div>
                <a href={data.url} target="_blank" rel="noopener noreferrer" className='read-more'>read more at {data.source.name}</a>
            </div>
        </div>
    )
}

export default NewsCard;