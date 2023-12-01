import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { TickIcon } from '../Icons/TickIcon/TickIcon';

function Title(props) {
    const titleText = "Uni Todo";
    const titleStyle = {
        mr: 2,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
    }


    return (
        <Link to="/" style={{ color: "unset", textDecoration: "none", display: "flex", alignItems: "center" }}>
            <TickIcon sx={{ ...props.sx, mr: 1 }} />
            <Typography
                variant={props.variant || "h6"}
                noWrap
                sx={{
                    ...titleStyle,
                    ...props.sx,
                }}
            >
                {titleText}
            </Typography>
        </Link>
    );
}

export default Title;
