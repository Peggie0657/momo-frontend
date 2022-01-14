import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grow from "@mui/material/Grow";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';

const ProductCard = ({ product, editable = false, link }) => {
    const handleState = (state) => {

    }
    return (<>
        <Grow in={true}>
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
                <CardActionArea href={link ? `/product/${product.id}` : null}>
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://cf.shopee.tw/file/b5772fc8fe61728bd8afd0b135c54cf3_tn"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {product && product.name.slice(0, 20)}
                        </Typography>
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
                        <Button disabled={product.state === 1 ? false : true} size="small">上架</Button>
                        <Button disabled={product.state === 0 ? true : false} size="small" onClick={handleState("0")}>下架</Button>
                        <Button size="small">更新</Button>
                    </CardActions>
                    : null}
                {/* <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>


            </CardActions> */}
            </Card>
        </Grow>
    </>);
}

export default React.memo(ProductCard);