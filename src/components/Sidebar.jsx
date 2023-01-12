import CustomButton from './CustomButton';

import './Sidebar.scss'
import logo from '../assets/images/logo.png'

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className='logo'>
                <img src={logo} alt="Logo do curso React Pro" />
            </div>

            <div className="sign-out">
                <CustomButton>Sair</CustomButton>
            </div>
        </div>
    )
}

export default Sidebar;