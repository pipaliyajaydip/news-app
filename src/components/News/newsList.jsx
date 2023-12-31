import NewsCard from "./newsCard";
import FetchNews from "../../Service/fetchNews";
import { Container, Grid, CircularProgress } from "@mui/material";
import arr from "../../sampleResponse/news.json"
import "./newsList.css"
import newsImg from "../../sampleResponse/newsImage.jpg"

const NewsList = ({catagory, search}) => {

    const { newsData, error, loading } = FetchNews(catagory,search)

    
    return (
        <Container className="margin-top">
            {
                loading ? <CircularProgress variant="indeterminate" /> :
                <Grid container spacing={4} >
                    {arr?.map((articles) => (
                        <Grid item key={articles.title}>
                            <NewsCard headLine={articles.title} shortDiscription={articles.description} link={articles.url} imgsrc={articles.urlToImage ? articles.urlToImage : newsImg} />
                        </Grid>
                    ))}
                </Grid>
            }
        </Container>
    )
}

export default NewsList;