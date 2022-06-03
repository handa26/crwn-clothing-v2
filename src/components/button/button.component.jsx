import "./button.styles.scss";
import { BaseButton, GoogleButton, InvertedButton } from "./button.styles";

export const BUTTON_TYPE_STYLES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_STYLES.base) =>
  ({
    [BUTTON_TYPE_STYLES.base]: BaseButton,
    [BUTTON_TYPE_STYLES.google]: GoogleButton,
    [BUTTON_TYPE_STYLES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
