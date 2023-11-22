import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // autenticação do usuário
  };

  return (
    <div className="container">

      
<form
 
    onSubmit={handleSubmit}>
        
        <input
            
        type="email"       
        placeholder="E-mail"      
        value={email}
            
        onChange={(e) => setEmail(e.target.value)}
                />
                <input

          
        type="password"   
        placeholder="Senha"    
        value={senha}

            
    onChange={(e) => setSenha(e.target.value)}
            />
                <button
        
        type="submit">Entrar</button>
    
</form>

</div>
  );
};

export default Login;