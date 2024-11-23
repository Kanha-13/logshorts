import { useState } from 'react';
import './index.css'
import CATEGORIES from './const';
const Sidebar = ({ current = "", onclick }) => {
    const [categories, setCategories] = useState(CATEGORIES)
    const handleCat = (cat) => {
        onclick(cat)
    }

    const getBG = (cat) => {
        return (cat === current) ? "#636363" : ""
    }
    return (
        <div id='sidebar-div'>
            <div id='languages'>
                <div style={{ backgroundColor: "#636363", color: "#000000" }}>English</div>
                <div>Hindi</div>
            </div>
            <div id='category-div'>
                {
                    categories.map(cat => <div key={cat.key} onClick={() => handleCat(cat.key)} style={{ backgroundColor: getBG(cat.key) }} className='cat-p-div' ><p className='cat-p'>{cat.title}</p></div>)
                }
            </div>
            <br />
        </div>
    );
}

export default Sidebar