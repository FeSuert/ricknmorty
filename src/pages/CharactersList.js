import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCharacters } from "../hooks/useCharacters";



export default function CharactersList() {
    let {page} = useParams()
    page = Number(page)
    console.log(page)
    const {error, data, loading} = useCharacters(Number(page))
    console.log(error,data,loading)
    if(loading) return <div></div>
    if(error) return <div>Smth went wrong</div>
    return(
        <div className="flex flex-wrap">
            {data.characters.results.map(character => {
                return (
                <div className="border border-gray-400 bg-white bg-opacity-30 lg:border-gray-400">
                    <Link to={`/character/${character.id}`}>
                        <img className="p-8 rounded-t-lg" src={character.image} alt="character"/>
                        <h2 className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{character.name}</h2>
                    </Link>
                </div>)
            })}
            <Link to={`/${page+1}`}>
                <button className="mt-32 ml-6 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                    Next Page
                </button>
            </Link>
            <Link to={`/${page-1}`}>
                <button className="mt-32 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                    Previous Page
                </button>
            </Link>    
        </div>
    )
}