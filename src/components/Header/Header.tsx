import React from "react";
import { Container } from "./styles";

interface HeaderProps {
  children: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({ children }: HeaderProps) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Header;