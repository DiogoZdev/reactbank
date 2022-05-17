import { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import "./login.scss";

export function Login() {

  let [criando, setCriando] = useState<boolean>(false);

  function acessar() {
    alert('acessar');
  }

  function criarConta() {
    setCriando(!criando);
  }

  return (
    <div className="wrapper">
      <div className="left-panel">
        <h1>React Bank</h1>
        <img src="logo192.png" alt="React Logo" />
      </div>
      <div className="right-panel">
        <div className="login-box">
          <h1>{!criando ? 'Acesse agora' : 'Abra sua conta' }</h1>
          <Input label="CPF" maxLength={11} type="text" id="cpf" />
          <Input label="Senha" type="password" id="senha"/>
          {
          criando &&
          <Input label="Confirmacao de Senha" type="password" id="conf-senha"/>
          }
          
          <div className="button-area">
            <Button type="type1" text={ criando? 'Criar Conta React' : 'Acessar' } func={acessar}/>
            <Button type="type2" text={ criando? 'Voltar' : 'Abrir Conta' } func={criarConta}/>
          </div>
          {
            !criando &&
          <a href="#">Esqueci minha senha</a>
          }
        </div>
      </div>
    </div>
  )
}