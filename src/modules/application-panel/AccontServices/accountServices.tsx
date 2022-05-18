import { CardInfo } from '../../../components/CardInfo/CardInfo';
import './accountServices.scss';

export function AccountServices() {
  return (
    <div className="services">
      <CardInfo title='saldo' content='500'/>
      <CardInfo title='poupança' content='4000'/>
      <CardInfo title='investimentos' content='0'/>
      <CardInfo title='limite de crédito' content='8000'/>
    </div>
  )
}