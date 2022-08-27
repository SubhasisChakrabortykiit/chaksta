import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Container, Row, Col } from "react-bootstrap";
import './WorkExp.css';
import enConstants from "../../globals/englishConstant";
import ltts_logo from "../../images/ltts_logo.png";
import pwc_logo from "../../images/pwc_logo.png";
import sap_logo from "../../images/sap_logo.png";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}));

let GLOBALS = enConstants;

function getSteps() {
    return GLOBALS.WORK_EXPERIENCE;
}

function monthDiff() {
    let current_date = new Date();
    let doj = new Date(2018, 9, 19);
    var months;
    months = (current_date.getFullYear() - doj.getFullYear()) * 12;
    months -= doj.getMonth();
    months += current_date.getMonth();
    let totalMonth = months <= 0 ? 0 : months; 
    let years = Math.floor(totalMonth/12);
    let monthExp = totalMonth - (years * 12);
    return years + ' years and ' + monthExp + '+ months';
}

export default function WorkExp() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Container>
            <div className="page-title">
                <Typography>
                    <span style={{ fontSize: '2.5em' }}>{ GLOBALS.PAGE_TITLES.PAGE_2 }</span><br />
                </Typography>
            </div>
            <div className="page-content">
                <Typography>
                    <span className='span-in-page-content'> {monthDiff()} { GLOBALS.WORK_EXPIRIENCE_PHRASE } </span><br />
                </Typography>
            </div>
            <Row className="display-frame-wxp">
                <Col sm={{ size: 'auto', offset: 1 }} className="details">
                    <div className={classes.root} className="stepper">
                        <Stepper activeStep={activeStep} orientation="vertical">
                            {steps.map((label, index) => (
                                <Step key={label.fullName} className={label.company}>
                                    <StepLabel>{label.fullName}, {label.location} </StepLabel>
                                    <StepContent>
                                        {/* <Typography>{getStepContent(index)}</Typography> */}
                                        <Typography>
                                            <span style={{ fontSize: '1em' }}> {label.profile} </span><br />
                                            <span style={{ fontSize: '1em' }}> {label.startMonthYear} - {label.endMonthYear} </span>
                                        </Typography>
                                        <div className={classes.actionsContainer}>
                                            <div>
                                                <Button
                                                    size="small"
                                                    disabled={activeStep === 0}
                                                    onClick={handleBack}
                                                    className={classes.button}
                                                >
                                                    Back
                                                </Button>
                                                <Button
                                                    variant="outlined"
                                                    size="small"
                                                    color="primary"
                                                    onClick={handleNext}
                                                    className={classes.button}
                                                >
                                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                                </Button>
                                            </div>
                                        </div>
                                    </StepContent>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length && (
                            <Paper square elevation={0} className={classes.resetContainer}>
                                <Button size="small" onClick={handleReset} className={classes.button}>
                                    DETAILS
                            </Button>
                            </Paper>
                        )}
                    </div>
                </Col>
                <Col className="logos">
                    <img src={sap_logo} alt='mainImages' className="imageClass" height='10%' width='10%' style={{ margin:'auto', paddingTop:'5%'}} />
                    <img src={pwc_logo} alt='mainImages' className="imageClass" height='10%' width='10%' style={{ margin:'auto', paddingTop:'5%'}} />
                    <img src={ltts_logo} alt='mainImages' className="imageClass" height='10%' width='10%' style={{ margin:'auto', paddingTop:'5%'}} />
                </Col>
            </Row>
        </Container>
    );
}