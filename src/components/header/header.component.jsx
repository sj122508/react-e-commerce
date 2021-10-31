import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from '../../../src/assets/crown.svg';

import './header.styles.scss'



const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to="/shop">
                SHOP
            </Link>
            <Link className='option' to="/shop">
                CONTACT
            </Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='signin'>
                        SIGN IN
                    </Link>
            }
            <CartIcon />
        </div>
        {
            !hidden && <CartDropdown />
        }
    </div>
)

// THIS mapStateToProps CAN BE NAME ANYTHING
// THE state HERE is STATE IN root-reducer
const mapStateToProps = (
    {
        user: { currentUser },
        cart: { hidden }
    }
) => ({
    currentUser,
    hidden
})

// connect IS HOC THAT CONNECT MASTER STATE IN COMPONENT WITH SUPPLIED AND UPDATED STATE PASS FROM mapStateToProps
export default connect(mapStateToProps)(Header);

