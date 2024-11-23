import { useEffect, useState } from "react";
import Body from "../../Components/Body";
import Header from "../../Components/Header";
import newsController from "../../Components/controller/news";
import Sidebar from "../../Components/Sidebar";

const Home = () => {
    const [newsList, setNews] = useState([])
    const [isSideBar, setSideBar] = useState(false);
    const [currentCat, setCurrentCat] = useState("")

    const fetchNews = async () => {
        try {
            const response = await newsController.fetchNews();
            setNews(response.articles.filter(art => art.title !== "[Removed]"))
        } catch (error) {
            alert("Something went wrong!")
        }
    }

    const fetchCat = async (cat) => {
        try {
            setCurrentCat(cat)
            setSideBar(false)
            const response = await newsController.fetchCategory(cat);
            setNews(response.articles.filter(art => art.title !== "[Removed]"))
        } catch (error) {
            alert("Something went wrong!")
        }
    }

    const handleSidebar = () => {
        if (window.innerWidth > 768) {

            const element = document.getElementById("sidebar-btn")
            if (element)
                if (!isSideBar) {
                    element.style.marginLeft = "15vw"
                } else element.style.marginLeft = "0px"
        }
        setSideBar(old => !old)
    }

    useEffect(() => {
        fetchNews()
    }, [])
    return (
        <div style={{
            padding: "0px", margin: "0px", overflow: "hidden",
            width: "100vw", height: "100vh"
        }}>
            <Header onclick={handleSidebar} />
            <Body news={newsList} />
            {isSideBar && <Sidebar current={currentCat} onclick={fetchCat} />}
        </div>
    )
}


export default Home;