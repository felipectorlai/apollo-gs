"use client"
import axios from "axios";
import React, { useState, ChangeEvent } from "react";
import style from "@/styles/Components/register.module.scss";
import Link from "next/link";

export default function Page() {
  // #region const register client
  const [clientId, setClientId] = useState<number | null>(null);
  const [nameCorporateReason, setNameCorporateReason] = useState("");
  const [fantasyName, setFantasyName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [contact, setContact] = useState("");
  const [rating, setRating] = useState("");
  const [selectedEstablishmentType, setSelectedEstablishmentType] = useState<string>('');
  const establishmentTypes = ['Geral', 'Especializado', 'Urgência e Emergência', 'Clínicas', 'Psiquiátrico', 'Reabilitação', 'Dia',
    'público', 'privado', 'filantrópico', 'conveniado', 'urbano', 'rural', 'Estadual', 'Federal', 'Municipal'
  ];



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

 
  const handleNameCorpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameCorporateReason(e.target.value);
  };
  const handleNamefantChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFantasyName(e.target.value);
  };

  const handleCnpjChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCnpj = event.target.value.replace(/\D/g, "");

    if (newCnpj.length <= 14) {
      setCnpj(newCnpj);
    }
  };

  const handleContactChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newContact = event.target.value.replace(/\D/g, "");

    if (newContact.length <= 12) {
      setContact(newContact);
    }
  };

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputRating = event.target.value.replace(/\D/g, "");

    if (inputRating.length <= 1) {
      setRating(inputRating);
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


    const clientData = { nameCorporateReason, fantasyName, cnpj, contact, rating, establishmentType: selectedEstablishmentType, };
    const accountData = { login, emailCorp, cnpj, password, dateStart, clientId};
    const addressData = { street, number, complement, city, cep, clientId};

    try {
      const responseClient = await axios.post("http://localhost:8080/client", clientData);
      const RclientId = responseClient.data.id;
      //const responseAccount = await axios.post("http://localhost:8080/account", accountData);
      //const accountId = responseAccount.data.id;
      //const responseAddress = await axios.post("http://localhost:8080/address", addressData);
      //const addressId = responseAddress.data.id;

      setClientId(RclientId);
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
        <div className={style.registerClient}>
          <div className={style.formControl}>
            <input type="text" value={nameCorporateReason} onChange={handleNameCorpChange} required/>
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
            <input type="text" value={fantasyName} onChange={handleNamefantChange} required/>
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
            <input type="text" value={cnpj} onChange={handleCnpjChange} required/>
            <label>
              <span style={{ transitionDelay: '0ms' }}>C</span>
              <span style={{ transitionDelay: '50ms' }}>n</span>
              <span style={{ transitionDelay: '100ms' }}>p</span>
              <span style={{ transitionDelay: '150ms' }}>j</span>
            </label>
          </div>

          <div className={style.formControl}>
            <input type="text" value={contact} onChange={handleContactChange} required/>
            <label>
              <span style={{ transitionDelay: '0ms' }}>C</span>
              <span style={{ transitionDelay: '50ms' }}>o</span>
              <span style={{ transitionDelay: '100ms' }}>n</span>
              <span style={{ transitionDelay: '150ms' }}>t</span>
              <span style={{ transitionDelay: '200ms' }}>a</span>
              <span style={{ transitionDelay: '250ms' }}>c</span>
              <span style={{ transitionDelay: '300ms' }}>t</span>
            </label>
          </div>

          <div className={style.formControl}>
            <input type="text" value={rating} onChange={handleRatingChange} required/>
            <label>
              <span style={{ transitionDelay: '0ms' }}>R</span>
              <span style={{ transitionDelay: '50ms' }}>a</span>
              <span style={{ transitionDelay: '100ms' }}>t</span>
              <span style={{ transitionDelay: '150ms' }}>i</span>
              <span style={{ transitionDelay: '200ms' }}>n</span>
              <span style={{ transitionDelay: '250ms' }}>g</span>
            </label>
          </div>

          <select className={style.comboBoxClient} value={selectedEstablishmentType} onChange={(e) => setSelectedEstablishmentType(e.target.value)}>
            {establishmentTypes.map((establishmentType, index) => (
                <option key={index} value={establishmentType}>{establishmentType}</option>
            ))}
          </select>
        </div>




        <div className={style.registerClient}>
          {/*<div className={`${style.FormGroup} wave-group`}>
            <input required type="text" className={`${style.FormField} input`} value={emailCorp} onChange={handleEmailChange} />
            <span className={`${style.FormSpanBar} bar`}></span>
            <label className={`${style.FormLabel} label`}>
              <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 0 } as any}> E </label>
              <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 1 } as any}> m </label>
              <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 2 } as any}> a </label>
              <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 3 } as any}> i </label>
              <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 4 } as any}> l </label>
            </label>
          </div>

          <div className={`${style.FormGroup} wave-group`}>
            <input required type="text" className={`${style.FormField} input`} value={confirmEmail} onChange={handleConfirmEmailChange} />
            <span className={`${style.FormSpanBar} bar`}></span>
            <label className={`${style.FormLabel} label`}>
              <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 0 } as any}> C </label>
              <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 1 } as any}> o </label>
              <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 2 } as any}> n </label>
              <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 3 } as any}> f </label>
              <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 4 } as any}> i </label>
              <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 5 } as any}> r </label>
              <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 6 } as any}> m </label>
              <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 7 } as any}> a </label>
              <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 8 } as any}> r </label>
              <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 9, marginLeft: 7 } as any} > E </label>
              <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 10 } as any}> m </label>
              <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 11 } as any}> a </label>
              <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 13 } as any}> i </label>
              <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 14 } as any}> l </label>
            </label>
          </div>

          <div className={`${style.FormGroup} wave-group`}>
            <input required type="password" className={`${style.FormField} input`} value={password} onChange={(e) => setPassword(e.target.value)} />
            <span className={`${style.FormSpanBar} bar`}></span>
            <label className={`${style.FormLabel} label`}>
              <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 0 } as any}> S </label>
              <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 1 } as any}> e </label>
              <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 2 } as any}> n </label>
              <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 3 } as any}> h </label>
              <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 4 } as any}> a </label>
            </label>
          </div>

          <div className={`${style.FormGroup} wave-group`}>
            <FormField required type="password" className="input" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <span className={`${style.FormSpanBar} bar`}></span>
            <label className={`${style.FormLabel} label`}>
              <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 0 } as any}> C </label>
              <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 1 } as any}> o </label>
              <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 2 } as any}> n </label>
              <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 3 } as any}> f </label>
              <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 4 } as any}> i </label>
              <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 5 } as any}> r </label>
              <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 6 } as any}> m </label>
              <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 7 } as any}> a </label>
              <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 8 } as any}> r </label>
              <label className={`${style.FormSpanChar} label-char`}  style={{ "--index": 9, marginLeft: 7 } as any} > S </label>
              <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 10 } as any}> e </label>
              <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 11 } as any}> n </label>
              <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 12 } as any}> h </label>
              <label className={`${style.FormSpanChar} label-char`} style={{ "--index": 13 } as any}> a </label>
            </label>
          </div>*/}
        </div>


        <div className={style.registerAddress}>
        </div>
        <br />
        <button className={style.ButtonCont}>Continuar</button>
        <Link href="/" style={{ display: "contents" }}>
          <button className={style.ButtonRequest} onClick={handleSubmit} type="submit" style={{ transform: "translateY(36px)" }} >
            <p>Registrar</p>
          </button >
        </Link>
      </div>
    </div>
  );
}