/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import App from "./App";
import {
  BACKGROUND_COLOR
} from './colors';
import SplashScreen from './components/Splash/SplashScreen';

Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
Navigation.registerComponent('SplashScreen', () => SplashScreen);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    statusBar: {
      backgroundColor: BACKGROUND_COLOR
    },
    topBar: {
      title: {
        color: 'white'
      },
      backButton: {
        color: 'white'
      },
      background: {
        color: BACKGROUND_COLOR
      }
    },
    bottomTab: {
      fontSize: 14,
      selectedFontSize: 14
    }
  });
   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
               name: 'SplashScreen'
             }
           }  
         ]
       }
     }
  });
});