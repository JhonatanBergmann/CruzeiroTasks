import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Image
} from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default class Splash extends Component {
  componentDidMount = () => {
    setTimeout(
      () => { this.props.navigation.navigate('Home') },
      3000
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/imgs/Splash.png')}
          style={styles.image} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#01376d'
  },
  image: {
    height: hp('80%'),
    width: wp('80%'),
    resizeMode: 'contain'
  }
})