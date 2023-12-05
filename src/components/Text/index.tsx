import React from "react";

const sizeClasses = {
  txtRalewayMedium24: "font-medium font-raleway",
  txtRalewayRomanMedium18: "font-medium font-raleway",
  txtRalewayBold70: "font-bold font-raleway",
  txtRalewaySemiBold24: "font-raleway font-semibold",
  txtRalewayMedium18Black900: "font-medium font-raleway",
  txtRalewayMedium20: "font-medium font-raleway",
  txtMontserratMedium16: "font-medium font-montserrat",
  txtMontserratMedium18: "font-medium font-montserrat",
  txtRalewaySemiBold24Black900: "font-raleway font-semibold",
  txtRalewayBold32: "font-bold font-raleway",
  txtRalewayMedium18WhiteA700: "font-medium font-raleway",
  txtRalewayBold24: "font-bold font-raleway",
  txtRalewayBold36: "font-bold font-raleway",
  txtRaleway16: "font-normal font-raleway",
  txtRalewayMedium18Bluegray400: "font-medium font-raleway",
  txtRalewaySemiBold24Gray500: "font-raleway font-semibold",
  txtRalewaySemiBold28: "font-raleway font-semibold",
  txtRalewaySemiBold24Gray700: "font-raleway font-semibold",
  txtRalewayMedium18: "font-medium font-raleway",
  txtPoppinsSemiBold18: "font-poppins font-semibold",
  txtRalewayMedium18Gray700e5: "font-medium font-raleway",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
