import React from "react"
import { useParams } from "react-router"
import { useCharacter } from "../hooks/useCharacter"

export default function Character() {
    const {id} = useParams()
    const {error,data,loading} = useCharacter(id)
    console.log(error,data,loading)

    if(error) return <div>Something went wrong</div>
    if(loading) return <div>Spinner</div>
    return(
        <div className="flex">
            <img src={data.character.image} width={750} height={750} alt="character"/>
            <div>
                <h1>{data.character.name}</h1>
                <p>{data.character.gender}</p>
                <div>
                    {data.character.episode.map(episode => {
                        return <div>
                            {episode.name} - <b>{episode.episode}</b>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}