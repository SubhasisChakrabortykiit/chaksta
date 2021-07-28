import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Container, Row, Col } from "react-bootstrap";
import './Chatbox.css';
import enConstants from "../../globals/englishConstant";
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SendIcon from '@material-ui/icons/Send';
import InputBase from '@material-ui/core/InputBase';


let GLOBALS = enConstants;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function Chatbox(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            // setOpen(false);
            return;
        }
        setOpen(true);
    };
    return (
        <Container>
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
                                    <SendIcon style={{ color: 'midnightblue' }}  />
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                    }
                />
            </Card>
        </Container>
    );
}