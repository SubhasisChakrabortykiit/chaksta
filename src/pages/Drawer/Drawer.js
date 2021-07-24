import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import enConstants from "../../globals/englishConstant";
import './Drawer.css';
import MenuIcon from '@material-ui/icons/Menu';
import Home from '../Home/Home';
import WorkExp from "../WorkExperience/WorkExp";
import { Redirect, useHistory, BrowserRouter as Router, Link, Switch, Route, NavLink } from 'react-router-dom';
const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function TemporaryDrawer() {
    let history = useHistory();
    let GLOBALS = enConstants;
    let items = GLOBALS.NAVIGATION_ITEMS;
    let itemList = [];
    items.forEach((item, index) => {
        itemList.push( <li key={index} className="sectionItems">
            <span className="icon"></span>       
            <NavLink
                // className="navbar-item"
                // activeClassName="is-active"
                to={item.path} 
                exact
            >
                <span>{item.title}</span>
            </NavLink>
        </li> )
    });
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            className="side-nav"
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
            <div className="title">
                <center> {GLOBALS.LEGAL_NAME} </center>
            </div>

            <Divider />
            <div className="sections">
                <ul>
                    {itemList}
                </ul>
            </div>
        </div>
    );

    return (
        <div className="drawer-icon">
            {/* ['left', 'right', 'top', 'bottom'] */}
            {['left'].map((anchor) => (
                <React.Fragment key={anchor} > 
                <div className="drawer-react-fragment">
                    <Button onClick={toggleDrawer(anchor, true)}><MenuIcon /> </Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
}