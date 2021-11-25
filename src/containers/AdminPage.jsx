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
  TablePagination,
} from "@mui/material";
import Notification from "../components/alertMessage/index";
import ConfirmDialog from "../components/alertMessage/ConfirmDialog";
import { getAllPosts, deletePost } from "../apis/productApi";
import { useSelector } from "react-redux";

export default function BasicTable() {
  const { email } = useSelector((state) => state.user);

  console.log(`Xin chao${email}`);

  const [posts, getPosts] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
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
      type: "error",
    });
  };

  const addEllipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str;
  };
  return (
    <>
      <TableContainer
        component={Paper}
        style={{ marginTop: 100, marginLeft: 20, width: "95%" }}
      >
        <Notification notify={notify} setNotify={setNotify} />
        <ConfirmDialog
          confirmDialog={confirmDialog}
          setConfirmDialog={setConfirmDialog}
        />
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: "rgb(174, 242, 242)" }}>
              <TableCell align="left" style={{ paddingLeft: 55 }}>
                Title
              </TableCell>
              <TableCell align="center">Category</TableCell>
              <TableCell align="center">Create Date</TableCell>
              <TableCell align="center">Aciton</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((post) => {
              return (
                <TableRow hover key={post._id} tabIndex={-1} role="checkbox">
                  <TableCell component="th" scope="row" padding="none">
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <h1 align="left"></h1>

                      <Avatar alt={post.title} src={post.picture} />
                      <Typography variant="subtitle2" noWrap>
                        {addEllipsis(post.title, 20)}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell align="center">{post.categories}</TableCell>
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
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={posts.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </>
  );
}
