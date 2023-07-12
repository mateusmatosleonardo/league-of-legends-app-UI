import React from "react";
import { StatusBar } from "react-native";
import { XStack } from "tamagui";

interface HeaderProps {
  children: React.ReactNode
}

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 20
  : 40;

const Header: React.FC<HeaderProps> = ({ children }: HeaderProps) => {
  return (
    <XStack
      justifyContent="flex-start"
      alignItems="center"
      w="100%"
      px="$4"
      pb="$4"
      pt={statusBarHeight}
    >
      {children}
    </XStack>
  )
}

export default Header;