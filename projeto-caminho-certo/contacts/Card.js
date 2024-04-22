import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Filha from '../assets/filha.png';
import { AntDesign } from '@expo/vector-icons';
export function Card({tipo='FILHA', nome, telefone, foto,onDelete}) {
  return (
    <View style={styles.view}>
      <Image style={styles.image} source={{uri: foto}} />
      <View style={styles.viewText}>
        <Text style={styles.text}>{tipo}</Text>
        <Text style={styles.text}>{nome}</Text>
        <Text style={styles.text}>{telefone}</Text>
        <TouchableOpacity onPress={onDelete}>
        <AntDesign name="deleteuser" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingBottom: 10,
    columnGap: 10,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 60,
    borderRadius: 8,
  },
  viewText: {},
  text: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: 'bold' 
  },
});
