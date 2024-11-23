import axiosInstance from "../../axios"

const fetchNews = async () => {
    try {
        const response = await axiosInstance.get('top-headlines?country=us&apiKey=1a1c1cd40f994fe09fc955fe76db176a')
        return response.data
    } catch (error) {
        throw error
    }
}

const fetchCategory = async (cat) => {
    try {
        const response = await axiosInstance.get(`top-headlines?country=us&category=${cat}&apiKey=1a1c1cd40f994fe09fc955fe76db176a`)
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