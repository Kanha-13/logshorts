import './index.css'
import Logo from '../../assets/images/lq-logo.png'
const Header = ({ onclick }) => {
    return (
        <div id="header-div">
            <div onClick={onclick} id='sidebar-btn'>
                <div id='hamburger'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {(window.innerWidth > 768) ? <p>Menu</p> : <></>}
            </div>
            <img src={Logo} alt='LoIQids' />
        </div>
    );
}

export default Header;