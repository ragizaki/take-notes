import React from 'react';

type ISearchProps = {
    value: string;
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ value, handleSearch }: ISearchProps): JSX.Element => {
    console.log('rendered');
    return (
        <div>
            <input value={value} onChange={handleSearch} type='text' placeholder='Search by title' />
        </div>
    );
};

export default SearchBar;
