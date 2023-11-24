import React from 'react'

const Custom404 = () => {
  return (
    <div>
      <h1>404 - Página não encontrada</h1>
      <p>
        Parece que a página que você está procurando não existe!.{' '}
        <Link href="/">
          <a>Volte para a página inicial</a>
        </Link>
        .
      </p>
    </div>
  );
};

export default Custom404;
