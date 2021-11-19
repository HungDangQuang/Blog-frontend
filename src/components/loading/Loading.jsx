import { makeStyles } from "@mui/styles";
import React from "react";
import loadingStyle from "./style";
import LoadingGif from '../../assets/images/loading.gif';
import { connect } from "react-redux";

const useStyles = makeStyles(loadingStyle);

const Loading = () => {
    const classes = useStyles();
    const { loading } = this.props;
    if(!loading) return null;
    return(
        <div className={classes.root}>
            <div className={classes.image}>
                <img className={classes.icon} src={LoadingGif} alt=""/>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({ loading: state.authentication })
export default connect(mapStateToProps)(Loading)
