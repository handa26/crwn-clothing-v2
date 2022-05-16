import "./button.styles.scss";

const BUTTON_TYPE_STYLES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_STYLES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
