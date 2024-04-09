import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  headTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginHorizontal: 16,
  },
  list: {
    paddingLeft: 16,
    paddingVertical: 12,
    paddingRight: 4,
  },
  item: {
    width: 120,
    padding: 12,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    backgroundColor: '#fff',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowRadius: 5,
    shadowOpacity: 0.1,
  },
  image: {
    width: 60,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  title: {
    color: '#000',
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '700',
  },
});
