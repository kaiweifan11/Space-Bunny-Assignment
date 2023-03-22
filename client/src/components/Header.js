import React from "react";
import logo from '../images/logo.png';
import { styled, alpha } from '@mui/material/styles';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
    border: '2px solid #a6a6a6',
    borderRadius: 20,
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
}));

const Header = (props) =>{
    const { sendMint, changeValidDate, account } = props;

    const handleSendMint = () =>{
        sendMint();
    }

    const handleChangeValidDate  = () =>{
        changeValidDate();
    }

    return (

        <Grid container spacing={2}>
            <Grid item xs={2}>
                <img src={logo} style={{width: 200}} />
            </Grid>
            <Grid item xs={8}>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </Grid>
            <Grid item xs={1}>
                <div style={{display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                    <ShoppingCartIcon fontSize='large' />
                </div>
            </Grid>
            <Grid item xs={1}>
                <div style={{display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                    <AccountBalanceWalletIcon fontSize='large' />
                </div>
            </Grid>
            <Grid item xs={12}>

            
                <div style={{display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'flex-end', marginRight: 20}}>
                        <Typography variant="body" style={{marginRight: 20}}>
                            Your Account: {account}
                        </Typography>
                    <Button variant="outlined" size="large" style={{width: 180, marginRight: 20}} onClick={handleChangeValidDate}>Change Dates</Button>
                    <Button variant="contained" size="large" style={{width: 180}} onClick={handleSendMint}>Mint</Button>
                </div>
            </Grid>
        </Grid>
    )
}

export default Header;