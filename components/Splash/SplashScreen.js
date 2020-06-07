import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Animated,
} from 'react-native';
import {BACKGROUND_COLOR} from '../../colors';
export default SplashScreen = () => {
  const height = useWindowDimensions().height;
  const [logoOpacity, setLogoOpacity] = useState(new Animated.Value(0));
  const [titleMarginTop, setTitleMarginTop] = useState(new Animated.Value(height/2));
  
  useEffect(() => {
    Animated.parallel([
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(titleMarginTop, {
        toValue: 10,
        duration: 1000,
        useNativeDriver: false,
      })
    ]).start(async () => {

    })
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../images/logo.png')}
        style={{...styles.logo, opacity: logoOpacity}}>
      </Animated.Image>
      <Animated.Text style={{...styles.title, marginTop: titleMarginTop}}>
        Welcome to Mini Shop!
      </Animated.Text>
    </View>
  );
}

SplashScreen.options = {
  topBar: {
    visible: false
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: BACKGROUND_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  title: {
    marginTop: 10,
    textAlign: 'center',
    width: 400,
    fontSize: 21
  }
})