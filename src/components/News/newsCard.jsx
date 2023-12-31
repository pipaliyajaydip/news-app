import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';
import "./newsList.css";

const NewsCard = ({headLine, shortDiscription, link, imgsrc}) => {
  return (
    <Card sx={{ maxWidth: 358 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image={imgsrc}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {headLine}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {shortDiscription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href = {link} size='small' variant='outlined' target='_blank'>Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default NewsCard;
