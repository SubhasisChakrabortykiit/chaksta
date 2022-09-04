import './Dashboard.css';
import { Container } from "react-bootstrap";
import Fab from '@material-ui/core/Fab';
import SettingsIcon from '@material-ui/icons/Settings';
import TemporaryDrawer from '../Drawer/Drawer';
import Home from '../Home/Home';
import WorkExp from "../WorkExperience/WorkExp";
import Skills from "../Skills/Skills";
import Projects from '../Projects/Projects';
import Contacts from '../Contact/Contacts';
import PageNotFound from '../PageNotFound/PageNotFound';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function Dashboard() {
    return (
        <div className="Dashboard">
            <Container>
            <Router>
                <TemporaryDrawer />
                <div className="display-view">
                    {/* <Fab size="small" style={{ float: 'right', marginRight: '5%', marginTop: '2%' }}>
                        <SettingsIcon />
                    </Fab> */}
                    {/* <Router> */}
                        <div className="App">
                            <Switch>
                                <Route path="/" exact component={ Home } />
                                <Route path="/WorkExp" exact component={ WorkExp } />
                                <Route path="/TempDrawer" exact component={ TemporaryDrawer } />
                                <Route path="/Skills" exact component={ Skills } />
                                <Route path="/Projects" exact component={ Projects } />
                                <Route path="/Contacts" exact component={ Contacts } />
                                <Route path="*" component={ PageNotFound } />
                            </Switch>
                        </div>
                    {/* </Router> */}
                </div>
                </Router>
            </Container>
        </div>
    );
}

export default Dashboard;
