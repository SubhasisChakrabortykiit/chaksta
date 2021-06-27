import './Dashboard.css';
import { Container } from "react-bootstrap";
import Fab from '@material-ui/core/Fab';
import SettingsIcon from '@material-ui/icons/Settings';
import TemporaryDrawer from '../../utilities/Drawer/Drawer';
import Home from '../Home/Home';
import  WorkExp  from "../WorkExperience/WorkExp";
function Dashboard() {
    return (
        <div className="Dashboard">
            <Container>
                <TemporaryDrawer />
                <div className="display-view">
                    <Fab size="small" style={{ float: 'right', marginRight: '5%', marginTop: '2%' }}>
                        <SettingsIcon />
                    </Fab>
                    {/* <Home/> */}
                    <WorkExp />
                </div>
            </Container>
        </div>
    );
}

export default Dashboard;
