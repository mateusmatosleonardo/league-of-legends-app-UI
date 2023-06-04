import React from "react";
import { Text } from "react-native";

export enum EnumFonts {
  REGULAR = "Montserrat_400Regular",
  MEDIUM = "Montserrat_500Medium",
  SEMI_BOLD = "Montserrat_600SemiBold",
  BOLD = "Montserrat_700Bold",
}

interface TextProps {
  children?: React.ReactNode;
  color?: string;
  size?: number;
  p?: string | number | undefined;
  pt?: string | number | undefined;
  pr?: string | number | undefined;
  pb?: string | number | undefined;
  pl?: string | number | undefined;
  m?: string | number | undefined;
  mt?: string | number | undefined;
  mr?: string | number | undefined;
  mb?: string | number | undefined;
  ml?: string | number | undefined;
  alignment?: "center" | "left" | "right" | "auto" | "justify" | undefined;
  fontFamily?: "Montserrat_400Regular" | "Montserrat_500Medium" | "Montserrat_600SemiBold" | "Montserrat_700Bold" | string | undefined;
}

const CustomText = ({ children,
  color,
  size,
  fontFamily,
  p,
  pt,
  pr,
  pb,
  pl,
  m,
  mt,
  mr,
  mb,
  ml,
  alignment }: TextProps) =>
  <Text
    style={{
      color: color,
      fontSize: size,
      fontFamily: fontFamily,
      padding: p,
      paddingTop: pt,
      paddingRight: pr,
      paddingBottom: pb,
      paddingLeft: pl,
      margin: m,
      marginTop: mt,
      marginRight: mr,
      marginBottom: mb,
      marginLeft: ml,
      textAlign: alignment
    }}>
    {children}
  </Text>;

export default CustomText;