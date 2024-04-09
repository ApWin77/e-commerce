import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
    aspectRatio: 1.2,
  },
  title: {
    color: '#000',
    fontSize: 22,
    fontWeight: '700',
  },
  desc: {
    color: '#000',
    fontSize: 14,
    opacity: 0.6,
  },
  button: {
    backgroundColor: '#388fff',
    height: 45,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
  },
  buttonTxt: {
    color: '#fff',
  },
});
