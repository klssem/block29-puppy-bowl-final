import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Typography, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPlayerSearchQuery } from "../api/searchSlice";

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useDispatch();

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        dispatch(setPlayerSearchQuery(event.target.value));
    };

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Puppy Bowl
        </Typography>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "20px",
          }}
        >
          Home
        </Link>
        <Link 
            to="/submit-player" 
            style={{ color: "white", textDecoration: "none" }}
        >
          Submit Player
        </Link>
        <TextField 
                    label="Search Players" 
                    variant="outlined" 
                    size="small" 
                    value={searchQuery}
                    onChange={handleSearchChange}
                    style={{ marginLeft: '20px', backgroundColor: 'white' }}
                    
                />
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  idName: PropTypes.string,
};

Navbar.defaultProps = {
  idName: "navbar",
};

export default Navbar;
