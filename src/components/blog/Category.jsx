import {
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
} from "@material-ui/core";
import { Box } from "@mui/material";
import { fontSize } from "@mui/system";
import { Link, useLocation } from "react-router-dom";

import { categories } from "../../config/data";

const useStyle = makeStyles({
  root: {
    width: "700px",
  },
  table: {
    // borderBottom: "1px dotted rgba(224, 224, 224, 1)",
  },
  write: {
    width: "100%",
    background: "#6495ED",
    color: "#fff",
    textDecoration: "none",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
});

const Categories = ({ match }) => {
  const classes = useStyle();
  const location = useLocation();
  // let params = new URLSearchParams(location.search);
  return (
    <>
      <Box className={classes.root}>
        <Link to={`#`} style={{ textDecoration: "none" }}>
          <Button variant="contained" className={classes.write}>
            Create Blog
          </Button>
        </Link>

        <Table className={classes.table}>
          <TableHead>
            <TableCell>
              <Link to={"/"} className={classes.link}>
                <h3
                  style={{
                    fontFamily: "Josefin Sans",
                    fontSize: "18px",
                    marginBottom: "30px",
                    paddingBottom: "20px",
                    borderBottom: "1px solid #e6e6e6",
                  }}
                >
                  Categories
                </h3>
              </Link>
            </TableCell>
          </TableHead>

          <TableBody>
            {categories.map((category) => (
              <TableRow>
                <TableCell>
                  <Link to={`#`} className={classes.link}>
                    {category}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </>
  );
};

export default Categories;
