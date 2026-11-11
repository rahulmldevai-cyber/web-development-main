import React, { useState } from 'react'
import MyStore from './Components/MyStore';
import Child1 from './Components/Child1';
import Child2 from './Components/Child2';
import Child3 from './Components/Child3';


function App() {
  const[name, setName] = useState("Alex");
  const[age, setAge] = useState(20);
  return (
    <MyStore.Provider value={{name,age}}>
      <Child1/>

    </MyStore.Provider>
  )
}

export default App;
