import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import searchFill from "@iconify/icons-eva/search-fill";
// material
import { styled } from "@mui/material/styles";
import { Box, TextField, Autocomplete, InputAdornment } from "@mui/material";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  "& .MuiAutocomplete-root": {
    width: 200,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.shorter,
    }),
    "&.Mui-focused": {
      width: 240,
      "& .MuiAutocomplete-inputRoot": {
        boxShadow: "5px 10px 18px #888888",
      },
    },
  },
  "& .MuiAutocomplete-inputRoot": {
    "& fieldset": {
      borderWidth: `1px !important`,
      borderColor: `${theme.palette.grey[500_32]} !important`,
    },
  },
  "& .MuiAutocomplete-option": {
    "&:not(:last-child)": {
      borderBottom: `solid 1px ${theme.palette.divider}`,
    },
  },
}));

// ----------------------------------------------------------------------

Search.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function Search({ posts }) {
  return (
    <>
      <TextField
        placeholder="Search post..."
        InputProps={{
          startAdornment: (
            <>
              <InputAdornment position="start">
                <Box
                  component={Icon}
                  icon={searchFill}
                  sx={{
                    ml: 1,
                    width: 20,
                    height: 20,
                    color: "text.disabled",
                  }}
                />
              </InputAdornment>
            </>
          ),
        }}
      />
    </>
  );
}
