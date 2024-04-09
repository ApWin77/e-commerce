import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {Search} from 'assets/icons';
import style from './style';

type Props = {
  value: string;
  setValue: (text: string) => void;
};

const SearchBar = ({setValue, value}: Props) => {
  return (
    <View style={style.container}>
      <View style={style.wrapper}>
        <TextInput
          onChangeText={setValue}
          value={value}
          placeholderTextColor={'#C4C4C4'}
          placeholder="Search..."
          style={style.input}
        />
        <Search />
      </View>
    </View>
  );
};

export default SearchBar;
