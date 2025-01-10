import axiosInstance from "../../axios"

const fetchNews = async () => {
    try {
        const response = await axiosInstance.get('top-headlines?country=us&apiKey=' + process.env.REACT_APP_NEWS_API)
        return response.data
    } catch (error) {
        throw error
    }
}

const fetchCategory = async (cat) => {
    try {
        const response = await axiosInstance.get(`top-headlines?country=us&category=${cat}&apiKey=` + process.env.REACT_APP_NEWS_API)
        return response.data
    } catch (error) {
        throw error
    }
}

const newsController = {
    fetchNews,
    fetchCategory
}

export default newsController;