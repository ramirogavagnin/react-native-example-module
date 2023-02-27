import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  numbersContainer: {
    width: '90%',
  },
  numbersRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  margin: {
    marginTop: 20,
  },
  text: {
    alignSelf: 'flex-start',
    color: '#DB4C77',
    fontSize: 16,
  },
  title: {
    alignSelf: 'center',
    color: '#DB4C77',
    fontSize: 20,
    fontWeight: '500',
  },
  textInput: {
    backgroundColor: '#3CA2C8',
    borderRadius: 20,
    padding: 10,
    marginTop: 15,
    width: '100%',
  },
  pressable: {
    backgroundColor: '#10559A',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  pressableText: {
    color: 'white',
  },
});

export default styles;
