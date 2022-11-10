import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red, blue } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./ProductCard.css";
import { Link, useNavigate } from "react-router-dom";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const ProductCard = ({ obj }) => {
  let navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            {obj.category[0].toUpperCase()}
          </Avatar>
        }
        action={
          <Link to={`/details/${obj.id}`}>
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          </Link>
        }
        title={obj.title}
        subheader={obj.model}
      />
      <CardMedia
        component="img"
        height="280"
        image={obj.img1}
        alt={obj.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" className="cardText">
          {obj.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
