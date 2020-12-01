import React from 'react';
// import Loading from '../components/Loading';
import styles from './FireGrid.module.css';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

const FireGrid = ({incident_name, incident_county, incident_location}) => {
    ////console.log(props);

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Fire Name: {incident_name}</Typography>
                        <Typography variant="h5" gutterBottom>County: {incident_county}</Typography>
                        <Typography color="textSecondary" gutterBottom>Counties Affected: {incident_location}</Typography>
                        {/* <Typography color="textSecondary" gutterBottom> Acres Burned: </Typography>
                        <Typography variant="body2" gutterBottom> Fire Containment: </Typography> */}
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default FireGrid;