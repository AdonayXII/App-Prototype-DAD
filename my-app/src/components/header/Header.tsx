import "./Header.css";
import { ArrowLeftOutlined, HomeFilled } from "@ant-design/icons";

function Header() {

    const goBack = () => {window.history.back()}

    const goHome = () => {window.location.href= '/'}

    return (
        <>
            <div className="container-header">
                <div className="header">
                    <div id="arrowIcon" onClick={goBack}><ArrowLeftOutlined /></div>
                    <div id="homeIcon" onClick={goHome}><HomeFilled /></div>
                </div>
            </div>


        </>
    );
}

export default Header;