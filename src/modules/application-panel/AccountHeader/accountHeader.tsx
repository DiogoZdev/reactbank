import './accountHeader.scss';
import { useState } from 'react';

import { FiUser, FiMenu, FiEye, FiEyeOff } from 'react-icons/fi';

type Prop = {
  detectVisibility: (value: boolean) => void,
}

export function AccountHeader(p: Prop) {

  let [showInfo, letShowInfo] = useState(false);

  function toggleInfoVisibility() {
    letShowInfo(!showInfo);
    p.detectVisibility(showInfo);
  }

  return (
    <header className='header'>
      <div className="user-area">
        <div className='user-info'>
          <div className="user-icon">
            <FiUser className='icon'/>
          </div>
          <h2>Olá, João</h2>
        </div>
      </div>
      <div className='options'>
        <FiUser className="icon"/>
        { !showInfo &&
          <FiEye className="icon" onClick={toggleInfoVisibility}/>
        }
        { showInfo &&
          <FiEyeOff className="icon" onClick={toggleInfoVisibility}/>
        }
        <FiMenu className='icon'/>
      </div>
    </header>
  )
}