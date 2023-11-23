'use client'
import axios, { AxiosError } from "axios";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import style from '../styles/components/account.module.scss';

export default function Account() {
  const router = useRouter();
  const [cnpj, setCnpj] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);


  const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCnpj = event.target.value.replace(/\D/g, '');

    if (newCnpj.length <= 14) {
      setCnpj(newCnpj);
      setIsButtonActive(newCnpj.length === 14);
    } 
};

  const handleFormSubmit = async () => {
    if (cnpj.length === 14) {
      try {
        const response = await axios.get(`http://localhost:8080/client/cnpj/${cnpj}`);
        if (response.data && Object.keys(response.data).length > 0) {
          console.log(response.data);
          console.log(response.data.id);
          console.log(response.data.situation);

          //router.push('/');
        } else console.log(response.data);
      }catch (err: any) {
        if (axios.isAxiosError(err)) {
          const axiosError = err as AxiosError;
  
          if (axiosError.response && axiosError.response.status === 404) router.push('/register');
          else console.error('Erro ao chamar a API:', axiosError);
        }
      }
    } else alert('Por favor, insira um CNPJ válido com 14 dígitos.');
  };

  const handleSubmitButtonClick = async () => {
    if (isButtonActive) {
      handleFormSubmit();
    }
  };
  
  return (
    <div className={`${style.container} d-flex justify-content-center align-items-center flex-column`}>
        <label htmlFor="myInput" className={style.label}>
            <span className={style.labelTitle}>Digite o CNPJ</span>
            <input id="myInput" className={style.input} value={cnpj}  onChange={handleCpfChange} required={true} name="text" placeholder="CNPJ" type="text"/>
        </label>
        <button className={style.butttonSumit} onClick={handleSubmitButtonClick} disabled={!isButtonActive} style={{ opacity: isButtonActive ? 1 : 0.4 }}> Avançar</button>
    </div>
  )
}