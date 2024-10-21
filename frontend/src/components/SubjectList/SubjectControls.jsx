import React, { useState } from "react";
import {
    Button,
    CardActions,
    Box,
    IconButton,
    Tooltip,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import { DeleteOutline, Edit, Add } from "@mui/icons-material"; // Import icons
import { removeSubject, renameSubject } from "../../helpers";

import TextInputModal from "../Fields/TextInputModal";

function SubjectControls(props) {
    const [editOpen, setEditOpen] = useState(false);
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const [subjectToDelete, setSubjectToDelete] = useState("");

    const openEdit = () => setEditOpen(true);
    const openDeleteConfirm = (subjectName) => {
        setSubjectToDelete(subjectName);
        setDeleteConfirmOpen(true);
    };

    const handleDeleteConfirm = () => {
        removeSubject(subjectToDelete);
        props.onDelete();
        setDeleteConfirmOpen(false);
    };

    return (
        <>
            <TextInputModal
                title={"Rename " + props.name}
                fieldName="New Name"
                isOpen={editOpen}
                onClose={() => setEditOpen(false)}
                onSave={(text) => renameSubject(props.name, text)}
            />
            <CardActions
                sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                    <Tooltip title="Delete Subject">
                        <IconButton
                            color="error"
                            onClick={() => openDeleteConfirm(props.name)}>
                            <DeleteOutline />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit Name">
                        <IconButton color="warning" onClick={openEdit}>
                            <Edit />
                        </IconButton>
                    </Tooltip>
                </Box>
                <Tooltip title="Add Task">
                    <IconButton color="primary" onClick={props.openAddTask}>
                        <Add />
                    </IconButton>
                </Tooltip>
            </CardActions>
            <Dialog
                open={deleteConfirmOpen}
                onClose={() => setDeleteConfirmOpen(false)}>
                <DialogTitle>Delete Subject</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete the subject "
                        {subjectToDelete}"?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDeleteConfirmOpen(false)}>
                        Cancel
                    </Button>
                    <Button onClick={handleDeleteConfirm} color="error">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default SubjectControls;
