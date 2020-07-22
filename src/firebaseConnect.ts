import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyDcOXcWQ4-KGCxoqH7xMXE1S7SQeAYFpuc',
    authDomain: 'reactjs-player.firebaseapp.com',
    databaseURL: 'https://reactjs-player.firebaseio.com',
    projectId: 'reactjs-player',
    storageBucket: 'reactjs-player.appspot.com',
    messagingSenderId: '959377545174',
    appId: '1:959377545174:web:8b63c8f6335d80fb40f677',
    measurementId: 'G-KFMF93KSK2',
};
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebaseConfig as default };
