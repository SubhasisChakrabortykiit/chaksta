import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Container, Row, Col } from "react-bootstrap";
import './Skills.css';
import enConstants from "../../globals/englishConstant";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        // color: theme.palette.text.secondary,
    },
}));

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#5959ad',
    },
}))(LinearProgress);

let GLOBALS = enConstants;


export default function Skills() {
    const classes = useStyles();
    let items_1 = GLOBALS.SKILLS.SKILL_SET_1;
    let itemList_1 = [];
    items_1.forEach((item, index) => {
        itemList_1.push( <div key={index} className='skill-items'>
            <Typography>
                <span style={{ fontSize: '1em' }}>{ item.SKILL }</span>
            </Typography>
            <BorderLinearProgress variant="determinate" value={ parseInt(item.RATE) } />
        </div>)
    });
    let items_2 = GLOBALS.SKILLS.SKILL_SET_2;
    let itemList_2 = [];
    items_2.forEach((item, index) => {
        itemList_2.push( <div key={index} className='skill-items'>
            <Typography>
                <span style={{ fontSize: '1em' }}>{ item.SKILL }</span>
            </Typography>
            <BorderLinearProgress variant="determinate" value={ parseInt(item.RATE) } />
        </div>)
    });
    let items_3 = GLOBALS.SKILLS.SKILL_SET_3;
    let itemList_3 = [];
    items_3.forEach((item, index) => {
        itemList_3.push( <div  key={index} className='skill-items'>
            <Typography>
                <span style={{ fontSize: '1em' }}>{ item.SKILL }</span>
            </Typography>
            <BorderLinearProgress variant="determinate" value={ parseInt(item.RATE) } />
        </div>)
    });

    return (
        <Container>
            <div className="page-title">
                <Typography>
                    <span style={{ fontSize: '2.5em' }}>{GLOBALS.PAGE_TITLES.PAGE_3}</span><br />
                </Typography>
            </div>
            {/* {classes.root}  */}
            <div className='page-content'>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Paper className={classes.paper}> { itemList_1 } </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}> { itemList_2 } </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}> { itemList_3 } </Paper>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}