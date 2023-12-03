import "./Header.css";
import { HomeFilled } from "@ant-design/icons";

function Header() {

    const goHome = () => { window.location.href = '/' }

    return (
        <>
            <div className="container-header">
                <div className="header">
                    <div className="homeIcon" onClick={goHome}><HomeFilled /></div>
                </div>
            </div>
        </>
    );
}

export default Header;