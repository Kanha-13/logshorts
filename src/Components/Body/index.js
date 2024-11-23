import { useEffect, useRef, useState } from 'react';
import DownloadApp from '../DownloadApp';
import NewsList from '../NewsList';
import NewsPreview from '../NewsPreview';
import './index.css'
const Body = ({ news }) => {
    const [currentNews, setNews] = useState({})
    const [isPreview, setPreview] = useState(false)
    const mainContainer = useRef();
    const bodyRef = useRef();
    const handleNewsClick = (index) => {
        setPreview(true)
        setNews(news[index])
        if (window.innerWidth > 768) {
            mainContainer.current.style.width = "60%"

            const newslist = document.getElementById('newslist-div');
            const download = document.getElementById('download-app-div');

            if (newslist)
                newslist.style.width = '100%';
            if (download)
                download.style.width = '80%';
        }
    }
    const closemodal = () => {
        setPreview(false)
    }
    useEffect(() => {
        if (isPreview && window.innerWidth > 768) {
            const totalScroll = bodyRef.current.scrollTop
            const previewContainer = document.getElementsByClassName('news-preview-card')[0];
            if (previewContainer)
                previewContainer.style.marginTop = `${totalScroll + 20}px`;
        }

    }, [isPreview, currentNews])
    return (
        <div ref={bodyRef} id='body-div'>
            <div ref={mainContainer} style={{ width: "100%", justifyContent: "center", alignItems: "center", flexDirection: "column", display: "flex" }}>
                <DownloadApp />
                <NewsList handleNewsClick={handleNewsClick} list={news} />
            </div>
            {isPreview && <NewsPreview closemodal={closemodal} data={currentNews} />}
        </div>
    );
}
export default Body;