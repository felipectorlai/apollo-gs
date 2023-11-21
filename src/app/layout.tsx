'use client'
import React, { useState } from 'react';
import Header from '@/Components/header'
import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import ToggleMode from '@/Components/ToggleMode';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [currentTheme, setCurrentTheme] = useState<'themeDark' | 'themeLight'>('themeDark');

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'themeDark' ? 'themeLight' : 'themeDark');
    document.documentElement.setAttribute('data-theme', currentTheme === 'themeDark' ? 'themeLight' : 'themeDark');
  };
  
  return (
    <html lang="pt-br">
      <body>
        {/* <ToggleMode onClick={toggleTheme}/> */}
        <Header />
        {children}
      </body>
    </html>
  )
}