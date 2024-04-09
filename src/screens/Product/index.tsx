import {View, Text, Image, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {Screens} from 'navigator';
import style from './style';

type Props = StackScreenProps<Screens, 'Product'>;

const Product = ({route}: Props) => {
  const item = route.params?.item;

  return (
    <View style={style.container}>
      <Image style={style.image} source={{uri: item.image}} />
      <Text style={style.title}>{item.name}</Text>
      <Text style={style.desc}>{item.description}</Text>
      <TouchableOpacity style={style.button}>
        <Text style={style.buttonTxt}>
          Buy for ${(item.price * 0.8).toFixed(2)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Product;
