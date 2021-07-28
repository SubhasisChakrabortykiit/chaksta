import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from "react-bootstrap";
import './Projects.css';
import enConstants from "../../globals/englishConstant";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { grey } from '@material-ui/core/colors';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles({
    projectName: {
        fontWeight: 900,
        fontSize: 20
    },
    projectDescription: {
        marginTop: 20,
        marginBottom: 2
    },
    projectDate: {
        fontWeight: 300,
        fontSize: 15,
        color: grey,
        display: 'inline'
    },
    projectRole: {
        marginTop: 2,
        marginBottom: 2
    },
    projectTool: {

    },
    chipzi: {
        width: 'auto !important',
        margin: '0.5%'
    }
});


let GLOBALS = enConstants;


export default function Projects() {
    const classes = useStyles();
    let items_1 = GLOBALS.PROJECTS;
    let itemList_1 = [];
    let tools = [];
    let getTools = function(toolsData){
        tools = [];
        toolsData.forEach((record, i) => {
            tools.push(<Chip key={i}  className={classes.chipzi} label={record} component={'span'} />) 
            // added component to remove warning in console
        });
    }
    items_1.forEach((item, index) => {
        itemList_1.push(<Card key={index}  className='card-div'>
            <CardContent>
                <Typography className={classes.projectName} >
                    {item.PROJECT_NAME} 
                    <p className={classes.projectDate} >
                        {' ('}{item.PROJECT_DATE}{' )'}
                    </p>
                </Typography>
                <Typography className={classes.projectDescription} >
                    <b>{'Description : '}</b>
                    {item.PROJECT_DESCRIPTION}
                </Typography>
                <Typography className={classes.projectRole}>
                    <b>{'Role : '}</b>
                    {item.PROJECT_ROLE}
                </Typography>
            </CardContent>
            <CardActions>
                <Typography className={classes.projectTool}>
                    <b>{'Tools used : '}</b>
                    {
                        getTools((item.PROJECT_TOOLS_USED).split(','))
                    }

                    {tools}

                </Typography>
            </CardActions>
        </Card>)
    });
    return (
        <Container>
            <div className="page-title">
                <Typography>
                    <span style={{ fontSize: '2.5em' }}>{GLOBALS.PAGE_TITLES.PAGE_4}</span><br />
                </Typography>
            </div>
            {/* {classes.root}  */}
            <div className='page-content'>
                {itemList_1}
            </div>
        </Container>
    );
}