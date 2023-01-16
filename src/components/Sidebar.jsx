import { useNavigate } from 'react-router-dom'

import CustomButton from './CustomButton'

import './Sidebar.scss'
import logo from '../assets/images/logo.png'

const Sidebar = () => {
  const navigate = useNavigate()

  const handleSignOutClick = () => {
    navigate('/login')
  }

  return (
        <div className="sidebar-container">
            <div className='logo'>
                <img src={logo} alt="Logo do curso React Pro" />
            </div>

            <div className="sign-out">
                <CustomButton onClick={handleSignOutClick}>Sair</CustomButton>
            </div>
        </div>
  )
}

export default Sidebar
