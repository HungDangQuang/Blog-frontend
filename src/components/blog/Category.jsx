import {
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";

import { categories } from "../../config/data";

const useStyle = makeStyles({
  table: {
    marginTop: 10,
  },
  write: {
    margin: 10,
    width: "85%",
    background: "#6495ED",
    color: "#fff",
    textDecoration: "none",
  },
  link: {
    display: "box",
    textDecoration: "none",
    padding: "5px 50px 5px 15px",
    fontFamily: "Inconsolata",
    color: "#000000",
    "&:hover": {
      textDecoration: "none",
      color: "#ffff",
    },
  },
  drop: {
    listStyle: "none",
    "&:hover": {
      backgroundColor: "rgb(7, 177, 77, 0.42)",
    },
  },
});

const Categories = () => {
  const classes = useStyle();

  return (
    <>
      <div className={classes.table}>
        {categories.map((category) => (
          <li className={classes.drop}>
            <Link to={`/?category=${category}`} className={classes.link}>
              {category}
            </Link>
          </li>
        ))}
      </div>
    </>
  );
};

export default Categories;
