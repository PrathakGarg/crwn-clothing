import "./button.styles.scss"

const BUTTON_CLASSES = {
    google: "google-sign-in",
    inverted: "inverted",
}

const Button = ({children, buttonType, ...props}) => (
    <button 
        className={`button-container ${BUTTON_CLASSES[buttonType]}`}
        {...props}
    >
        {children}
    </button>
)

export default Button;