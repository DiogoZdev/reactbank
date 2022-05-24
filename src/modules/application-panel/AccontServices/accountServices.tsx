import { useState } from 'react';
import { CardInfo } from '../../../components/CardInfo/CardInfo';
import './accountServices.scss';

type Prop = {
  visibility: boolean;
}

export function AccountServices(p: Prop) {

  let [selectedService, setSelectedService] = useState('');

  function setSelection(service: string) {
    setSelectedService(service)
    console.log(service);
  }

  return (
    <div className="services">
      <CardInfo visibility={p.visibility} fnClick={setSelection} title='saldo' content='500'/>
      <CardInfo visibility={p.visibility} fnClick={setSelection} title='poupança' content='4000'/>
      <CardInfo visibility={p.visibility} fnClick={setSelection} title='investimentos' content='0'/>
      <CardInfo visibility={p.visibility} fnClick={setSelection} title='limite de crédito' content='8000'/>
    </div>
  )
}