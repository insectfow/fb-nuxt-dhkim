import Vue from 'vue';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAfH1JsG6gkd58oMDNc-EHQ4mH1z5LqhMA",
    authDomain: "fb-nuxt-dhkim.firebaseapp.com",
    databaseURL: "https://fb-nuxt-dhkim-default-rtdb.firebaseio.com",
    projectId: "fb-nuxt-dhkim",
    storageBucket: "fb-nuxt-dhkim.appspot.com",
    messagingSenderId: "419045953182",
    appId: "1:419045953182:web:cc38741f78add2ff81358f",
    measurementId: "G-5T0MKX74ZR"
};


Vue.prototype.fb_login = () => {
    console.log('fb_login');
    firebase.initializeApp(config);
       
}

Vue.prototype.fb_add_user = (user) => {
    console.log('fb_add_user');
    const db = firebase.firestore(); 
    const docRef = db.collection('users').doc(user.nickName);
    docRef.set({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        nickName: user.nickName,
    });    
    console.log('fb_add_user', user);
}



