import React, { useState, useEffect } from "react";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { DeleteOutline } from "@material-ui/icons";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import plusFill from "@iconify/icons-eva/plus-fill";
import {
  Box,
  Button,
  Table,
  Stack,
  Avatar,
  TableRow,
  TableBody,
  TableCell,
  Typography,
  TableContainer,
  TablePagination,
} from "@mui/material";
import Notification from "../components/alertMessage/index";

import ConfirmDialog from "../components/alertMessage/ConfirmDialog";
import { getAllPosts, deletePost } from "../apis/productApi";

function BasicTable() {
  const [posts, getPosts] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [page, setPage] = useState(0);

  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    const fetchData = async () => {
      let data = await getAllPosts(); // params in url
      getPosts(data);
    };
    fetchData();
  }, []);

  const handleDelete = (id) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    getPosts(posts.filter((item) => item._id !== id));
    deletePost(id);
    setNotify({
      isOpen: true,
      message: "Deleted Successfully",
      type: "success",
    });
  };

  const addEllipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str;
  };
  return (
    <>
      <Box>
        <Box
          style={{
            backgroundColor: "rgb(235, 234, 230)",
            display: "flex",
            justifyContent: "space-between",
            marginTop: 110,
          }}
        >
          <Box>
            <Typography variant="h4"> Manage Posts</Typography>
          </Box>
          <Link to="/create">
            <Button
              style={{
                backgroundColor: "rgb(71 74 74)",
                marginBottom: 30,
                width: 140,
                marginRight: 35,
              }}
              variant="contained"
              startIcon={<Icon icon={plusFill} />}
            >
              New Post
            </Button>
          </Link>
        </Box>

        <TableContainer
          component={Paper}
          style={{ marginLeft: 20, width: "95%" }}
        >
          <Notification notify={notify} setNotify={setNotify} />
          <ConfirmDialog
            confirmDialog={confirmDialog}
            setConfirmDialog={setConfirmDialog}
          />
          <Table sx={{ minWidth: 500 }} aria-label="simple table">
            <TableHead>
              <TableRow style={{ backgroundColor: "rgb(71 74 74)" }}>
                <TableCell
                  align="left"
                  style={{ paddingLeft: 55, color: "white", fontWeight: 900 }}
                >
                  Title
                </TableCell>
                <TableCell
                  style={{ color: "white", fontWeight: 900 }}
                  align="center"
                >
                  Description
                </TableCell>
                <TableCell
                  style={{ color: "white", fontWeight: 900 }}
                  align="center"
                >
                  Date created
                </TableCell>
                <TableCell
                  style={{ color: "white", fontWeight: 900 }}
                  align="center"
                >
                  Aciton
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.map((post) => {
                return (
                  <TableRow hover key={post._id} tabIndex={-1} role="checkbox">
                    <TableCell component="th" scope="row" padding="none">
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Box align="left"></Box>

                        <Avatar alt={post.title} src={post.picture} />
                        <Typography variant="subtitle2" noWrap>
                          {addEllipsis(post.title, 20)}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell align="center">
                      {addEllipsis(post.description, 50)}
                    </TableCell>
                    <TableCell align="center">{post.createdDate}</TableCell>

                    <TableCell align="center">
                      <Link
                        to={`/update/${post._id}`}
                        style={{ color: "#000000", marginLeft: 10 }}
                      >
                        <EditIcon />
                      </Link>
                      <DeleteOutline
                        className="userListDelete"
                        onClick={() => {
                          setConfirmDialog({
                            isOpen: true,
                            title: "Are you sure to delete this post?",
                            subTitle: "You can't undo this operation",
                            onConfirm: () => {
                              handleDelete(post._id);
                            },
                          });
                        }}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[7, 14, 26]}
            component="div"
            count={posts.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Box>
    </>
  );
}

export default React.memo(BasicTable);
