"use client"
import axios from "axios";
import React, { useState, ChangeEvent } from "react";
import style from "@/styles/Components/register.module.scss";
import Link from "next/link";


export default function Page() {
  const currentDate = new Date();
  // #region const register client
  const [clientId, setClientId] = useState<number | null>(null);
  const [nameCorporateReason, setNameCorporateReason] = useState("");
  const [fantasyName, setFantasyName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [contact, setContact] = useState("");
  const [rating, setRating] = useState("");
  const [selectedEstablishmentType, setSelectedEstablishmentType] = useState<string>('');
  const establishmentTypes = ['Selecione: ','Geral', 'Especializado', 'Urgência e Emergência', 'Clínicas', 'Psiquiátrico', 'Reabilitação', 'Dia',
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
  const [confirmPassword, setConfirmPassword] = useState("");
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

  const handleCepChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const enteredCep = event.target.value;

    const formattedCep = enteredCep.replace(/\D/g, "");

    if (formattedCep.length === 8) {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${formattedCep}/json/`);
        const addressData = response.data;

        setStreet(addressData.logradouro);
        setNumber(addressData.numero || "");
        setComplement(addressData.complemento || "");
        setCity(addressData.localidade);
      } catch (error) {
        console.error("Error fetching address:", error);
      }
    }
    setCep(formattedCep);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const clientData = { nameCorporateReason, fantasyName, cnpj, contact, rating, establishmentType: selectedEstablishmentType };
    const dateStart = currentDate.toLocaleString()
    const accountData = { login, emailCorp, password, dateStart, clientId };
    const addressData = { street, number, complement, city, cep, clientId };
    if (password.length < 8 ){
      alert("A senha deve ter pelo menos 8 caracteres");
      return;
    }
    if (password !== confirmPassword) {
      alert("As senhas não coincidem");
      return;
    }

    try {
     // const responseClient = await axios.post("http://localhost:8080/client", clientData);
        const responseClient = await axios.post("https://api-apollo.onrender.com/client", clientData);
      const RclientId = responseClient.data.id;

     // const responseAccount = await axios.post("http://localhost:8080/account", accountData);
        const responseAccount = await axios.post("https://api-apollo.onrender.com/account", accountData);
      const accountId = responseAccount.data.id;

     // const responseAddress = await axios.post("http://localhost:8080/address", addressData);
        const responseAddress = await axios.post("https://api-apollo.onrender.com/address", addressData);
      const addressId = responseAddress.data.id;

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
    <div className={style.Rselector}>
      <div className={style.Form} onSubmit={handleSubmit}>
        <section className={style.sectionClient} >
          <div className={style.formControl}>
            <input type="text" value={nameCorporateReason} onChange={handleNameCorpChange} required/>
            <label>
              <span style={{ transitionDelay: '0ms' }}>R</span>
              <span style={{ transitionDelay: '50ms' }}>a</span>
              <span style={{ transitionDelay: '100ms' }}>z</span>
              <span style={{ transitionDelay: '150ms' }}>ã</span>
              <span style={{ transitionDelay: '200ms' }}>o</span>
              <span style={{ transitionDelay: '250ms' }}></span>
              <span style={{ transitionDelay: '300ms' }}>S</span>
              <span style={{ transitionDelay: '350ms' }}>o</span>
              <span style={{ transitionDelay: '400ms' }}>c</span>
              <span style={{ transitionDelay: '450ms' }}>i</span>
              <span style={{ transitionDelay: '500ms' }}>a</span>
              <span style={{ transitionDelay: '550ms' }}>l</span>
            </label>
          </div>

          <div className={style.formControl}>
            <input type="text" value={fantasyName} onChange={handleNamefantChange} required/>
            <label>
              <span style={{ transitionDelay: '0ms' }}>N</span>
              <span style={{ transitionDelay: '50ms' }}>o</span>
              <span style={{ transitionDelay: '100ms' }}>m</span>
              <span style={{ transitionDelay: '150ms' }}>e</span>
              <span style={{ transitionDelay: '200ms' }}></span>
              <span style={{ transitionDelay: '250ms' }}>F</span>
              <span style={{ transitionDelay: '300ms' }}>a</span>
              <span style={{ transitionDelay: '350ms' }}>n</span>
              <span style={{ transitionDelay: '400ms' }}>t</span>
              <span style={{ transitionDelay: '450ms' }}>a</span>
              <span style={{ transitionDelay: '500ms' }}>s</span>
              <span style={{ transitionDelay: '550ms' }}>i</span>
              <span style={{ transitionDelay: '600ms' }}>a</span>
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
              <span style={{ transitionDelay: '250ms' }}>t</span>
              <span style={{ transitionDelay: '300ms' }}>o</span>
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
        </section>

        <section className={style.sectionAccount} style={{display: 'none'}}>
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
            <input type="text" value={emailCorp} onChange={(e) => setEmailCorp(e.target.value)} required/>
            <label>
              <span style={{ transitionDelay: '0ms' }}>E</span>
              <span style={{ transitionDelay: '50ms' }}>m</span>
              <span style={{ transitionDelay: '100ms' }}>a</span>
              <span style={{ transitionDelay: '150ms' }}>i</span>
              <span style={{ transitionDelay: '200ms' }}>l</span>
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
          <div className={style.formControl}>
            <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} required/>
            <label>
              <span style={{ transitionDelay: '0ms' }}>C</span>
              <span style={{ transitionDelay: '50ms' }}>o</span>
              <span style={{ transitionDelay: '100ms' }}>n</span>
              <span style={{ transitionDelay: '150ms' }}>f</span>
              <span style={{ transitionDelay: '200ms' }}>i</span>
              <span style={{ transitionDelay: '250ms' }}>r</span>
              <span style={{ transitionDelay: '300ms' }}>m</span>
              <span style={{ transitionDelay: '350ms' }}>a</span>
              <span style={{ transitionDelay: '400ms' }}>r</span>
              <span style={{ transitionDelay: '450ms' }}></span>
              <span style={{ transitionDelay: '500ms' }}>S</span>
              <span style={{ transitionDelay: '550ms' }}>e</span>
              <span style={{ transitionDelay: '600ms' }}>n</span>
              <span style={{ transitionDelay: '650ms' }}>h</span>
              <span style={{ transitionDelay: '700ms' }}>a</span>
            </label>
          </div>
        </section>

        <section className={style.sectionAddress} style={{display: 'none'}}>
          <div className={style.formControl}>
            <input type="text" value={cep} onChange={handleCepChange} required/>
            <label>
              <span style={{ transitionDelay: '0ms' }}>C</span>
              <span style={{ transitionDelay: '50ms' }}>e</span>
              <span style={{ transitionDelay: '100ms' }}>p</span>
            </label>
          </div>
          <div className={style.formControl}>
            <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} required/>
            <label>
              <span style={{ transitionDelay: '0ms' }}>E</span>
              <span style={{ transitionDelay: '50ms' }}>n</span>
              <span style={{ transitionDelay: '100ms' }}>d</span>
              <span style={{ transitionDelay: '150ms' }}>e</span>
              <span style={{ transitionDelay: '200ms' }}>r</span>
              <span style={{ transitionDelay: '250ms' }}>e</span>
              <span style={{ transitionDelay: '300ms' }}>ç</span>
              <span style={{ transitionDelay: '350ms' }}>o</span>
            </label>
          </div>
          <div className={style.formControl}>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required/>
            <label>
              <span style={{ transitionDelay: '0ms' }}>C</span>
              <span style={{ transitionDelay: '50ms' }}>i</span>
              <span style={{ transitionDelay: '100ms' }}>d</span>
              <span style={{ transitionDelay: '150ms' }}>a</span>
              <span style={{ transitionDelay: '200ms' }}>d</span>
              <span style={{ transitionDelay: '250ms' }}>e</span>
            </label>
          </div>  
          <div className={style.formControl}>
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} required/>
            <label>
              <span style={{ transitionDelay: '0ms' }}>N</span>
              <span style={{ transitionDelay: '50ms' }}>u</span>
              <span style={{ transitionDelay: '100ms' }}>m</span>
              <span style={{ transitionDelay: '150ms' }}>e</span>
              <span style={{ transitionDelay: '200ms' }}>r</span>
              <span style={{ transitionDelay: '250ms' }}>o</span>
            </label>
          </div>
          <div className={style.formControl}>
            <input type="text" value={complement} onChange={(e) => setComplement(e.target.value)} required/>
            <label>
              <span style={{ transitionDelay: '0ms' }}>C</span>
              <span style={{ transitionDelay: '50ms' }}>o</span>
              <span style={{ transitionDelay: '100ms' }}>m</span>
              <span style={{ transitionDelay: '150ms' }}>p</span>
              <span style={{ transitionDelay: '200ms' }}>l</span>
              <span style={{ transitionDelay: '250ms' }}>e</span>
              <span style={{ transitionDelay: '300ms' }}>m</span>
              <span style={{ transitionDelay: '350ms' }}>e</span>
              <span style={{ transitionDelay: '400ms' }}>n</span>
              <span style={{ transitionDelay: '450ms' }}>t</span>
              <span style={{ transitionDelay: '500ms' }}>o</span>
            </label>
          </div>
        </section>

        <br />
        
        <Link href="/" style={{ display: "contents" }}>
          <button className={style.ButtonRequest} onClick={handleSubmit} type="submit" style={{ transform: "translateY(36px)", paddingTop: '16px', color: '#dcdcdc'}}>
            <p>Registrar</p>
          </button >
        </Link>
      </div>
    </div>
  );
}