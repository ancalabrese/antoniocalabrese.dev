import React, { useState } from 'react';
import MainSection from '../Main/Main';
import Toolbar from '../UI/Toolbar/Toolbar';
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue } from "firebase/database";



const App = () => {
  const [metadata, setData] = useState(null);
  const firebaseConfig = {
    apiKey: "AIzaSyAnE1IYpfDkI11HREb3bopHHdZt4xtjnZM",
    authDomain: "personalwebsite-eaf2d.firebaseapp.com",
    databaseURL: "https://personalwebsite-eaf2d.firebaseio.com",
    projectId: "personalwebsite-eaf2d",
    storageBucket: "personalwebsite-eaf2d.appspot.com",
    messagingSenderId: "451705051635",
    appId: "1:451705051635:web:4eebc4f1949c232bcf9a86",
    measurementId: "G-7KENTQ95DF"
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app)

  onValue(ref(db), (metadata) => {
    console.log(metadata)
  }, { onlyOnce: true })

  return (
    <div className="top-0 left-0 bg-primary min-h-screen flex flex-col">
      <header className='sticky top-0 z-[99] grow-0 shrink-0'>
        <Toolbar links={metadata} />
      </header>
      <MainSection />
    </div>
  );
}

export default App;
