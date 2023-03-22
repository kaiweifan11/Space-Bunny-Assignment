import React, {useEffect, useState} from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { convertToReadableDate } from '../utils';
import { metadataBaseURL, fileURI } from '../config';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const MainContent = (props) =>{
    const {validStartDate, validEndDate} = props;
    const [startDate, setStartDate] = useState(new Date().toLocaleDateString("en-GB"))
    const [endDate, setEndDate] = useState(new Date().toLocaleDateString("en-GB"))
    const [imageURL, setImageURL] = useState('');
    const [metaData, setMetaData] = useState();

    useEffect(()=>{
        axios.get(metadataBaseURL + fileURI)
            .then((response) => {
                if(response.data){
                    setMetaData(response.data);
                }
            })
            .catch(error => {

            })
    }, [])

    useEffect(()=>{
        if(metaData){
            console.log('metaData',metaData)
            setImageURL(metaData.image);
        } 
    }, [metaData])

    useEffect(()=>{
        setStartDate(convertToReadableDate(validStartDate));
        setEndDate(convertToReadableDate(validEndDate));
    }, [validStartDate, validEndDate])


    return (
        <Grid container spacing={2} style={{marginTop: 20,}}>
            <Grid item xs={6}>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        {imageURL &&(
                            <Box style={{padding: 40}}>
                                <CardMedia
                                    sx={{ height: 500 }}
                                    image={imageURL}
                                    title={metaData? metaData.description: ''}
                                />
                            </Box>
                            
                        )}
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6}>
                {metaData && (
                    <>
                        <Typography variant="h6" style={{color: '#2081e2', marginBottom: 20}}>
                            {metaData.attributes[1].value}
                        </Typography>
                        <div style={{justifyContent: 'end', display: 'flex'}}>
                            <FavoriteIcon fontSize='large'/>
                            <ShareIcon fontSize='large'/>
                        </div>
                        <Typography variant="h5" style={{fontWeight: 'bold', marginBottom: 20}}>
                            {metaData.name}
                        </Typography>
                        <div style={{minHeight: 300}}>
                            <Typography variant="body" >
                                {metaData.description}
                            </Typography>
                        </div>
                    </>
                )}
                
               
                <Typography variant="h6">
                    Sale Date from {startDate} to {endDate}
                </Typography>
                
            </Grid>
            
        </Grid>
    )
}

export default MainContent;