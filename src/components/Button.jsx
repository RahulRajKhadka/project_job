import { buttonBaseStyles, buttonVariants } from '../utils/colors';

const Button = ({ children, onClick, variant = 'primary', fullWidth = false, className = '' }) => {
  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      onClick={onClick}
      className={`${buttonBaseStyles} ${buttonVariants[variant]} ${widthClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;