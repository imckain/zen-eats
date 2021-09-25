import React from 'react';
import { StyleSheet, Image } from 'react-native';

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