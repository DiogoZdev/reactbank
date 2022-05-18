import { useState } from "react";
import { Button } from "../../components/Button/button";
import { Input } from "../../components/Input/input";
import "./login.scss";

export function Login() {
  /**
   * Flag de criação de conta.
   */
  let [criando, setCriando] = useState<boolean>(false);

  /**'
   * CPF do usuário
   */
  let cpf: string;

  /**
   * Nome do usuário
   */
  let nome: string;

  /**
   * Senha no acesso
   */
  let senha: string;

  function acessar() {
    if (criando) {
      console.log('criar conta');
      
    } else {
      console.log('acessar');
      
    }
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
          {criando &&
          <Input label="Nome" type="text" id="name"/>
          }
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