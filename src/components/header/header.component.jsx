import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { auth } from "../../firebase/firebase.utils";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";

import { ReactComponent as Logo } from '../../../src/assets/crown.svg';

// import './header.styles.scss'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from "./header.styles";


const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">
                SHOP
            </OptionLink>
            <OptionLink to="/shop">
                CONTACT
            </OptionLink>
            {
                currentUser ?
                    <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
                    :
                    <OptionLink to='signin'>
                        SIGN IN
                    </OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            !hidden && <CartDropdown />
        }
    </HeaderContainer>
)

// // THIS mapStateToProps CAN BE NAME ANYTHING
// // THE state HERE is STATE IN root-reducer
// const mapStateToProps = (state) => ({
//     currentUser : selectCurrentUser(state),
//     hidden: selectCartItems(state)
// })

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden: selectCartHidden
})

// connect IS HOC THAT CONNECT MASTER STATE IN COMPONENT WITH SUPPLIED AND UPDATED STATE PASS FROM mapStateToProps
export default connect(mapStateToProps)(Header);

