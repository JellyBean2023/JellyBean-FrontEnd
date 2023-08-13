import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Spinner = () => {
  return(
    <main className="flex h-80 justify-center items-center">
        <Box sx={{ display: 'flex' }} className="text-center">
        <CircularProgress />
        </Box>
    </main>
  )
}

export default Spinner;