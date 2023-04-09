import React, { useEffect, useState } from 'react';
import MainSection from './Main';
import Toolbar from './UI/Toolbar';
import { get, getDatabase, onValue, ref } from 'firebase/database';


const App = ({ firebaseApp }) => {

  const initialState = {
    Social: {
      github: { url: "#" },
      instagram: { url: "#" },
      email: { url: "#" },
      linkedin: { url: "#" },
      resume: { url: "#" },
    }
  }
  const [metadata, setMetadata] = useState(initialState)
  const db = getDatabase(firebaseApp)
  const dbRef = ref(db)

  useEffect(() => {
    return onValue(dbRef, (data) => {
      setMetadata(data.val())
    }, {
      onlyOnce: true
    });
  }, []);

  return (
    <div className="top-0 left-0 bg-primary min-h-screen flex flex-col">
      <header className='sticky top-0 z-[99] grow-0 shrink-0'>
        <Toolbar contacts={metadata.Contacts} />
      </header>
      <MainSection metadata={metadata} />
    </div>
  );
}

export default App;
