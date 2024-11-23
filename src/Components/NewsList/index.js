import NewsCard from '../NewsCard';
import './index.css'
const NewsList = ({ list = [], handleNewsClick }) => {
    return (
        <div id="newslist-div">
            {
                list.map((news, index) => <NewsCard key={news.title} onclick={handleNewsClick} index={index} data={news} />)
            }
        </div>
    )
}

export default NewsList;