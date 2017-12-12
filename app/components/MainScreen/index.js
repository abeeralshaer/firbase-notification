import React, { Component } from 'react'

import PushNotification from 'react-native-push-notification'
import firebase from 'react-native-firebase'
import { View, Text, StyleSheet, Platform } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  picker: {
    width: 100,
  },
})

export default class App extends Component {
  componentDidMount() {
  firebase.messaging().createLocalNotification({
      title: 'Test',                                      // as FCM payload
       body: 'body',                                         // as FCM payload (required)
       sound: 'jingle_bells.mp3',                                   // as FCM payload
       priority: 'high',                                   // as FCM payload
       icon: 'ic_launcher',                                // as FCM payload, you can relace this with custom icon you put in mipmap
       color: 'red',                                       // Android only
       vibrate: 300,                                       // Android only default: 300, no vibration if you pass null
       tag: 'privmsg',                                 // Android only
       lights: true,                                       // Android only, LED blinking (default false)
       show_in_foreground:true,
       click_action: "fcm.ACTION.HELLO",
      })
      const androidConfig = {
  clientId: '220304222917-k9359t60mv7ud6iiv03eglegvdjm0m7d.apps.googleusercontent.com',
  appId: '1:220304222917:android:a92391118e94d2b5',
  apiKey: 'AIzaSyBxJpxLPq84MRWsDTgczGdebwO7xgE9kDY',
  databaseURL: 'https://pushnotificationproject-64841.firebaseio.com',
  storageBucket: 'pushnotificationproject-64841.appspot.com',
  messagingSenderId: '220304222917',
  projectId: 'pushnotificationproject-64841',

  // enable persistence by adding the below flag
  persistence: true,
};

const PushNotificationProject = firebase.initializeApp(
  // use platform specific firebase config
  Platform.OS === 'ios' ? iosConfig : androidConfig,
  // name of this app
  'PushNotificationProject',
);

// dynamically created apps aren't available immediately due to the
// asynchronous nature of react native bridging, therefore you must
// wait for an `onReady` state before calling any modules/methods
// otherwise you will most likely run into `app not initialized` exceptions
PushNotificationProject.onReady().then((app) => {
   // --- ready ---
   // use `app` arg, kittensApp var or `app('kittens')` to access modules
   // and their methods. e.g:
   firebase.app('PushNotificationProject').auth().signInAnonymously().then((user) => {
       console.log('PushNotificationProject user ->', user.toJSON());
   });
});
      firebase.messaging().onMessage((app)=>{console.log(app)})
      console.log(firebase.messaging());
      console.log(firebase.messaging().getToken().then((app)=>console.log(app)));
      firebase.messaging().scheduleLocalNotification({
        fire_date: new Date().getTime() + 5000, // RN's converter is used, accept epoch time and whatever that converter supports
        id: '0', // REQUIRED! this is what you use to lookup and delete notification. In android notification with same ID will override each other
        body: 'fdkjf',
        title: 'Your title',
        show_in_foreground: true,
      })
      firebase.messaging().setBadgeNumber(1)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          You wil get your notification
        </Text>
      </View>
    )
  }
}
