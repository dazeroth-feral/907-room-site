import cssStyle from "./AuthPage.module.css";

const AuthPage = ({}) => {
    return(
        <div className={cssStyle.content}>
            <div className={cssStyle.inputBlock}>
                <input placeholder="Login:" type="text" name="login" id="login" className={cssStyle.loginInput} />
                <input placeholder="Password:" type="password" name="password" id="password" className={cssStyle.passwordInput} />
            </div>
            <button className={cssStyle.submitButton} type="submit">
                Log In
            </button>
        </div>
    );
};

export default AuthPage;