import React from 'react';
import Pagination from '@mui/material/Pagination';
import { PaginationItem } from '@mui/material';
import Stack from '@mui/material/Stack';
import { UseAppContext } from '../../../context/context';
export const PaginationPage = () => {
    const { page, setPage } = UseAppContext();
    const changePage = (item) => {
        setPage(item.page - 1);
        return < PaginationItem {...item} />
    }
    return (
        <Stack spacing={2}>
            <Pagination renderItem={(item) => changePage(item)} count={3} variant="outlined">
            </Pagination>
        </Stack>
    );
}
