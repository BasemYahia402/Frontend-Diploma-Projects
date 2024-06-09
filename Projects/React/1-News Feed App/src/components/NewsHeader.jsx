import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import { MenuItem, Select } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.common.white,
  "&:hover": {
    backgroundColor: theme.palette.common.white,
  },
  width: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100%", // Set a minimum width for better layout on small screens
  },
}));
const Toolbarstyle = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    height: "180px",
    margin: "auto",
    flexDirection: "column",
    justifyContent: "center", // Set a minimum width for better layout on small screens
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.text.primary,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 5),
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  color: theme.palette.action,
  backgroundColor: theme.palette.common.white,
  "&:before": {
    borderColor: theme.palette.action,
  },
  "&:after": {
    borderColor: theme.palette.action,
  },
  "& .MuiSelect-icon": {
    color: theme.palette.action,
  },
  margin: theme.spacing(2),
  width: 200,
  height: 40,

  [theme.breakpoints.down("sm")]: {
    width: "100%", // Set a minimum width for better layout on small screens
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

/**
 * The header to be displayed at the top of the page.
 */
function NewsHeader(props) {
  const { onSearchChange, category, onCategoryChange } = props;

  const handleInputChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <AppBar position="sticky">
      <Toolbarstyle>
        <Typography variant="h6">NewsFeed</Typography>
        <StyledSelect value={category} onChange={onCategoryChange}>
          <StyledMenuItem value="general">General</StyledMenuItem>
          <StyledMenuItem value="business">Business</StyledMenuItem>
          <StyledMenuItem value="entertainment">Entertainment</StyledMenuItem>
          <StyledMenuItem value="health">Health</StyledMenuItem>
          <StyledMenuItem value="science">Science</StyledMenuItem>
          <StyledMenuItem value="sports">Sports</StyledMenuItem>
          <StyledMenuItem value="technology">Technology</StyledMenuItem>
        </StyledSelect>
        <Search>
          <SearchIconWrapper>
            <SearchIcon color="action" />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            onChange={handleInputChange}
          />
        </Search>
      </Toolbarstyle>
    </AppBar>
  );
}

export default NewsHeader;
