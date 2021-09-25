import React from 'react';
import { Text, StyleSheet, Image } from 'react-native';
import * as logo from '../../../assets/logo.png';

export default TitleLogo = () => {
    
  return (
    <Image style={styles.logo} source={require('../../../assets/logo.png')} />
  )
}

const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 160,
    marginBottom: 15,
    marginTop: 5,
  }
})