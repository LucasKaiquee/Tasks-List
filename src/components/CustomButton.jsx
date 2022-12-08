import './CustomButton.scss'

const  CustomButton = ({onClick, children}) => {
    <div className="custom-button-container" onClick={onClick}>
        {children}
    </div>
}

export default CustomButton