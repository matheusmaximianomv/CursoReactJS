const Rebase = require('re-base');
const firebase = require('firebase');

const FirebaseConfig = {
    apiKey: "AIzaSyBKC6zgSv33qpHfuxipdKENhyEuDFQieJA",
    authDomain: "company-portfolio-27d64.firebaseapp.com",
    databaseURL: "https://company-portfolio-27d64.firebaseio.com",
    projectId: "company-portfolio-27d64",
    storageBucket: "company-portfolio-27d64.appspot.com",
    messagingSenderId: "1066770735075"
};

const app = firebase.initializeApp(FirebaseConfig);
const config = Rebase.createClass(app.database());

export const storage = app.storage();
export const auth = app.auth();

export default config;