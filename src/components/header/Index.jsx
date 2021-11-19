import React from 'react';
import { Toolbar,Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";

import styleNavigation from './style';
import headerCofig from '../../config/headerConfig';
import Search from './Search';
const useStyles = makeStyles(styleNavigation);



const Header = () => {

    const classes = useStyles();

    return(
        <div className= {classes.root}>
            <Toolbar>
            {headerCofig.map((option)=> {
               return<Typography className={classes.navi}>{option.title}</Typography>
            })}
            <div className={classes.search}>
                <Search/>
            </div>
            </Toolbar>
            <div className={classes.logo}>
            <Typography variant="h1" component="h2" align="center" style={{fontFamily:"'Lobster', cursive"}}>
                BLOG
            </Typography>;
            </div>
        </div>   
    );
}

export default Header;

