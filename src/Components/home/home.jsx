import React from "react";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Icon } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import logo from "./../../logo.png";
import flatbread from "./../../flatbreadSalad.jpg";
import onionRoll from "./../../onionRolls.jpeg";
import "./../../App.css";
import Rating from "@mui/material/Rating";

export const Home = () => {
  const [value] = React.useState(5);

  return (
    <div className="App">
      <header className="App-header">
        <div className="cardGrid">
          <div className="welcome">
            <p id="welcomeTo">Welcome To...</p>
            <img src={logo} alt="recipeCornerLogo" width={600} />
          </div>

          <div className="title">Top Recipes</div>

          <Card sx={{ maxWidth: 290 }} className="firstCard">
            <CardActionArea>
              <CardMedia
                component="img"
                height="160"
                image={flatbread}
                alt="flatbead salad"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Flatbread Salad
                </Typography>
              </CardContent>
            </CardActionArea>
            <Rating name="read-only" value={value} readOnly />
            <CardActions>
              <Button size="small" color="primary">
                View Recipe
              </Button>
            </CardActions>
          </Card>

          {/* 2nd card */}
          <Card sx={{ maxWidth: 290 }} className="secondCard">
            <CardActionArea>
              <CardMedia
                component="img"
                height="160"
                image={onionRoll}
                alt="Onion Rolls"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Onion Rolls
                </Typography>
              </CardContent>
            </CardActionArea>
            <Rating name="read-only" value={value} readOnly />
            <CardActions>
              <Button size="small" color="primary" className="viewRecipe">
                View Recipe
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className="title">
          <TextField
            id="outlined-basic"
            label="Enter Email To Subscibe"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton color="#060F37">
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
      </header>
    </div>
  );
};
