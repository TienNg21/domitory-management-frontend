// material-ui
import { Grid, Stack, Typography } from '@mui/material';

import { gridSpacing } from '../../redux/constants/constant';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import BillTable from './BillTable';

const Bill = () => {
    return (
        <>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
                <Typography variant="h3" gutterBottom>
                    LỊCH SỬ HÓA ĐƠN
                </Typography>
            </Stack>
            <BillTable />;
        </>
    );
};

export default Bill;
