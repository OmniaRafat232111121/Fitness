import React from 'react';
import { Stack } from '@mui/material';
import { TailSpin } from 'react-loader-spinner';

const Loader = () => (
  <Stack direction="row ">
    <TailSpin color="grey" />
  </Stack>
);

export default Loader;
