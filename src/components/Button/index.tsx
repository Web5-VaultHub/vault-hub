import React from "react";

const shapes = { round: "rounded-[5px]" } as const;

// const variants = {
//   outline: {
//     blue_gray_400: "border border-blue_gray-400 border-solid",
//     gray_400: "border border-gray-400 border-solid",
//     black_900: "border-2 border-black-900 border-solid",
//   },
//   fill: {
//     white_A700: "bg-white-A700 text-black-900",
//     gray_100: "bg-gray-100",
//     gray_50: "bg-gray-50 text-gray-700",
//     black_900: "bg-black-900 text-white-A700",
//   },
// } as const;

// Add index signatures for each nested object
interface Variant {
  [key: string]: string;
}

const variants: {
  outline: Variant;
  fill: Variant;
} = {
  outline: {
    blue_gray_400: "border border-blue_gray-400 border-solid",
    gray_400: "border border-gray-400 border-solid",
    black_900: "border-2 border-black-900 border-solid",
  },
  fill: {
    white_A700: "bg-white-A700 text-black-900",
    gray_100: "bg-gray-100",
    gray_50: "bg-gray-50 text-gray-700",
    black_900: "bg-black-900 text-white-A700",
  },
} as const;

const sizes = {
  xs: "p-2.5",
  sm: "p-[13px]",
  md: "p-[18px]",
  lg: "p-[21px] sm:px-5",
  xl: "p-6 sm:px-5",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "md",
  variant = "fill",
  color = "black_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${
        (shape && shapes[shape as keyof typeof shapes]) || ""
      } ${(size && sizes[size as keyof typeof sizes]) || ""} ${
        (variant && variants[variant]?.[color]) || ""
      }`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
