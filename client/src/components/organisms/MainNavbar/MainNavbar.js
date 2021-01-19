import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import RestoreIcon from '@material-ui/icons/Restore';
import PersonIcon from '@material-ui/icons/Person';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import { signout } from '../../../actions/userActions';
import {
  Nav,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLink,
  Bars,
  ListDiv,
  AdminDiv,
} from './NavbarElements';
import Logo from '../../../assets/images/Logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '120%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(2),
  },
  nested: {
    paddingLeft: theme.spacing(2),
  },
  listItemText: {
    fontSize: '16px',
  },
}));

const MainNavbar = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openAdmin, setOpenAdmin] = useState(false);
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  const handleClick = () => {
    setOpen(!open);
  };
  const handleAdminPanel = () => {
    setOpenAdmin(!openAdmin);
  };
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={Logo} alt="LogoImage" width="150px" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/promotions">Promotions</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
          <NavLink to="/cart/:id?">
            Cart {cartItems.length > 0 && <span className="badge">{cartItems.length}</span>}
          </NavLink>
        </NavMenu>{' '}
        <ListDiv>
          {userInfo ? (
            <List component="nav" aria-labelledby="nested-list-subheader" className={classes.root}>
              <ListItem button onClick={handleClick}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={userInfo.name} classes={{ primary: classes.listItemText }} />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Link to="/profile">
                    <ListItem button className={classes.nested}>
                      <ListItemIcon>
                        <PersonIcon />
                      </ListItemIcon>{' '}
                      <ListItemText primary="Profile" classes={{ primary: classes.listItemText }} />
                    </ListItem>
                  </Link>
                  <Link to="/orderhistory">
                    <ListItem button className={classes.nested}>
                      <ListItemIcon>
                        <RestoreIcon />
                      </ListItemIcon>{' '}
                      <ListItemText
                        primary="Order history"
                        classes={{ primary: classes.listItemText }}
                      />
                    </ListItem>
                  </Link>
                  <Link to="/signin">
                    <ListItem button className={classes.nested} onClick={signoutHandler}>
                      <ListItemIcon>
                        <ExitToAppIcon />
                      </ListItemIcon>{' '}
                      <ListItemText
                        primary="Sign Out"
                        classes={{ primary: classes.listItemText }}
                      />
                    </ListItem>
                  </Link>
                </List>
              </Collapse>
            </List>
          ) : (
            <NavBtn>
              <NavBtnLink to="/signin">Sign in</NavBtnLink>
            </NavBtn>
          )}
        </ListDiv>
        <AdminDiv>
          {/* eslint-disable */}
          {userInfo && userInfo.isAdmin && (
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <Fragment>
                  <Button
                    variant="contained"
                    color="primary"
                    {...bindTrigger(popupState)}
                    style={{ paddingRight: '30px', fontSize: '15px', whiteSpace: 'nowrap' }}
                  >
                    {'Admin Panel'}
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem
                      onClick={popupState.close}
                      style={{ paddingRight: '50px', fontSize: '15px' }}
                    >
                      <Link to="/dashboard">Dashboard</Link>
                    </MenuItem>
                    <MenuItem
                      onClick={popupState.close}
                      style={{ paddingRight: '50px', fontSize: '15px' }}
                    >
                      <Link to="/productlist">Products</Link>
                    </MenuItem>
                    <MenuItem
                      onClick={popupState.close}
                      style={{ paddingRight: '50px', fontSize: '15px' }}
                    >
                      <Link to="/orderlist">Orders</Link>
                    </MenuItem>
                    <MenuItem
                      onClick={popupState.close}
                      style={{ paddingRight: '50px', fontSize: '15px' }}
                    >
                      <Link to="/userlist">Users</Link>
                    </MenuItem>
                  </Menu>
                </Fragment>
              )}
            </PopupState>
          )}
          {/* eslint-disable */}
        </AdminDiv>
      </Nav>
    </>
  );
};

export default MainNavbar;
