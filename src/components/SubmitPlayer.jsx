import { useState } from "react";
import { Grid, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@mui/material";
import { useCreatePlayerMutation } from "../api/puppyBowlApi";
import { useNavigate } from "react-router-dom";



const CreatePlayerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    status: "field",
    imageUrl: "",
  });

  // Use the mutation hook directly within the component
  const [createPlayer] = useCreatePlayerMutation(); // Destructure the mutation function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the mutation function to create a new player
      const newPlayerData = await createPlayer(formData).unwrap();
      navigate('/');
      console.log("New player created:", newPlayerData);
    } catch (error) {
      // Handle any errors that occurred during the mutation
      console.error("Error creating player:", error);
    }
  };

  return (
    <div id="newPlayerForm">
      <h2 style={{ textAlign: "left" }}> Submit New Player </h2>
      <form onSubmit={handleSubmit}>
        <Grid
          max-width="sm"
          container
          spacing={2}
          direction="column"
          alignItems="start"
        >
          <Grid item md={4}>
            <TextField
              //   fullWidth
              style={{ width: "300px" }}
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              //   fullWidth
              style={{ width: "300px" }}
              label="Breed"
              name="breed"
              value={formData.breed}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3}>
          <FormControl component="fieldset">
              <FormLabel component="legend">Status</FormLabel>
              <RadioGroup
                aria-label="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <FormControlLabel value="field" control={<Radio />} label="Field" />
                <FormControlLabel value="bench" control={<Radio />} label="Bench" />
                {/* Add more options as needed */}
              </RadioGroup>
            </FormControl>
            {/* <TextField
              //   fullWidth
              style={{width: '300px'}}
              label="Status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            /> */}
          </Grid>
          <Grid item md={5}>
            <TextField
              //   fullWidth
              style={{ width: "300px" }}
              label="Image URL"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3}>
            <Button type="submit" variant="contained" color="primary">
              Create Player
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CreatePlayerForm;
