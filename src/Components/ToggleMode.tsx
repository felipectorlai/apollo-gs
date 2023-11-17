import React from 'react'
import style from '@/styles/components/toggle.module.scss'

export default function ToggleMode({ onClick }: { onClick: () => void }) {
  return (
        <label className={style.switch} onClick={onClick}>
            <input type={style.checkbox}/>
            <span className={style.slider}></span>
        </label>
    )
}