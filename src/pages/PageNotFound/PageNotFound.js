import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Container, Row, Col } from "react-bootstrap";
import './PageNotFound.css';
import enConstants from "../../globals/englishConstant";
import Typography from '@material-ui/core/Typography';
import { useHistory  } from "react-router-dom";

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


export default function PageNotFound(props) {
    const timer = 5;
    const [counter, setCounter] = React.useState(timer);
    const history = useHistory();
    const goHome = () => history.push('/');
    React.useEffect(() => {
        const ac = new AbortController();
        counter > 0 && setTimeout(() => {
            setCounter(counter - 1);
            if (counter === 1) {
                goHome()
            }
        }, 1000);
        return () => ac.abort();
    }, [counter]);

    return (
        <Container>
            <div className="page-title">
                <Typography>
                    <span style={{ fontSize: '2.5em' }}>404 The page you are looking for doesnot exist</span><br />
                </Typography>
            </div>
            <div className='page-content'>
                <div m={1} className='main-box'>
                <button onClick={goHome} type="button"> Click here to go to chaksta.com </button>
                <p>This page will redirect after {  counter } seconds...</p>
                </div>
            </div>
        </Container>
    )
    }

function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
}
