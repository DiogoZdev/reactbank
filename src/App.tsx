import { userInfo } from 'os';
import React, { useEffect, useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { User } from './interfaces/user.interface';
import { Application } from './modules/application-panel';
import { Login } from './modules/login-panel'

function App() {
  /**
   * Flag identificando se o usuário está conectado
   */
  let [logged, setlogged] = useState(false);

  let [user, setUser] = useState<User | null>(null);

  /**
   * Verificar se o usuário está conectado.
   */
  useEffect(() => {
    if (localStorage.getItem('usuario')) {
      setUser(JSON.parse(JSON.stringify(localStorage.getItem('usuario'))));
      setlogged(true);
    }
  }, [logged])

  function all() {
    alert('alguma coisa');
  }

  return (
    <div className="viewport">
      {!logged && 
        <Login/>
      }
      {!logged && 
        <Application/>
      }
        <Footer/>
    </div>
  );
}

export default App;
