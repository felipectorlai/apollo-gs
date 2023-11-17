import Header from "./Components/header";
import style from '../styles/globals.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
      <Header/>
      
      <label htmlFor="myInput" className={style.label}>
        <span className={style.labelTitle}>Email</span>
        <input id="myInput" className={style.input} name="text" placeholder="Type something..." type="text"/>
      </label>
    </>
  );
}