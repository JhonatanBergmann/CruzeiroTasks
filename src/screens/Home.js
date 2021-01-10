import React, { Component } from 'react'
import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native'

import backgroudImage from '../../assets/imgs/homeImg.jpg'
import commonStyles from '../commonStyles'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default class Home extends Component {
  render() {
    return (
      <ImageBackground style={styles.backgroud} source={backgroudImage}>
        <View>
          <Text style={styles.subTitle}>Entre para acessar suas tarefas :)</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.button}
            onPress={() => this.props.navigation.navigate('Tasklist')}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  backgroud: {
    flex: 1,
    height: hp('100%'),
    width: wp('100%'),
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 30
  },
  subTitle: {
    fontFamily: commonStyles.fontFamily,
    fontSize: hp('2.8%'),
    color: 'white',
    marginBottom: 8
  },
  button: {
    borderRadius: 50,
    backgroundColor: '#a3c524',
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('9%'),
    width: wp('35%')

  },
  buttonText: {
    fontFamily: commonStyles.fontFamily,
    color: 'black',
    fontSize: hp('2.8%')
  }
})