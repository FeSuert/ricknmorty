import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCharacters } from "../hooks/useCharacters";



export default function CharactersList() {
    //const {page} = useParams()
    const {error, data, loading} = useCharacters(1)
    console.log(error,data,loading)
    if(loading) return <div></div>
    if(error) return <div>Smth went wrong</div>
    return(
        <div className="flex flex-wrap">
            {data.characters.results.map(character => {
                return (
                <div>
                    <Link to={`/${character.id}`}>
                        <img src={character.image} alt="character"/>
                        <h2>{character.name}</h2>
                    </Link>
                </div>)
            })}
            {/* <Link to={`/${page}`}>
                <button>
                    Next Page
                </button>
            </Link>
            <Link to={`/${page}`}>
                <button>
                    Previous Page
                </button>
            </Link>     */}
        </div>
    )
}