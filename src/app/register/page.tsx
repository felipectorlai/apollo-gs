"use client"
import axios from "axios";
import React, { useState, ChangeEvent } from "react";
import style from "@/styles/Components/register.module.scss";

export default function Page() {
  // #region const register client
  const [nameCorporateReason, setNameCorporateReason] = useState("");
  const [fantasyName, setFantasyName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [contact, setContact] = useState("");
  const [rating, setRating] = useState("");
  // #endregion

  // #region const register account
  const [login, setlogin] = useState("");
  const [emailCorp, setEmailCorp] = useState("");
  const [confirmEmail, setConfirmEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [doEmailsMatch, setDoEmailsMatch] = useState(true);
  const [password, setPassword] = useState("");
  const [dateStart, setDateStart] = useState("");
  // #endregion

  // #region const register address
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [city, setCity] = useState("");
  const [cep, setCep] = useState("");
  // #endregion

 
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameCorporateReason(e.target.value);
  };

  const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCnpj = event.target.value.replace(/\D/g, "");

    if (newCnpj.length <= 14) {
      setCnpj(newCnpj);
    }
  };

  const validateEmail = (emailCorp: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailCorp);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmailCorp(newEmail);
    setIsEmailValid(validateEmail(newEmail));
  };

  const handleConfirmEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newConfirmEmail = event.target.value;
    setConfirmEmail(newConfirmEmail);
    setDoEmailsMatch(newConfirmEmail === emailCorp);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const clientData = { nameCorporateReason, fantasyName, cnpj, emailCorp, contact, rating};
    const accountData = { login, emailCorp, cnpj, password, dateStart};
    const addressData = { street, number, complement, city, cep };

    try {
      const responseClient = await axios.post("http://localhost:8080/client", clientData);
      const responseAccount = await axios.post("http://localhost:8080/account", accountData);
      const responseAddress = await axios.post("http://localhost:8080/address", addressData);

      console.log("Server response:", responseClient.data);

      setNameCorporateReason("");
      setFantasyName("");
      setCnpj("");
      setContact("");
      setRating("");

      setlogin("");
      setEmailCorp("");
      setPassword("");
      setDateStart("");

      setStreet("");
      setComplement("");
      setNumber("");
      setCity("");
      setCep("");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };  

  return (
    <div className={style.Rselector} >
      <div className={style.Form} onSubmit={handleSubmit}>
        <div className={`${style.FormGroup} wave-group`} style={{ marginTop: 0 }}>
          <input required type="text" className={`${style.FormField} input`} value={nameCorporateReason} onChange={handleNameChange} />
          <span className={`${style.FormSpanBar} bar`}></span>
          <label className={`${style.FormLabel} label`}>
            <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 0 } as any}> N </label>
            <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 1 } as any}> o </label>
            <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 2 } as any}> m </label> 
            <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 3 } as any}> e </label>
            <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 4, marginLeft: 7 } as any} > d </label>
            <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 5 } as any}> a </label>
            <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 6, marginLeft: 7 } as any} > E </label>
            <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 7 } as any}> m </label>
            <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 8 } as any}> p </label> 
            <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 9 } as any}> r </label>
            <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 10 } as any}> e </label> 
            <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 11 } as any}> s </label>
            <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 12 } as any}> a </label>
          </label>
        </div>

        <div className={`${style.FormGroup} wave-group`}>
          <FormField required type="text" className="input" value={cpf}  onChange={handleCpfChange} />
          <FormSpanBar className="bar"></FormSpanBar>
          <FormLabel className="label">
            <FormSpanChar className="label-char" style={{ "--index": 0 }}> C </FormSpanChar>
            <FormSpanChar className="label-char" style={{ "--index": 1 }}> P </FormSpanChar>
            <FormSpanChar className="label-char" style={{ "--index": 2 }}> F </FormSpanChar>
          </FormLabel>
        </div>

        <div className={`${style.FormGroup} wave-group`}>
          <FormField required type="text" className="input" value={cnh} onChange={handleCnhChange} />
          <FormSpanBar className="bar"></FormSpanBar>
          <FormLabel className="label">
            <FormSpanChar className="label-char" style={{ "--index": 0 }}> C </FormSpanChar>
            <FormSpanChar className="label-char" style={{ "--index": 1 }}> N </FormSpanChar>
            <FormSpanChar className="label-char" style={{ "--index": 2 }}> H </FormSpanChar>
          </FormLabel>
        </div>

        <div className={`${style.FormGroup} wave-group`}>
          <FormField required type="text" className="input" value={emailCorp} onChange={handleEmailChange} />
          <FormSpanBar className="bar"></FormSpanBar>
          <FormLabel className="label">
            <FormSpanChar className="label-char" style={{ "--index": 0 }}> E </FormSpanChar>
            <FormSpanChar className="label-char" style={{ "--index": 1 }}> m </FormSpanChar>
            <FormSpanChar className="label-char" style={{ "--index": 2 }}> a </FormSpanChar>
            <FormSpanChar className="label-char" style={{ "--index": 3 }}> i </FormSpanChar>
            <FormSpanChar className="label-char" style={{ "--index": 4 }}> l </FormSpanChar>
          </FormLabel>
        </div>

        <div className={`${style.FormGroup} wave-group`}>
          <FormField required type="text" className="input" value={confirmEmail} onChange={handleConfirmEmailChange} />
          <FormSpanBar className="bar"></FormSpanBar>
          <FormLabel className="label">
            <FormSpanChar className="label-char" style={{ "--index": 0 }}> C </FormSpanChar>
            <FormSpanChar className="label-char" style={{ "--index": 1 }}> o </FormSpanChar>
            <FormSpanChar className="label-char" style={{ "--index": 2 }}> n </FormSpanChar>
            <FormSpanChar className="label-char" style={{ "--index": 3 }}> f </FormSpanChar>
            <FormSpanChar className="label-char" style={{ "--index": 4 }}> i </FormSpanChar>
            <FormSpanChar className="label-char" style={{ "--index": 5 }}> r </FormSpanChar>
            <FormSpanChar className="label-char" style={{ "--index": 6 }}> m </FormSpanChar>
            <FormSpanChar className="label-char" style={{ "--index": 7 }}> a </FormSpanChar>
            <FormSpanChar className="label-char" style={{ "--index": 8 }}> r </FormSpanChar>
            <FormSpanChar className="label-char" style={{ "--index": 9, marginLeft: 7 }} > E </FormSpanChar>
            <FormSpanChar className="label-char" style={{ "--index": 10 }}> m </FormSpanChar>
            <FormSpanChar className="label-char" style={{ "--index": 11 }}> a </FormSpanChar>
            <FormSpanChar className="label-char" style={{ "--index": 13 }}> i </FormSpanChar>
            <FormSpanChar className="label-char" style={{ "--index": 14 }}> l </FormSpanChar>
          </FormLabel>
        </div>

        <div className={`${style.FormGroup} wave-group`}>
          <FormField
            required
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormSpanBar className="bar"></FormSpanBar>
          <FormLabel className="label">
            <FormSpanChar className="label-char" style={{ "--index": 0 }}>
              S
            </FormSpanChar>
            <FormSpanChar className="label-char" style={{ "--index": 1 }}>
              e
            </FormSpanChar>
            <FormSpanChar className="label-char" style={{ "--index": 2 }}>
              n
            </FormSpanChar>
            <FormSpanChar className="label-char" style={{ "--index": 3 }}>
              h
            </FormSpanChar>
            <FormSpanChar className="label-char" style={{ "--index": 4 }}>
              a
            </FormSpanChar>
          </FormLabel>
        </div>

        <div className={`${style.FormGroup} wave-group`}>
          <FormField
            required
            type="password"
            className="input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <FormSpanBar className="bar"></FormSpanBar>
          <FormLabel className="label">
            <FormSpanChar className="label-char" style={{ "--index": 0 }}>
              C
            </FormSpanChar>
            <FormSpanChar className="label-char" style={{ "--index": 1 }}>
              o
            </FormSpanChar>
            <FormSpanChar className="label-char" style={{ "--index": 2 }}>
              n
            </FormSpanChar>
            <FormSpanChar className="label-char" style={{ "--index": 3 }}>
              f
            </FormSpanChar>
            <FormSpanChar className="label-char" style={{ "--index": 4 }}>
              i
            </FormSpanChar>
            <FormSpanChar className="label-char" style={{ "--index": 5 }}>
              r
            </FormSpanChar>
            <FormSpanChar className="label-char" style={{ "--index": 6 }}>
              m
            </FormSpanChar>
            <FormSpanChar className="label-char" style={{ "--index": 7 }}>
              a
            </FormSpanChar>
            <FormSpanChar className="label-char" style={{ "--index": 8 }}>
              r
            </FormSpanChar>
            <FormSpanChar
              className="label-char"
              style={{ "--index": 9, marginLeft: 7 }}
            >
              S
            </FormSpanChar>
            <FormSpanChar className="label-char" style={{ "--index": 10 }}>
              e
            </FormSpanChar>
            <FormSpanChar className="label-char" style={{ "--index": 11 }}>
              n
            </FormSpanChar>
            <FormSpanChar className="label-char" style={{ "--index": 12 }}>
              h
            </FormSpanChar>
            <FormSpanChar className="label-char" style={{ "--index": 13 }}>
              a
            </FormSpanChar>
          </FormLabel>
        </div>
        <br />
        <Link href="/vehicle" style={{ display: "contents" }}>
          <ButtonRequest
            onClick={handleSubmit}
            type="submit"
            style={{ transform: "translateY(36px)" }}
          >
            <p>Continuar</p>
          </ButtonRequest>
        </Link>
      </div>
    </div>
  );
}
