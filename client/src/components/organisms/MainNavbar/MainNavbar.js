import React from 'react';
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
import { signout } from '../../../actions/userActions';
import { Nav, NavMenu, NavBtn, NavBtnLink, NavLink, Bars, listDiv } from './NavbarElements';
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
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  const handleClick = () => {
    setOpen(!open);
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
          <listDiv>
            {userInfo ? (
              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.root}
              >
                <ListItem button onClick={handleClick}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={userInfo.name}
                    classes={{ primary: classes.listItemText }}
                  />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                      <ListItemIcon>
                        <RestoreIcon />
                      </ListItemIcon>{' '}
                      <Link to="/orderhistory">
                        <ListItemText
                          primary="Order history"
                          classes={{ primary: classes.listItemText }}
                        />
                      </Link>
                    </ListItem>
                    <ListItem button className={classes.nested} onClick={signoutHandler}>
                      <ListItemIcon>
                        <ExitToAppIcon />
                      </ListItemIcon>{' '}
                      <Link to="/">
                        <ListItemText
                          primary="Sign Out"
                          classes={{ primary: classes.listItemText }}
                        />
                      </Link>
                    </ListItem>
                  </List>
                </Collapse>
              </List>
            ) : (
              <NavBtn>
                <NavBtnLink to="/signin">Sign in</NavBtnLink>
              </NavBtn>
            )}
          </listDiv>
        </NavMenu>
      </Nav>
    </>
  );
};

export default MainNavbar;
