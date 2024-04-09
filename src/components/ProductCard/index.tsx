import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import style from './style';

const ProductCard = ({item, onPress}: {item: any; onPress: () => void}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style.item}>
      <Image style={style.image} source={{uri: item.image}}></Image>
      <View>
        <Text style={style.title}>{item.name}</Text>
        <View style={style.row}>
          <Text>${(item.price * 0.8).toFixed(2)}</Text>
          <Text style={style.price}> {item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
