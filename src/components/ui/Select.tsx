import { forwardRef } from "react";

interface ISelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface ISelectProps {
  id?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  label?: string;
  error?: string;
  variant?: "default" | "error";
  placeholder?: string;
  options: ISelectOption[];
}

const Select = forwardRef<HTMLSelectElement, ISelectProps>(
  (
    {
      id,
      name,
      value,
      onChange,
      onBlur,
      required = false,
      disabled = false,
      className = "",
      label,
      error,
      variant = "default",
      placeholder,
      options,
    },
    ref
  ) => {
    const baseClasses =
      "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white appearance-none cursor-pointer";

    const variantClasses = {
      default: "border-gray-300 dark:border-gray-600",
      error:
        "border-red-500 dark:border-red-400 focus:ring-red-500 focus:border-red-500",
    };

    const selectClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

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
        <div className="relative">
          <select
            ref={ref}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            required={required}
            disabled={disabled}
            className={`${selectClasses} transform transition-transform duration-200 focus:scale-[1.02]`}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <title>Dropdown arrow</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        {error && (
          <p className="text-sm text-red-500 dark:text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
