import { Button, Grid, makeStyles, Modal, Paper } from "@material-ui/core";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import { SetMFList } from "../redux/actions/index-actions"
import { useSelector, useDispatch } from "react-redux";
import MFCard from "../components/MFCardComponent";


function Dashboard() {
    const getMutualFunds = async () => {
        const response1 = await fetch(`https://api.mfapi.in/mf/100357`)
        const response2 = await fetch(`https://api.mfapi.in/mf/100121`)
        const response3 = await fetch(`https://api.mfapi.in/mf/108048`)
        const response4 = await fetch(`https://api.mfapi.in/mf/101714`)
        const response5 = await fetch(`https://api.mfapi.in/mf/146286`)
        const dataArray= []
        dataArray.push(await response1.json())
        dataArray.push(await response2.json())
        dataArray.push(await response3.json())
        dataArray.push(await response4.json())
        dataArray.push(await response5.json())
        dispatch(SetMFList(dataArray))
    }
    const dispatch = useDispatch()
    useEffect(() => {
        getMutualFunds();
    }, [])
    const mutualFunds = useSelector(state => state.setMF)
    const classes = useStyles();
    return (
        <div>
            <Paper elevation={3} className={classes.paper}>
                 <h3 className={classes.name}>Welcome to Profit House</h3>
                        <Grid container justifyContent="center" spacing={1}>
                            <h5> Search for a listing: </h5>
                            <SearchBar />
                        </Grid>
            </Paper> 
            <Paper elevation={3} className={classes.paper}>
                <h3 className={classes.name}>Listings:</h3>
                <div>
                    {mutualFunds.map((bid, idx) => {
                        var data = bid.meta;
                        return <span key={idx}>
                            <MFCard
                                fund_house={data.fund_house} scheme_type={data.scheme_type} scheme_category={data.scheme_category} scheme_code = {data.scheme_code}
                            />
                        </span>
                    })}
                </div>
            </Paper> 
        </div>
    )
}

const useStyles = makeStyles(() => ({
    paper: {
      margin: '2.5rem',
      padding: '1.5rem'
    },
    name: {
        margin: '0',
        display: 'inline-block',
        width: '82%'
    },
    grid: {
        flexGrow: 1,
        margin: '1rem 0'
    },
    links: {
        backgroundColor: '#3f51b5',
        color: '#fff',
        width: '150px',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
    }
}));

export default Dashboard