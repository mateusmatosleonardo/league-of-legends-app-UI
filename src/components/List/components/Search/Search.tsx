import React from "react";
import { Platform } from "react-native";
import { BehaviorBox, Input, SearchIcon, WrapperIcon, WrapperInput, WrapperSearch } from "./styles";
import { Feather } from '@expo/vector-icons';
import { SearchProps } from "../../../../interfaces/interfaces";

const Search: React.FC<SearchProps> = ({ value, onChangeText }: SearchProps) => {
  return (
    <WrapperSearch behavior={Platform.OS === 'ios' ? "padding" : 'height'}>
      <WrapperInput>

        <Input
          placeholder="Pesquisar..."
          placeholderTextColor="#ffffff"
          value={value}
          onChangeText={onChangeText}
        />

        <WrapperIcon>
          <SearchIcon>
            <Feather name="search" size={15} color="#ffffff" />
          </SearchIcon>
        </WrapperIcon>

      </WrapperInput>

      <BehaviorBox />
    </WrapperSearch>
  )
}

export default Search;