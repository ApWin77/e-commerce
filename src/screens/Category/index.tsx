import {View, Text, FlatList} from 'react-native';
import React from 'react';
import style from './style';
import ProductCard from 'components/ProductCard';
import {StackScreenProps} from '@react-navigation/stack';
import {Screens} from 'navigator';
import datas from '../..//datas/products.json';

type Props = StackScreenProps<Screens, 'Category'>;

const Category = ({navigation, route}: Props) => {
  const {id, title} = route.params;
  navigation.setOptions({title});

  const data = datas.filter(item => item.category === id);

  return (
    <View style={style.container}>
      <FlatList
        numColumns={2}
        columnWrapperStyle={style.list}
        contentContainerStyle={style.contentContainer}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return (
            <ProductCard
              onPress={() => navigation.navigate('Product', {item})}
              item={item}
            />
          );
        }}
        data={data}
      />
    </View>
  );
};

export default Category;
