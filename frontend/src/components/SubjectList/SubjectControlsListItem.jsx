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
            <TextInputModal title={"Rename " + props.name} fieldName="New Name" isOpen={editOpen} onClose={() => setEditOpen(false)} onSave={(text) => renameSubject(props.name, text)}/>
            <ListItem
                borderTop={1}
                style={{ display: "flex", justifyContent: "space-between" }}>
                    <Button onClick={props.openAddTask}>Add Task</Button>

                    <ButtonGroup>
                        <Button color="warning" onClick={openEdit}>Edit</Button>
                        <Button color="error" onClick={() => removeSubject(props.name)}>Delete</Button>
                    </ButtonGroup>
            </ListItem>
        </>
    );
}

export default SubjectControlsListItem;
