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
      "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400";

    const variantClasses = {
      default: "border-gray-300 dark:border-gray-600",
      error:
        "border-red-500 dark:border-red-400 focus:ring-red-500 focus:border-red-500",
    };

    const resizeClasses = {
      none: "resize-none",
      both: "resize",
      horizontal: "resize-x",
      vertical: "resize-y",
    };

    const textAreaClasses = `${baseClasses} ${variantClasses[variant]} ${resizeClasses[resize]} ${className}`;

    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
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
          className={`${textAreaClasses} transform transition-transform duration-200 focus:scale-[1.02]`}
        />
        {error && (
          <p className="text-sm text-red-500 dark:text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;
