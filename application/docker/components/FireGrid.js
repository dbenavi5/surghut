import React from 'react';
import Loading from '../components/Loading';
import styles from './FireGrid.module.css';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

const FireGrid = ({data: { incident_name, incident_county, incident_location, incident_acres_burned, incident_containment }} ) => {
    if(!incident_name){
        return <Loading/>
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> {incident_name.value} Fire Name: </Typography>
                        <Typography variant="h5" gutterBottom> County: </Typography>
                        <Typography color="textSecondary" gutterBottom> Counties Affected:</Typography>
                        <Typography color="textSecondary" gutterBottom> Acres Burned: </Typography>
                        <Typography variant="body2" gutterBottom> Fire Containment: </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default FireGrid;