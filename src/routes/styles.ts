import styled from "styled-components/native";

interface WrapperIconProps {
  borderTopLeftRadius?: string;
}

export const WrapperIcon = styled.View<WrapperIconProps>`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.YELLOW};
  border-top-left-radius: ${(p: WrapperIconProps) => p.borderTopLeftRadius};
`;
