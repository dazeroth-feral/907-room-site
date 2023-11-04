'use client';

import cssStyle from "./Button.module.css";

const Button = ({ action, children }) => {
    return(
        <button onClick={action} className={cssStyle.content} >{children}</button>
    );
};

export default Button;