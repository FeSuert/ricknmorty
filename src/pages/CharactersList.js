import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCharacters } from "../hooks/useCharacters";



export default function CharactersList() {
    let {page} = useParams()
    page = Number(page)
    console.log(page)
    //const [page, setPage] = useState(1)
    const {error, data, loading} = useCharacters(Number(page))
    console.log(error,data,loading)
    if(loading) return <div></div>
    if(error) return <div>Smth went wrong</div>
    return(
        <div className="flex flex-wrap">
            {data.characters.results.map(character => {
                return (
                <div>
                    <Link to={`/character/${character.id}`}>
                        <img src={character.image} alt="character"/>
                        <h2>{character.name}</h2>
                    </Link>
                </div>)
            })}
            {/* <button onClick={() => setPage(prev => prev+1)}>
                Next Page
            </button>
            <button onClick={() => setPage(prev => prev-1)}>
                Previous Page
            </button> */}
            <Link to={`/${page+1}`}>
                <button>
                    Next Page
                </button>
            </Link>
            <Link to={`/${page-1}`}>
                <button>
                    Previous Page
                </button>
            </Link>    
        </div>
    )
}