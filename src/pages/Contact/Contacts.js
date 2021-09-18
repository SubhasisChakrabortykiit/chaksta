import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Container, Row, Col } from "react-bootstrap";
import './Contacts.css';
import enConstants from "../../globals/englishConstant";
import Typography from '@material-ui/core/Typography';
import linkedIn from "../../images/linkedIn.svg";
import fb from "../../images/fb.svg";
import gmail from "../../images/gmail.svg";
import git from "../../images/git.svg";
import insta from "../../images/insta.svg";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Fab from '@material-ui/core/Fab';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import Chatbox from "../Chatbox/Chatbox";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SendIcon from '@material-ui/icons/Send';
import InputBase from '@material-ui/core/InputBase';
const useStyles = makeStyles((theme) => ({

    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    margin: {
        margin: theme.spacing(1),
    }
}));


let GLOBALS = enConstants;


export default function Contacts(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <Container>
            <div className="page-title">
                <Typography>
                    <span style={{ fontSize: '2.5em' }}>{GLOBALS.PAGE_TITLES.PAGE_6}</span><br />
                </Typography>
            </div>
            {/* {classes.root}  */}
            <div className='page-content'>
                <div m={1} className='main-box'>
                    <a target="_blank" href='https://www.linkedin.com/in/subhasis-chakraborty-bb2346b1/' ><Avatar alt='linkedIn' src={linkedIn} className='box-items' /></a>
                    <a target="_blank" href='https://github.com/subhasischakrabortygit' ><Avatar alt='git' src={git} className='box-items' /></a>
                    <a target="_blank" href={"mailto:" + 'subhasischakrabortyofficial@gmail.com'} ><Avatar alt='mail' src={gmail} className='box-items' /></a>
                    <a target="_blank" href='https://www.facebook.com/chocosubh' ><Avatar alt='fb' src={fb} className='box-items' /></a>
                    <a target="_blank" href='https://www.instagram.com/such_adventures/' ><Avatar alt='insta' src={insta} className='box-items' /></a>
                </div>
            </div>
            {/* <Fab size="large" className='fab-button'>
                <HeadsetMicIcon onClick={handleClick} />
            </Fab>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                open={open}
                // autoHideDuration={6000}
                onClose={handleClose}
                className='snackbar-main'
                action={                    
                //    <Chatbox {...props} />
                <Card>
                <CardHeader
                    action={
                        <AppBar position="static" className='appbar'>
                            <Toolbar className='toolbar'>
                                <IconButton edge="start" color="inherit" aria-label="menu">
                                    <HeadsetMicIcon fontSize="small" />
                                </IconButton>
                                <Typography className='appbar-title'>
                                    Genie Chat
                                </Typography>
                                <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose} className='appbar-close'>
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                    }
                />
                <CardContent className='card-content'>
                    <Typography variant="body2" color="textSecondary" component="p">
                        coming soon...
                    </Typography>
                </CardContent>
                <CardHeader
                    action={
                        <AppBar position="static" className='appbar-footer'>
                            <Toolbar className='toolbar-footer'>
                                <form noValidate autoComplete="off">
                                    <InputBase
                                        className={classes.margin}
                                        placeholder="Say Hi Genie"
                                        inputProps={{ 'aria-label': 'hi_genie' }} className='input-data'
                                    />
                                </form>
                                <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose} className='appbar-close'>
                                    <SendIcon style={{ color: 'midnightblue' }} />
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                    }
                />
            </Card>
                }
            /> */}

        </Container>
    );
}