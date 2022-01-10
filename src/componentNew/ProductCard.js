import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ProductCard = ({ product, editable = false }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            {/* <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            /> */}
            <CardActionArea href={`/product/${product.id}`}>
                <CardMedia
                    component="img"
                    height="194"
                    image="https://cf.shopee.tw/file/b5772fc8fe61728bd8afd0b135c54cf3_tn"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {product && product.description.slice(0, 20)}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        ${product && product.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            {editable ?
                <CardActions>
                    <Button disabled={false} size="small">上架</Button>
                    <Button size="small">下架</Button>
                </CardActions>
                : null}
            {/* <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>


            </CardActions> */}
        </Card>
    );
}

export default ProductCard;