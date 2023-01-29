import React, {useState, useContext} from 'react'
import {Box, Button, Typography, styled} from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../login/LoginDialog';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';

const Wrapper = styled(Box)(({ theme }) => ({
    margin: '0 3% 0 auto',
    display: 'flex',
    '& > *': {
        marginRight: '40px !important',
        textDecoration: 'none',
        color: '#FFFFFF',
        fontSize: 12,
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            color: '#2874f0',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            marginTop: 10
        }
    },
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));
const Container = styled(Box)(({theme}) => ({
    display: "flex",
    [theme.breakpoints.down("md")] : {
        display: "block",
    }
}))
    

const LoginButton = styled(Button)`
    color: #2824f0;
    background: #ffffff;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 32px;
`

const CustomButtons = () => {
    const [open, setOpen] = useState(false)
    const {account, setAccount} = useContext(DataContext)

    const openDialog = () => {
        setOpen(true)
    }

  return (
    <Wrapper>
        {
            account 
            ? 
            <Profile account={account} setAccount={setAccount}/>
             : 
        <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>
        }   
        <Typography style={{marginTop: 3, width: 135}}>Become a Seller</Typography>
        <Typography style={{marginTop: 3}}>More</Typography>
        <Container>
            <ShoppingCartIcon />
            <Typography>Cart</Typography>
        </Container>
        <LoginDialog open={open} setOpen={setOpen}/>
    </Wrapper>
  )
}

export default CustomButtons