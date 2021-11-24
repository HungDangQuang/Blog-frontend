import React, { useState, useEffect } from "react";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { DeleteOutline } from "@material-ui/icons";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import {
  Table,
  Stack,
  TableRow,
  TableBody,
  TableCell,
  Typography,
  TableContainer,
} from "@mui/material";

import { getAllComment, deleteComment } from "../apis/commentApi";

export default function CommentTable() {
  const [comments, getComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let data = await getAllComment(); // params in url
      getComments(data);
    };

    fetchData();
  }, []);

  console.log(comments.PostID);

  const handleDelete = (id) => {
    getComments(comments.filter((item) => item._id !== id));
    deleteComment(id);
  };

  const addEllipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str;
  };

  return (
    <TableContainer
      component={Paper}
      style={{ marginTop: 100, marginLeft: 20, width: "95%" }}
    >
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">PostID</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Comment</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {comments.map((comment) => {
            return (
              <TableRow hover key={comment._id} tabIndex={-1} role="checkbox">
                <TableCell component="th" scope="row" padding="none">
                  <Stack direction="row" alignItms="center" spacing={2}>
                    <h1 align="left"></h1>
                    <Typography variant="subtitle2" noWrap>
                      {comment.postID}
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell align="left">{comment.name}</TableCell>
                <TableCell align="left">
                  {addEllipsis(comment.comment, 20)}
                </TableCell>
                <TableCell align="left">{comment.date}</TableCell>

                <TableCell align="left">
                  <Link
                    to={`/update/${comment._id}`}
                    style={{ color: "#000000", marginLeft: 10 }}
                  >
                    <EditIcon />
                  </Link>
                  <DeleteOutline
                    className="userListDelete"
                    onClick={() => handleDelete(comment._id)}
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
