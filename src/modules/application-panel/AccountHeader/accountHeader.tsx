import './accountHeader.scss';
import { useState } from 'react';

import { BiUser, BiMenu } from 'react-icons/bi';
import { RiEyeLine, RiEyeCloseLine, RiMenu2Fill } from 'react-icons/ri';

export function AccountHeader() {

  let [showInfo, letShowInfo] = useState(false);

  function toggleInfoVisibility() {
    letShowInfo(!showInfo);
  }

  return (
    <header className='header'>
      <div className="user-area">
        <div className='user-info'>
          <div className="user-icon">
            <BiUser className='icon'/>
          </div>
          <h2>Olá, João</h2>
        </div>
      </div>
      <div className='options'>
        <BiUser className="icon"/>
        { !showInfo &&
          <RiEyeCloseLine className="icon" onClick={toggleInfoVisibility}/>
        }
        { showInfo &&
          <RiEyeLine className="icon" onClick={toggleInfoVisibility}/>
        }
        <RiMenu2Fill className='icon'/>
      </div>
    </header>
  )
}