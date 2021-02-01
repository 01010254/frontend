import React from 'react'
import Main from '../template/Main'

import Voter from './Voter'
import Display from '../buttons/Display'

export default props =>
    <Main icon="home" title="Inicio"
        subtitle="Segundo Projeto do capitulo de React">
        <div className="display-4">Bem Vindo!</div>
        <hr />
        <Display value="Nono"/>
        <hr />
        <p className="mb-0 votacao">Votação!</p>
        <Voter value="Rodrigo"/>

        <Voter value="Marcelo"/>

        <Voter value="Dias"/>

    </Main>

