import { StatusBar } from "react-native";
import styled from "styled-components/native";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 10
  : 0;

export const Container = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: ${statusBarHeight}px 20px 18px 20px;
`;
