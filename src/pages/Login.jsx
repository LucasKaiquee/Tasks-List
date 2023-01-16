import CustomButton from "../components/CustomButton"

import "./Logo.scss"
import logo from "../assets/images/logo.png"

const Login = () => {
    return(
        <div className="login-container">
            <img src={logo=""} alt="React Pro" />
            <div className="button-container">
                <CustomButton>Entrar</CustomButton>
            </div>
        </div>
    )
}

export default Login;