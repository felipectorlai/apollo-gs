import React from 'react'
import style from "@/styles/components/footer.module.scss"

export default function Footer() {
  return (
    <footer className={style.footer}>
        <p>Turma 1TDSPZ</p>
        <p>
          RM550263<br></br>
          RM550422<br></br>
          RM97694<br></br>
          RM550430<br></br>
          RM99643<br></br>
        </p>
        <p>       
          Felipe Torlai<br></br>
          Édipo Borges<br></br>
          Giulia Pina<br></br>
          Jean Carlos<br></br>
          Rafael Chaves<br></br>
        </p>
        <p>
          Responsive Web Development<br></br>
          Computational Thinking Using Python<br></br>
          Building Relational DataBase<br></br>
          Software Design and Total Experience / Inteligência Artificial<br></br>
          Domain Drive Design<br></br>
        </p>
    </footer>
  )
}
