import React from "react";
import Column from "../components/Layout/Column";
import {withTheme} from "@emotion/react";
import {Typography} from "@mui/material";

const HomePage = () => {

    return (
        <Column width='100vw'>
            <Typography variant='h1'>Content</Typography>
        </Column>
    )

}

export default withTheme(HomePage);