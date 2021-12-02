import React, { useState, useEffect } from "react";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { DeleteOutline } from "@material-ui/icons";
import EditIcon from "@mui/icons-material/Edit";
import { Modal, Button } from "react-bootstrap";
import ReplyForm from "./ReplyForm";
import {
  Box,
  Link,
  Table,
  Stack,
  TableRow,
  TableBody,
  TableCell,
  Typography,
  TableContainer,
  TablePagination,
} from "@mui/material";
import Notification from "../components/alertMessage/index";
import ConfirmDialog from "../components/alertMessage/ConfirmDialog";
import { getAllComment, deleteComment } from "../apis/commentApi";

function CommentTable() {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [comments, getComments] = useState([]);

  // Consider show modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      let data = await getAllComment(); // params in url
      getComments(data);
      console.log(data);
    };
    fetchData();
  }, []);

  const handleDelete = (id) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    getComments(comments.filter((item) => item._id !== id));
    deleteComment(id);
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
    <Box>
      <Box
        style={{
          backgroundColor: "rgb(235, 234, 230)",
          display: "flex",
          marginTop: 110,
        }}
      >
        <Box>
          <Typography variant="h4"> Manage Comments</Typography>
        </Box>
      </Box>
      <TableContainer
        component={Paper}
        style={{ marginLeft: 20, width: "95%", marginTop: 38 }}
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
                Username
              </TableCell>
              <TableCell
                style={{ color: "white", fontWeight: 900 }}
                align="center"
              >
                Comment
              </TableCell>
              <TableCell
                style={{ color: "white", fontWeight: 900 }}
                align="center"
              >
                Date
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
            {comments.map((comment) => {
              return (
                <TableRow hover key={comment._id} tabIndex={-1} role="checkbox">
                  <TableCell component="th" scope="row" padding="none">
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Box align="left"></Box>
                      <Typography variant="subtitle2" noWrap>
                        {addEllipsis(comment.username, 20)}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell align="center">
                    {addEllipsis(comment.comment, 20)}
                  </TableCell>
                  <TableCell align="center">{comment.date}</TableCell>

                  <TableCell align="center">
                    <Link
                      to="#"
                      onClick={handleShow}
                      style={{ color: "#000000", marginLeft: 10 }}
                    >
                      <EditIcon />
                    </Link>

                    <DeleteOutline
                      className="userListDelete"
                      onClick={() => {
                        setConfirmDialog({
                          isOpen: true,
                          title: "Are you sure to delete this comment?",
                          subTitle: "You can't undo this operation",
                          onConfirm: () => {
                            handleDelete(comment._id);
                          },
                        });
                      }}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <Modal show={show} onHide={handleClose} style={{ marginTop: 100 }}>
            <Modal.Body>
              <ReplyForm />
            </Modal.Body>
          </Modal>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={comments.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Box>
  );
}

export default React.memo(CommentTable);
