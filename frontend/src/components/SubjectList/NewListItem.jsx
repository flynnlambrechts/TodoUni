import React from "react";
import { IconButton, ListItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";

function NewListItem(props) {   
    const [val, setVal] = React.useState();
    return (
        <ListItem
            component="form"
            onSubmit={(e) => {
                e.preventDefault();
                props.onSubmit(val)
                setVal("")
            }}
            disablePadding
            >
            <TextField
                value={val}
                onChange={(e) => setVal(e.target.value)}

                name="Subect Name"
                fullWidth
                label="New Subject Name"
                autoComplete="off"
                InputProps={{endAdornment: <IconButton type="submit" color="secondary">
                    <AddIcon />
                </IconButton>}}
                />
        </ListItem>
    );
}

export default NewListItem;
