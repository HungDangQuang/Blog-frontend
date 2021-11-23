import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import searchFill from "@iconify/icons-eva/search-fill";
// material

import { Box, TextField, InputAdornment } from "@mui/material";

// ----------------------------------------------------------------------

export default function Search() {
  return (
    <>
      <TextField
        id="standard-basic"
        style={{
          width: 300,
          height: 30,
          borderRadius: 0,
        }}
        placeholder="Search post..."
        InputProps={{
          startAdornment: (
            <>
              <InputAdornment position="end">
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
