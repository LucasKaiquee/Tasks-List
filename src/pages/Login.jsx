import { useNavigate } from "react-router-dom"

import CustomButton from "../components/CustomButton"

import "./Login.scss"
import logo from "../assets/images/logo.png"

const Login = () => {

    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate('/');
    }

    return(
        <div className="login-container">
            <img src={logo} alt="React Pro" />
            <div className="button-container">
                <CustomButton onClick={handleSignInClick}>Entrar</CustomButton>
            </div>
        </div>
    )
}

export default Login;