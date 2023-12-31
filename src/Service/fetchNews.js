import {useState, useEffect} from "react";
//import dotenv from "dotenv";

const FetchNews = (catagoryTerm, searchTerm) => {

    const [newsData, setNews] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        const getNews = async () => {

            const key = process.env.REACT_APP_NEWS_API_KEY;
            const apiUrl = (catagoryTerm && searchTerm ? `https://newsapi.org/v2/everything?apiKey=${key}` : `https://newsapi.org/v2/top-headlines?apiKey=${key}&country=in`);

            try{
                setLoading(true);
                const baseUrl = `${apiUrl}`
                const catagoryParam = catagoryTerm ? `&catagory=${catagoryTerm}` : "";
                const searchParam = searchTerm ? `&q=${searchTerm}` : ""; 
                const url = baseUrl + catagoryParam + searchParam;
                const response = await fetch(url);
                const data = await response.json();
                setNews(data.articles);
                //console.log(data.articles);
                setLoading(false);
            } catch (error){
                setError(error);
                setLoading(false);
            }
        }
        getNews();
    },[catagoryTerm, searchTerm]);

    return {newsData, error, loading} ;
}

export default FetchNews;