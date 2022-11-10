import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { productContext } from "../../../context/ProductContextProvider";
import { Link, useNavigate, useParams } from "react-router-dom";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./ProductDetails.css";
import SwiperCore, { Thumbs } from "swiper";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { AddShoppingCart } from "@mui/icons-material";
import { basketContext } from "../../../context/BasketContextProvider";

SwiperCore.use([Thumbs]);

const ProductDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { readOneProduct, productDetails, deleteProduct } =
    useContext(productContext);

  const { addProductToBasket } = useContext(basketContext);

  const { id } = useParams();

  useEffect(() => {
    readOneProduct(id);
  }, [id]);

  const navigate = useNavigate();

  return (
    <>
      {productDetails ? (
        <Container sx={{ marginTop: "40px" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Swiper
                className="mySwiper2"
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
              >
                <SwiperSlide>
                  <img src={productDetails.img1} alt={productDetails.title} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={productDetails.img2} alt={productDetails.title} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={productDetails.img3} alt={productDetails.title} />
                </SwiperSlide>
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Paper elevation={3}>
                    <img src={productDetails.img1} alt={productDetails.title} />
                  </Paper>
                </SwiperSlide>
                <SwiperSlide>
                  <Paper elevation={3}>
                    <img src={productDetails.img2} alt={productDetails.title} />
                  </Paper>
                </SwiperSlide>
                <SwiperSlide>
                  <Paper elevation={3}>
                    <img src={productDetails.img3} alt={productDetails.title} />
                  </Paper>
                </SwiperSlide>
              </Swiper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={3} sx={{ padding: "10px", marginTop: "40px" }}>
                <Typography variant="h4">
                  {productDetails.title}{" "}
                  <PhoneIphoneIcon sx={{ fontSize: "30px" }} />
                </Typography>
                <Typography variant="h5">{productDetails.model}</Typography>
                <hr />
                <Typography sx={{ marginTop: "30px" }}>
                  {productDetails.description}
                </Typography>
                <Alert
                  icon={<AttachMoneyIcon />}
                  sx={{
                    fontSize: "25px",
                    fontWeight: 700,
                    mt: "20px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Цена: {productDetails.price} сом
                  <Button variant="contained" sx={{ marginLeft: "20px" }}>
                    Купить
                  </Button>
                  <Button
                    variant="contained"
                    color="warning"
                    sx={{ marginLeft: "20px" }}
                    onClick={() => addProductToBasket(productDetails)}
                  >
                    <AddShoppingCart />
                  </Button>
                </Alert>
                <Box
                  sx={{
                    mt: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    variant="contained"
                    color="error"
                    sx={{ width: "48%" }}
                    onClick={() => deleteProduct(productDetails.id)}
                  >
                    Delete
                  </Button>
                  {/* <Link
                    to={`/edit/${productDetails.id}`}
                    style={{ width: "50%" }}
                  > */}
                  <Button
                    variant="contained"
                    color="warning"
                    sx={{ width: "48%" }}
                    onClick={() => navigate(`/edit/${productDetails.id}`)}
                  >
                    Edit
                  </Button>
                  {/* </Link> */}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      ) : null}
    </>
  );
};

export default ProductDetails;
