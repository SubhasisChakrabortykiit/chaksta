// import logo from './logo.svg';
import './Home.css';
import image from "../../images/demo2.png";
import { Container, Row, Col } from "react-bootstrap";
import enConstants from "../../globals/englishConstant";
import benConstants from "../../globals/bengaliConstant";

function Home() {
  let GLOBALS = enConstants;
  return (
    <Container>
      <Row className="display-frame">
      <Col sm={{ size: 'auto', offset: 1 }} className="details">
        <div>
          <span style={{ fontSize: '1em' }}> {GLOBALS.LEGAL_NAME} </span><br /><br />
          <span style={{ fontSize: '0.5em' }}> {GLOBALS.JOB_PROFILE} </span><br />
          <span style={{ fontSize: '0.4em' }}> {GLOBALS.JOB_COMPANIES} </span><br />
          <span style={{ fontSize: '0.4em' }}> {GLOBALS.UNIVERSITY_AND_HIGHEST_QUALIFCATION} </span><br />
          <span style={{ fontSize: '0.4em' }}> {GLOBALS.CONTACT_INFORMATION} </span>
        </div>
      </Col>
      <Col sm={{ size: 'auto', offset: 1 }} className="imagePos"><img src={image} alt='mainImages' height='80%' width='70%' /></Col>
      {/* height='400vh' */}
      </Row>
    </Container>
  );
}

export default Home;
