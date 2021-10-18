import React from 'react';
import logo from './logo.svg';
import './Cadastro.css'


export default function Cadastro(){

    return(
        <div>
            <div className="conteiner">
                <div className="esquerda">
                    <div className="titulo">
                        <h1>Cadastro</h1>
                        <p>Preencha os dados abaixo para começar</p>
                    </div>
                
                    <div className="forms">
                        <form>
                            <input type="text" className="nome" name="name" placeholder="Nome"></input>
                            <input type="text" className="sobrenome" name="sobrenome" placeholder="Sobrenome"></input>
                            <input type="email" className="email" name="email" placeholder="E-mail"></input>
                            <input type="password" className="senha" name="senha" placeholder="Senha"></input>
                            <button type="button" className="botao" name="button">Concluir Cadastro</button>
                        </form>
                    </div>
                </div>

                <div className="direita">

                    <img src={logo} className="logo" alt="logo" />

                    <h1>App React</h1>

                </div>

            </div>
        </div>
    );
}