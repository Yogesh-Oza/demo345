import React from "react";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useDispatch } from "react-redux";
import { createRestaurant } from "../../State/Customers/Restaurant/restaurant.action";
 const initialValues = {
    name: "",
    description: "",
    cuisineType: "",
    streetAddress: "",
    city: "",
    stateProvince: "",
    postalCode: "",
    country: "",
    email: "",
    mobile: "",
    twitter: "",
    instagram: "",
    openingHours: "Mon-Sun: 9:00 AM - 9:00 PM",
    imageUrl: "",
  };

const CreateRestaurantForm = () => {
 const dispatch=useDispatch();

  const handleSubmit = (values) => {
    const data = {
      name: values.name,
      description: values.description,
      cuisineType: values.cuisineType,
      address: {
        streetAddress: values.streetAddress,
        city: values.city,
        stateProvince: values.stateProvince,
        postalCode: values.postalCode,
        country: values.country,
      },
      contactInformation: {
        email: values.email,
        mobile: values.mobile,
        twitter: values.twitter,
        instagram: values.instagram,
      },
      openingHours: "Mon-Sun: 9:00 AM - 9:00 PM",
      imageUrl:values.imageUrl
    };
    dispatch(createRestaurant(data))
    console.log(data);
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
  });

  return (
    <div className="lg:px-32 lg:flex  justify-center min-h-screen items-center">
      <div>
        <h1 className="font-bold text-2xl text-center py-2">
          Add New Restaurant
        </h1>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
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
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="cuisineType"
                name="cuisineType"
                label="Cuisine Type"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.cuisineType}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="openingHours"
                name="openingHours"
                label="Opening Hours"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.openingHours}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="streetAddress"
                name="streetAddress"
                label="Street Address"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.streetAddress}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                id="city"
                name="city"
                label="City"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.city}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                id="stateProvince"
                name="stateProvince"
                label="State/Province"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.stateProvince}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                id="postalCode"
                name="postalCode"
                label="Postal Code"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.postalCode}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="country"
                name="country"
                label="Country"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.country}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="mobile"
                name="mobile"
                label="Mobile"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.mobile}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="twitter"
                name="twitter"
                label="Twitter"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.twitter}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="instagram"
                name="instagram"
                label="Instagram"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.instagram}
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
          </Grid>
          <Button variant="contained" color="primary" type="submit">
            Create Restaurant
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateRestaurantForm;
