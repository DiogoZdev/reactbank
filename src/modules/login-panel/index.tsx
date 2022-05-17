import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import "./login.scss";

export function Login() {

  function acessar() {
    alert('acessar');
  }

  function cadastrar() {
    alert('cadastrar');
  }

  return (
    <div className="wrapper">
      <div className="left-panel">
        <h1>React Bank</h1>
        <img src="logo192.png" alt="React Logo" />
      </div>
      <div className="right-panel">
        <div className="login-box">
          <h1>Olá!</h1>
          <Input label="CPF" type="number" id="oi" />
          <Input label="Senha" type="password" id="senha"/>
          <div className="button-area">
            <Button type="type1" text="Acessar" func={acessar}/>
            <Button type="type2" text="Cadastrar" func={cadastrar}/>
          </div>
          <a href="#">Esqueci minha senha</a>
        </div>
      </div>
    </div>
  )
}