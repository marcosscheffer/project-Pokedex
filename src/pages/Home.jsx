import React, { Component, useState } from "react";
import Title from '../components/Title'
import Search from "../components/Search";
import Main from "../components/templates/Main";

export default function Home () {

    const [data, setData] = useState('')

    function receiveData(info) {
        setData(info)
    }



    return (
        <React.Fragment>
            <Title text="P O K E D E X" />

            <Search textBtn="GO!" ph="Escreva o nome ou ID do pokemon desejado..." receiveData={receiveData}/>

            <Main dataPokemon={data} />
            
        </React.Fragment>
    )
}
