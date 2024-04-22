import {Image, View, Text, StyleSheet} from 'react-native'

import Logo from '../assets/logo.png'

export function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text} >Caminho Certo</Text>
      <Image style={styles.img} source={Logo} />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    backgroundColor: '#f1f1f1'

  },
  text: {
    fontSize: 23,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: '#25CCB0'
  },
  img: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: '#c1c1c1',
    borderRadius: 100
  }
})