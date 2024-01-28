const firebaseconfig1 = { 
    apiKey: "AIzaSyCpyGybkDzb8vg6CLrq94Obr_6ocNW3I48",
    authDomain: "postandearn-913e7.firebaseapp.com",
    databaseURL: "https://postandearn-913e7-default-rtdb.firebaseio.com",
    projectId: "postandearn-913e7",
    storageBucket: "postandearn-913e7.appspot.com",
    messagingSenderId: "516981459091",
    appId: "1:516981459091:web:252fa231f2b08c8a752566",
    measurementId: "G-4J5FET99CL"
  }
  const firebaseApp1 = firebase.initializeApp(firebaseconfig1, "app1");
  const Primarydatabase = firebaseApp1.database();
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig2 = {
  apiKey: "AIzaSyCY07WOQXemzXTwKULN_S2Aqa9SzIXlD4E",
  authDomain: "hot-5-240f0.firebaseapp.com",
  databaseURL: "https://hot-5-240f0-default-rtdb.firebaseio.com",
  projectId: "hot-5-240f0",
  storageBucket: "hot-5-240f0.appspot.com",
  messagingSenderId: "20969150931",
  appId: "1:20969150931:web:dae6ee8aa4d4a7d13ff726",
  measurementId: "G-3TT4ZY2SRQ"
};
  const firebaseApp2 = firebase.initializeApp(firebaseConfig2, "app2");
  const Secondarydatabase = firebaseApp2.database();
  