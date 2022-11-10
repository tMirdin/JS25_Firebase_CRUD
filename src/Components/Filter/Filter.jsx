import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
} from "@mui/material";
import React from "react";

const Filter = ({ category, setCategory, price, setPrice }) => {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">По категориям</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="all"
        name="radio-buttons-group"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <FormControlLabel value="phone" control={<Radio />} label="Телефоны" />
        <FormControlLabel value="laptop" control={<Radio />} label="Ноутбуки" />
        <FormControlLabel value="watch" control={<Radio />} label="Часы" />
        <FormControlLabel value="all" control={<Radio />} label="Все товары" />
      </RadioGroup>
      <FormLabel id="demo-radio-buttons-group-label">По ценам</FormLabel>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        valueLabelDisplay="auto"
        min={0}
        max={200000}
      />
    </FormControl>
  );
};

export default Filter;
