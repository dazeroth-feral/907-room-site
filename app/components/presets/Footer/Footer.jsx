import cssStyle from "./Footer.module.css";

const Footer = ({ isAuhtWindows }) => {
    return(
        <div className={cssStyle.content}>
            <div className={cssStyle.siteName}>907 Room Site</div>
            <div className={cssStyle.rightBlock}>
                {
                    isAuhtWindows
                        ? <>You dont need to Log In :D</>
                        : <>-</>
                }
            </div>
        </div>
    )
};

export default Footer;