import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  contentContainer: {
    paddingVertical: 10,
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
