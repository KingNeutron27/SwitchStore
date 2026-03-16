import '../../styles/button.css'

type ButtonVariant = "primary" | "secondary" | "danger" | "outline";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;                
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  children,
  variant = "primary",
  size = "md",
  className = "",
  loading = false,
  disabled,
  ...rest
}) => {
  const classes = [
    "btn",
    `btn-${variant}`,
    `btn-${size}`,
    loading ? "loading" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      {...rest}
    >
      {text ?? children}
    </button>
  );
};

export default Button;