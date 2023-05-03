import React from 'react'
import './Header.css'

export default function Header({ titulo }) {
  return (
    <div className='container'>{titulo}</div>
  )
}