import React, { useContext, useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import "./EditProduct.css";
import { productContext } from "../../../context/ProductContextProvider";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { productDetails, readOneProduct, editProduct } =
    useContext(productContext);
  const [inpValues, setInpValues] = useState(productDetails);

  const { id } = useParams();
  useEffect(() => {
    readOneProduct(id);
  }, [id]);

  function handleChange(e) {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
  }

  const navigate = useNavigate();

  function handleSave(e) {
    e.preventDefault(); // останавливает автообновление бразуреа при отправке данных через form
    if (
      !inpValues.category.trim() ||
      !inpValues.title.trim() ||
      !inpValues.model.trim() ||
      !inpValues.description.trim() ||
      !inpValues.color.trim() ||
      !inpValues.price ||
      !inpValues.img1.trim() ||
      !inpValues.img2.trim() ||
      !inpValues.img3.trim()
    ) {
      alert("Заполните все поля!");
      return;
    }
    editProduct(id, inpValues);
    navigate("/list");
  }

  return (
    <>
      <h2 id="add-title">Редактирование товара</h2>
      <form id="form-add" onSubmit={(e) => handleSave(e)}>
        <TextField
          className="outlined-basic"
          label="Категория"
          variant="outlined"
          name="category"
          value={inpValues.category}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          className="outlined-basic"
          label="Название"
          variant="outlined"
          name="title"
          value={inpValues.title}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          className="outlined-basic"
          label="Модель"
          variant="outlined"
          name="model"
          value={inpValues.model}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          className="outlined-basic"
          label="Описание"
          variant="outlined"
          name="description"
          value={inpValues.description}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          className="outlined-basic"
          label="Цвет"
          variant="outlined"
          name="color"
          value={inpValues.color}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          className="outlined-basic"
          label="Цена"
          variant="outlined"
          name="price"
          type="number"
          value={+inpValues.price}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          className="outlined-basic"
          label="Фото 1"
          variant="outlined"
          name="img1"
          value={inpValues.img1}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          className="outlined-basic"
          label="Фото 2"
          variant="outlined"
          name="img2"
          value={inpValues.img2}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          className="outlined-basic"
          label="Фото 3"
          variant="outlined"
          name="img3"
          value={inpValues.img3}
          onChange={(e) => handleChange(e)}
        />
        <Button variant="contained" type="submit">
          Сохранить
        </Button>
      </form>
    </>
  );
};

export default EditProduct;
