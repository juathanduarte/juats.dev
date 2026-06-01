import { forwardRef } from "react";

interface IButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      children,
      type = "button",
      variant = "primary",
      size = "md",
      disabled = false,
      loading = false,
      className = "",
      onClick,
      fullWidth = false,
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider rounded-none transition-colors duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

    const variantClasses = {
      primary:
        "bg-neutral-950 text-white hover:bg-neutral-800 border border-neutral-950 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-150 dark:border-white",
      secondary:
        "bg-neutral-850 text-white hover:bg-neutral-900 border border-neutral-850 dark:bg-neutral-200 dark:text-neutral-950 dark:hover:bg-neutral-100 dark:border-neutral-200",
      outline:
        "border border-neutral-350 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900/60",
      ghost:
        "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900/80",
      danger:
        "bg-neutral-950 text-white hover:bg-neutral-800 border border-neutral-950",
    };

    const sizeClasses = {
      sm: "px-3.5 py-1.5 text-xs",
      md: "px-5 py-2.5 text-sm",
      lg: "px-6 py-3.5 text-base",
    };

    const widthClasses = fullWidth ? "w-full" : "";

    const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClasses} ${className}`;

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        onClick={onClick}
        className={buttonClasses}
      >
        {loading && (
          <span className="mr-2 animate-spin">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
              <title>Loading</title>
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </span>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
