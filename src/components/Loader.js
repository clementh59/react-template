import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import React from "react";

const Loader = () => {
    return (
        <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center' width='100%' height='100%'>
            <CircularProgress style={{'color': 'red'}}/>
        </Box>
    );
}

export default Loader;