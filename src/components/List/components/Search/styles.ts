import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const WrapperSearch = styled.KeyboardAvoidingView`
  width: 100%;
  padding: 25px 20px 0px 20px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  justify-content: center;
  background-color: #232323;
`;

export const WrapperInput = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  border-radius: 8px;
  border-width: 1px;
  border-color: #6b6b6b;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 100%;
  padding-left: 8px;
  padding-right: 2px;
  font-family: ${({ theme }) => theme.fonts.Montserrat_Medium};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.WHITE};
`;

export const WrapperIcon = styled.View`
  width: 30px;
  height: 100%;
`;

export const SearchIcon = styled.View`
  width: 35px;
  height: 36px;
  position: absolute;
  bottom: 0;
  right: 0;
  border-top-left-radius: 14px;
  border-bottom-right-radius: 7px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.YELLOW};
`;

export const BehaviorBox = styled.View`
  width: 100%;
  height: 20px;
`;
