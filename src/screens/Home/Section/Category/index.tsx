import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {memo} from 'react';
import style from './style';
import data from '../../../../datas/category.json';

const Category = ({onPress}: {onPress: (id: number, name: string) => void}) => {
  return (
    <View style={style.container}>
      <Text style={style.headTitle}>Category</Text>
      <FlatList
        horizontal
        contentContainerStyle={style.list}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => onPress(item.id, item.name)}
              style={style.item}>
              <Image style={style.image} source={{uri: item.image}} />
              <Text style={style.title}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
        data={data}
      />
      <Text style={style.headTitle}>Products</Text>
    </View>
  );
};

export default memo(Category);
