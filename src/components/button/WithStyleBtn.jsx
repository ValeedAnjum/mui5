import React from 'react'
import { Button } from '@mui/material'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => {
    console.log(theme)
    return {
        root: {
            color: 'black'
        }
    }
})
const WithStyleBtn = () => {
    const classes = useStyles()
    return (
        <Button className={classes.root} color="primary" variant="contained">OK</Button>
    )
}

export default WithStyleBtn
