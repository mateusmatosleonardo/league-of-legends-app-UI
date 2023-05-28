import styled from "styled-components/native";

export const LoadingView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.BLACK};
`;

export const LoadingIndicator = styled.ActivityIndicator``;
