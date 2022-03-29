import React, { useState } from "react";
import Div from "../Div";
import './Main.css'

export default function Main(props) {

    const [pokemon, setPokemon] = useState('')

    fetch(`https://pokeapi.co/api/v2/pokemon/${props.dataPokemon}`)
        .then(res => res.json())
        .then(res => {setPokemon(res)})
        .catch(err => {setPokemon(err)})

    return (
        <main className="container-main">
            <div className="sprite" ><img src={`${pokemon.sprites === undefined ? '' : pokemon.sprites.front_default}`} alt="" /></div>
            <aside className="info">
                <h2>{pokemon.name}</h2>

                <h3>Caracteristicas:</h3>
                <div className="characteristics">
                

                    <Div custom={false} data={pokemon.id} title="ID"/>

                    <Div custom={true} data={pokemon.types?.map(types => <p>{types.type.name}</p>)} title="Tipo"/>

                    <Div custom={false} data={pokemon.weight ? pokemon.weight / 10  + 'kg': ''} title="Peso"/>

                    <Div custom={false} data={pokemon.height ? pokemon.height / 10  + 'm': '' } title="Altura"/>
                </div>

                <h3>Movimentos:</h3>
                
                <Div name="skills" custom={true} data={pokemon.moves?.map(moves => <p>{moves.move.name}</p>)} />

            </aside>
        </main>
    )
}