import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import { ListItem, Button } from "@mui/material";
import { removeSubject, renameSubject } from "../../helpers";

import TextInputModal from "../TextInputModal";

function SubjectControlsListItem(props) {
    const [editOpen, setEditOpen] = React.useState(false);
    const openEdit = () => setEditOpen(true);

    return (
        <>
            <TextInputModal
                title={"Rename " + props.name}
                fieldName="New Name"
                isOpen={editOpen}
                onClose={() => setEditOpen(false)}
                onSave={(text) => renameSubject(props.name, text)}
            />
            <ListItem
                borderTop={1}
                sx={{
                    display: "flex",
                    margin: 0,
                    padding : 0,
                    justifyContent: "space-between",
                }}>


                <ButtonGroup variant="contained">
                    <Button
                        color="error"
                        onClick={() => removeSubject(props.name)}>
                        Delete Subject
                    </Button>
                    <Button color="warning" onClick={openEdit}>
                        Edit Name
                    </Button>
                </ButtonGroup>

                <Button variant="contained" onClick={props.openAddTask}>
                    Add Task
                </Button>
            </ListItem>
        </>
    );
}

export default SubjectControlsListItem;
