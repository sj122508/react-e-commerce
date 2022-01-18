import React from "react";

import './custom-button.styles.scss';



const CustomButton = ({ children, isGoogleSignIn, inverted,...otherProps }) => (
    <button
        className={`custom-button ${isGoogleSignIn ? 'google-sign-in' : inverted ? 'inverted' : ''}`} 
        {...otherProps}>
        {children}
    </button>
)

export default CustomButton;



// import React from "react";

// import './custom-button.styles.scss';

// import { CustomButtonContainer } from "./custom-button.styles";

// const CustomButton = ({children, ...props}) => {
//     console.log(props)
//     return(
//         <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
//     )
// }

// export default CustomButton;