import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Lima'>
        <Member name='Bruno' />
        <Member name='Leticia' />
        <Member name='Bianca' />
        <Member name='Matheus' />
    </Family>    
, document.getElementById('app'))