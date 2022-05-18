import React, { useState } from 'react';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { User } from './interfaces/user.interface';
import { Application } from './modules/application-panel/application';
import { Login } from './modules/login-panel/login'

function App() {
  /**
   * Flag identificando se o usuário está conectado
   */
  let [logged, setlogged] = useState(true);

  /**
   * Flag identificando usuário.
   */
  let [user, setUser] = useState<User | null>(null);

  return (
    <div className="viewport">
      {!logged && 
        <Login/>
      }
      {logged && 
        <Application/>
      }
        <Footer/>
    </div>
  );
}

export default App;
