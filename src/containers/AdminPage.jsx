import React, { useState, useEffect } from "react";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { DeleteOutline } from "@material-ui/icons";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import {
  Table,
  Stack,
  Avatar,
  TableRow,
  TableBody,
  TableCell,
  Typography,
  TableContainer,
} from "@mui/material";
import { getAllPosts, deletePost } from "../apis/productApi";

export default function BasicTable() {
  const [posts, getPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let data = await getAllPosts(); // params in url
      getPosts(data);
    };
    fetchData();
  }, []);

  console.log(posts);

  const handleDelete = (id) => {
    getPosts(posts.filter((item) => item._id !== id));
    deletePost(id);
  };

  return (
    <TableContainer
      component={Paper}
      style={{ marginTop: 100, marginLeft: 20, width: "95%" }}
    >
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Category</TableCell>
            <TableCell align="left">Create Date</TableCell>
            <TableCell align="left">Acciton</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post) => {
            return (
              <TableRow hover key={post._id} tabIndex={-1} role="checkbox">
                <TableCell component="th" scope="row" padding="none">
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar alt={post.title} src={post.picture} />
                    <Typography variant="subtitle2" noWrap>
                      {post.title}
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell align="left">{post.categories}</TableCell>
                <TableCell align="left">{post.createdDate}</TableCell>

                <TableCell align="left">
                  <Link
                    to={`/update/${post._id}`}
                    style={{ color: "#000000", marginLeft: 10 }}
                  >
                    <EditIcon />
                  </Link>
                  <DeleteOutline
                    className="userListDelete"
                    onClick={() => handleDelete(post._id)}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
