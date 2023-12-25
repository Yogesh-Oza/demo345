import React from "react";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { createMenuItem } from "../../State/Customers/Menu/menu.action";
import { useParams } from "react-router-dom";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number()
    .typeError("Price must be a number")
    .required("Price is required")
    .min(0, "Price must be greater than or equal to 0"),
  category: Yup.string().required("Category is required"),
  imageUrl: Yup.string()
    .url("Invalid URL format")
    .required("Image URL is required"),
  availabilityStatus: Yup.boolean().required("Availability Status is required"),
  isVegetarian: Yup.boolean().required("Is Vegetarian is required"),
  isGlutenFree: Yup.boolean().required("Is Gluten Free is required"),
  isVegan: Yup.boolean().required("Is Vegan is required"),
  quantity: Yup.number()
    .typeError("Quantity must be a number")
    .required("Quantity is required")
    .min(0, "Quantity must be greater than or equal to 0"),
});
const initialValues = {
    name: "",
    description: "",
    price: "",
    category: "",
    imageUrl: "",
    restaurantId: "",
    availabilityStatus: false,
    isVegetarian: false,
    isGlutenFree: false,
    isVegan: false,
    quantity: 0,
  };
const AddMenuForm = () => {
  
  const dispatch=useDispatch()
  const {id}=useParams()

  const handleSubmit = (values) => {
    values.restaurantId=id;
    dispatch(createMenuItem(values))
    console.log(values,id);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
   
  });

  return (
    <div 
    className="lg:px-32 lg:flex  justify-center min-h-screen items-center">
      <div>
        <h1 className="font-bold text-2xl text-center py-2">
          Add New Menu Item
        </h1>
        <form onSubmit={formik.handleSubmit} className="space-y-4 ">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.name}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="description"
                name="description"
                label="Description"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.description}
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                helperText={
                  formik.touched.description && formik.errors.description
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="price"
                name="price"
                label="Price"
                variant="outlined"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.price}
                error={formik.touched.price && Boolean(formik.errors.price)}
                helperText={formik.touched.price && formik.errors.price}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="category"
                name="category"
                label="Category"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.category}
                error={
                  formik.touched.category && Boolean(formik.errors.category)
                }
                helperText={formik.touched.category && formik.errors.category}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="imageUrl"
                name="imageUrl"
                label="Image URL"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.imageUrl}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="availabilityStatus">
                  Availability Status
                </InputLabel>
                <Select
                  id="availabilityStatus"
                  name="availabilityStatus"
                  label="Availability Status"
                  onChange={formik.handleChange}
                  value={formik.values.availabilityStatus}
                >
                  <MenuItem value={true}>Available</MenuItem>
                  <MenuItem value={false}>Not Available</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="isVegetarian">Is Vegetarian</InputLabel>
                <Select
                  id="isVegetarian"
                  name="isVegetarian"
                  label="Is Vegetarian"
                  onChange={formik.handleChange}
                  value={formik.values.isVegetarian}
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="isGlutenFree">Is Gluten Free</InputLabel>
                <Select
                  id="isGlutenFree"
                  name="isGlutenFree"
                  label="Is Gluten Free"
                  onChange={formik.handleChange}
                  value={formik.values.isGlutenFree}
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="isVegan">Is Vegan</InputLabel>
                <Select
                  id="isVegan"
                  name="isVegan"
                  label="Is Vegan"
                  onChange={formik.handleChange}
                  value={formik.values.isVegan}
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {/* Add more fields for the remaining properties */}
          </Grid>
          <Button variant="contained" color="primary" type="submit">
            Create Menu Item
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddMenuForm;
