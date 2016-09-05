var firebase = require('firebase');
var config = {
    apiKey: "AIzaSyAMbFkTm2r6ty6UV4hvrJZLrXRpqKji8Hc",
    authDomain: "learningnodejs-a4e65.firebaseapp.com",
    databaseURL: "https://learningnodejs-a4e65.firebaseio.com",
    storageBucket: "learningnodejs-a4e65.appspot.com",
};
firebase.initializeApp(config);

console.log('Firebase Init Done');
