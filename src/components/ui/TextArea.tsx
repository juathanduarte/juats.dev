import { forwardRef } from "react";

interface ITextAreaProps {
  id?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  label?: string;
  error?: string;
  variant?: "default" | "error";
  rows?: number;
  resize?: "none" | "both" | "horizontal" | "vertical";
}

const TextArea = forwardRef<HTMLTextAreaElement, ITextAreaProps>(
  (
    {
      id,
      name,
      placeholder,
      value,
      onChange,
      onBlur,
      required = false,
      disabled = false,
      className = "",
      label,
      error,
      variant = "default",
      rows = 4,
      resize = "none",
    },
    ref
  ) => {
    const baseClasses =
      "w-full px-0 py-2 border-b border-t-0 border-l-0 border-r-0 rounded-none focus:ring-0 focus:border-neutral-950 dark:focus:border-white focus:outline-none transition-colors bg-transparent text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 text-sm";

    const variantClasses = {
      default: "border-neutral-250 dark:border-neutral-800",
      error:
        "border-red-500 dark:border-red-400 focus:border-red-500",
    };

    const resizeClasses = {
      none: "resize-none",
      both: "resize",
      horizontal: "resize-x",
      vertical: "resize-y",
    };

    const textAreaClasses = `${baseClasses} ${variantClasses[variant]} ${resizeClasses[resize]} ${className}`;

    return (
      <div className="space-y-1.5">
        {label && (
          <label
            htmlFor={id}
            className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400"
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
          disabled={disabled}
          rows={rows}
          className={textAreaClasses}
        />
        {error && (
          <p className="text-xs text-red-500 dark:text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;
