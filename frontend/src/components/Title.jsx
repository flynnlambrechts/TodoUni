import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { TickIcon } from '../Icons/TickIcon/TickIcon';
import { base_url } from '../config';

function Title(props) {
    const titleText = "Uni Todo";
    const titleStyle = {
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
    }


    return (
        <Link to={base_url} style={{ color: "unset", textDecoration: "none", display: "flex", alignItems: "center" }}>
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
            <TickIcon sx={{ ...props.sx, ml: 1, mr: 1, }} />
        </Link>
    );
}

export default Title;
