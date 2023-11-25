"use client";
import axios, {AxiosError} from "axios";
import React, {useEffect, useState} from "react";
import style from "@/styles/Components/login.module.scss";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [login, setlogin] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);

  const checkButtonActivation = () => {
    setIsButtonActive(login.length > 0 && password.length > 0);
  };

  useEffect(() => {
    setIsButtonActive(login.length > 0 && password.length > 0);
  }, [login, password]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
    // const response = await axios.get(`http://localhost:8080/account/login/${login}`); 
    const response = await axios.get(`https://api-apollo.onrender.com/account/login/${login}`);

      if (response.data && Object.keys(response.data).length > 0){
        if (response.data.password == password) router.push('/home');
        else alert("Senha incorreta")
      }

    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        const axiosError = err as AxiosError;
        if (axiosError.response && axiosError.response.status === 404) alert('Conta não encontrada.')
      }
    }
  };

  useEffect(() => {
    checkButtonActivation();
  }, [login, password]);

  return (
    <div className={style.container}>
      <form className={style.Form} onSubmit={handleSubmit}>
        <div className={style.formControl}>
          <input type="text" value={login} onChange={(e) => setlogin(e.target.value)} required/>
          <label>
            <span style={{ transitionDelay: '0ms' }}>U</span>
            <span style={{ transitionDelay: '50ms' }}>s</span>
            <span style={{ transitionDelay: '100ms' }}>e</span>
            <span style={{ transitionDelay: '150ms' }}>r</span>
            <span style={{ transitionDelay: '200ms' }}>n</span>
            <span style={{ transitionDelay: '250ms' }}>a</span>
            <span style={{ transitionDelay: '300ms' }}>m</span>
            <span style={{ transitionDelay: '350ms' }}>e</span>
          </label>
        </div>

        <div className={style.formControl}>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          <label>
            <span style={{ transitionDelay: '0ms' }}>S</span>
            <span style={{ transitionDelay: '50ms' }}>e</span>
            <span style={{ transitionDelay: '100ms' }}>n</span>
            <span style={{ transitionDelay: '150ms' }}>h</span>
            <span style={{ transitionDelay: '200ms' }}>a</span>
          </label>
        </div>

        <button className={style.ButtonRequest} type="submit" disabled={!isButtonActive}>Entrar</button>
      </form>
    </div>
  );
};

export default Login;