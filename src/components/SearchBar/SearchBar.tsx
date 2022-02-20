import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

type ISearchProps = {
    value: string;
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ value, handleSearch }: ISearchProps): JSX.Element => {
    return (
        <div>
            <TextField
                variant='standard'
                value={value}
                onChange={handleSearch}
                label='Filter by title'
                InputProps={{
                    endAdornment: (
                        <InputAdornment position='start'>
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    );
};

export default SearchBar;
