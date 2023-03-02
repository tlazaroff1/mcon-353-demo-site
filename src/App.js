import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import MenuItem from "@mui/material/MenuItem";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { Button, CardActionArea, CardActions, Icon } from "@mui/material";
// import SendIcon from "@mui/icons-material/Send";
// import TextField from "@mui/material/TextField";
// import InputAdornment from "@mui/material/InputAdornment";
// import logo from "./logo.png";
// import flatbread from "./flatbreadSalad.jpg";
// import onionRoll from "./onionRolls.jpeg";
import "./App.css";
import { Home } from "./Components/home/home";
import { Todo } from "./Components/todo/todo";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Components/header/header";
// const pages = ["Soups", "Breads", "Sides", "Mains", "Dessert"];

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </HashRouter>
  );
}
export default App;

//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   const [value] = React.useState(5);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <AppBar position="static">
//           <Container maxWidth="xl">
//             <Toolbar disableGutters>
//               <Typography
//                 sx={{
//                   mr: 2,
//                   display: { xs: "none", md: "flex" },
//                 }}
//               >
//                 <img src={logo} alt="recipeCornerLogo" width={200} />
//               </Typography>

//               <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//                 <IconButton
//                   size="large"
//                   aria-label="account of current user"
//                   aria-controls="menu-appbar"
//                   aria-haspopup="true"
//                   onClick={handleOpenNavMenu}
//                   color="#060F37"
//                 >
//                   <MenuIcon />
//                 </IconButton>
//                 <Menu
//                   id="menu-appbar"
//                   anchorEl={anchorElNav}
//                   anchorOrigin={{
//                     vertical: "bottom",
//                     horizontal: "left",
//                   }}
//                   keepMounted
//                   transformOrigin={{
//                     vertical: "top",
//                     horizontal: "left",
//                   }}
//                   open={Boolean(anchorElNav)}
//                   onClose={handleCloseNavMenu}
//                   sx={{
//                     display: { xs: "block", md: "none" },
//                     color: "#060F37",
//                   }}
//                 >
//                   {pages.map((page) => (
//                     <MenuItem key={page} onClick={handleCloseNavMenu}>
//                       <Typography textAlign="center">{page}</Typography>
//                     </MenuItem>
//                   ))}
//                 </Menu>
//               </Box>
//               <Typography
//                 sx={{
//                   mr: 2,
//                   display: { xs: "flex", md: "none" },
//                   flexGrow: 1,
//                 }}
//               >
//                 <img src={logo} alt="recipeCornerLogo" width={200} />
//               </Typography>
//               <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//                 {pages.map((page) => (
//                   <Button
//                     key={page}
//                     onClick={handleCloseNavMenu}
//                     sx={{ my: 2, color: "white", display: "block" }}
//                   >
//                     {page}
//                   </Button>
//                 ))}
//               </Box>
//             </Toolbar>
//           </Container>
//         </AppBar>
//         <div className="cardGrid">
//           <div className="welcome">
//             <p id="welcomeTo">Welcome To...</p>
//             <img src={logo} alt="recipeCornerLogo" width={600} />
//           </div>

//           <div className="title">Top Recipes</div>

//           <Card sx={{ maxWidth: 290 }} className="firstCard">
//             <CardActionArea>
//               <CardMedia
//                 component="img"
//                 height="160"
//                 image={flatbread}
//                 alt="flatbead salad"
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                   Flatbread Salad
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//             <Rating name="read-only" value={value} readOnly />
//             <CardActions>
//               <Button size="small" color="primary">
//                 View Recipe
//               </Button>
//             </CardActions>
//           </Card>

//           {/* 2nd card */}
//           <Card sx={{ maxWidth: 290 }} className="secondCard">
//             <CardActionArea>
//               <CardMedia
//                 component="img"
//                 height="160"
//                 image={onionRoll}
//                 alt="Onion Rolls"
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                   Onion Rolls
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//             <Rating name="read-only" value={value} readOnly />
//             <CardActions>
//               <Button size="small" color="primary" className="viewRecipe">
//                 View Recipe
//               </Button>
//             </CardActions>
//           </Card>
//         </div>
//         <div className="title">
//           <TextField
//             id="outlined-basic"
//             label="Enter Email To Subscibe"
//             variant="outlined"
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton color="#060F37">
//                     <SendIcon />
//                   </IconButton>
//                 </InputAdornment>
//               ),
//             }}
//           />
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;
