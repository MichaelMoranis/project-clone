import React from "react";
import "./styles.css"

const Central = () => {
  return (
    <div className="celular-ban">
      <h2 className="h2">Como ser parceiro</h2>
        <p className="graf-para">
           Nossa prioridade é o Aluno, se ele se sair bem, pode ser muito bom para você!
        </p>
      <div className="row">
      <div className="card green">
         <img className="image" src="dollar.png" alt="settings" />
         <p className="card-title">CASH</p>
         <p className="description-card">
         Direto ao ponto.
           Você pode se um patrocinador mensal do ProgeTI, ajudando a financiar estudos e material de alunos carentes.
         </p>
      </div>
      <div className="card green">
        <img className="image" src="calendar(1).png" alt="settings" />
        <p className="card-title">EVENTOS</p>
        <p className="description-card">
           Pode ser um parceiro de nossos eventos. Patrocinando eventos, participando de encontros pontuais para ajudar a desenvolver o ProgeTI.
        </p>
      </div>
      <div className="card green">
        <img className="image" src="user(1).png" alt="settings" />
        <p className="card-title">ESTÁGIOS</p>
        <p className="description-card">
           Pode também ofertar vagas de estágio para nossos alunos. Quem sabe um deles se torna um grande parceiro de sua empresa. Show hein!
        </p>
      </div>
      <div className="card green">
        <img className="image" src="lightbulb.png" alt="settings" />
        <p className="card-title">TEM UMA IDEIA ?</p>
        <p className="description-card">
            Bom, não sabemos tudo. Você pode nos ajudar dando ideias e nos mostrando como podemos ser mais relevantes para a comunidade geral. #ajudanóis!
        </p>
      </div>
     </div>
    </div>
  )
}

export default Central;