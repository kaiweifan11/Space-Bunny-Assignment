import React, { useState, useEffect } from "react";
import Web3 from 'web3';
import { BASE_URL, CONTRACT_ABI, CONTRACT_ADDRESS } from './config';
import Snackbar from '@mui/material/Snackbar';
import Divider from '@mui/material/Divider';
import Header from './components/Header';
import MainContent from './components/MainContent';
import { fileURI } from './config';
import { convertToUnixTimestamp } from './utils';

const App = () =>{
    const [account, setAccount] = useState();
    const [contracts, setContracts] = useState();
    const [validStartDate, setValidStartDate] = useState();
    const [validEndDate, setValidEndDate] = useState();
    const web3 = new Web3(Web3.givenProvider || BASE_URL);
    const [isSnackBarOpen, setIsSnackBarOpen] = useState(false);
    const [snackBarMessage, setSnackBarMessage] = useState('');

    useEffect(() => {
        async function load() {
            const accounts = await web3.eth.requestAccounts();
            setAccount(accounts[0]);
            const contracts = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
            if(contracts){
                setContracts(contracts);
            } 
        }
        
        load();
    }, []);

    useEffect(() => {
        if(contracts){
            getValidStartDate();
            getValidEndDate();
        }
    }, [contracts]);


    const getValidStartDate = async () =>{
        setValidStartDate(await contracts?.methods?.getValidStartDate()?.call());
    }

    const getValidEndDate = async () =>{
        setValidEndDate(await contracts.methods.getValidEndDate().call());
    }

    const sendMint = async () =>{
        const txResult = await contracts?.methods?.mint(account, fileURI)?.send({from: account})
        .catch((error) => {
            setSnackBarMessage(error.message);
            setIsSnackBarOpen(true);
        });
    }

    const changeValidDate = async () =>{
        const today = convertToUnixTimestamp(new Date());
        const endDate = today + (7 * 24 * 60 * 60); // plus 7 days
        const txResult = await contracts?.methods?.setValidStartDate(today.toString())?.send({from: account})
        .catch((error) => {
            setSnackBarMessage(error.message);
            setIsSnackBarOpen(true);
        });
        const txResult2 = await contracts?.methods?.setValidEndDate(endDate.toString())?.send({from: account})
        .catch((error) => {
            setSnackBarMessage(error.message);
            setIsSnackBarOpen(true);
        });

        getValidStartDate();
        getValidEndDate();
    }

    const handleCloseSnackBar = () => {
        setIsSnackBarOpen(false);
    };

    return (
        <>
            <Header sendMint={sendMint} changeValidDate={changeValidDate} account={account} />
            <Divider variant="middle" style={{marginTop: 20, marginBottom: 20}}/>
            <MainContent validStartDate={validStartDate} validEndDate={validEndDate} />
            <Snackbar
                open={isSnackBarOpen}
                autoHideDuration={6000}
                onClose={handleCloseSnackBar}
                message={snackBarMessage}
            />
        </>

        
    )
}

export default App;