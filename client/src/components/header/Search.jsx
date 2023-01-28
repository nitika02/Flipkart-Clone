import { InputBase, Box, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

const SearchContainer = styled(Box)`
    background: #fff;
    width: 38%;
    border-rdius: 2px;
    margin-left: 10px;
    display: flex;
`
const InputSearchBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
    font-size: unset;


`
const SearchIconWrapper = styled(Box)`
    color: blue;
    padding: 5px;
    display: flex;
`

const Search = () => {
  return (
    <SearchContainer>
        <InputSearchBase 
            placeholder='Search for products, Brands and more'
        />
        <SearchIconWrapper>
            <SearchIcon />
        </SearchIconWrapper>
    </SearchContainer>
  )
}

export default Search