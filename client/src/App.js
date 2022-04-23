import React from 'react'

import { Recipes, Header } from './containers';
import { Navbar} from './components';
import './App.css';




const App = () => {
  return (
    <div className="App">
      <div className="color__bg">
  
      <Recipes />
      
        <Header />
   
      </div>
      {/* <Recipes /> */}
    </div>
  )
}

export default App