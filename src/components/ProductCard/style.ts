import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  item: {
    padding: 16,
    borderRadius: 16,
    elevation: 2,
    backgroundColor: '#fff',
    marginTop: 16,
    shadowColor: '#000',
    justifyContent: 'space-between',
    width: '48%',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowRadius: 5,
    shadowOpacity: 0.1,
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
    aspectRatio: 1,
  },
  title: {
    color: '#000',
  },
  price: {
    fontSize: 12,
    textDecorationLine: 'line-through',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});
