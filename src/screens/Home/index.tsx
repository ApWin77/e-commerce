import {FlatList, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {SearchBar, Category} from './Section';
import style from './style';
import dummyData from '../../datas/products.json';
import {Screens} from 'navigator';
import {StackScreenProps} from '@react-navigation/stack';
import ProductCard from 'components/ProductCard';

type Props = StackScreenProps<Screens>;

const Home = ({navigation}: Props) => {
  const [value, setValue] = useState('');
  const [data, setData] = useState(dummyData);

  useEffect(() => {
    setData(dummyData.filter(item => item.name.includes(value)));
  }, [value]);

  const categoryClick = useCallback(
    (id: number, name: string) =>
      navigation.navigate('Category', {id, title: name}),
    [],
  );

  return (
    <View style={style.container}>
      <SearchBar setValue={setValue} value={value} />
      <FlatList
        ListHeaderComponent={<Category onPress={categoryClick} />}
        numColumns={2}
        columnWrapperStyle={style.list}
        contentContainerStyle={style.contentContainer}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return (
            <ProductCard
              item={item}
              onPress={() => navigation.navigate('Product', {item})}
            />
          );
        }}
        data={data}
      />
    </View>
  );
};

export default Home;
