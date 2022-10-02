import React from "react"
import { useParams } from "react-router"
import { useCharacter } from "../hooks/useCharacter"

export default function Character() {
    const {id} = useParams()
    console.log(id)
    const {error,data,loading} = useCharacter(id)
    console.log(error,data,loading)

    if(error) return <div>Something went wrong</div>
    if(loading) return <div>Spinner</div>
    return(
        <div className="p-10">  
            <div className="w-full lg:max-w-full lg:flex">
                <div className="border border-gray-400 bg-white bg-opacity-30 lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex justify-between leading-normal">
                <div className="h-48 lg:h-auto lg:w-72 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                    <img src={data.character.image} width={750} height={750} alt="character"/>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <div className="font-bold text-xl mb-2 mt-24">
                        <div className="font-bold text-xl mb-2 mt-24">{data.character.name}</div>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{data.character.species}</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{data.character.status}</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{data.character.gender}</span>
                    </div>
                </div>
                <div>
                    <div className="font-bold">Was in Episodes:</div>
                    {data.character.episode.map(episode => {
                    return <div>
                        {episode.name} - <b>{episode.episode}</b>
                    </div>
                    })}
                </div>
                </div>
            </div>
        </div>
    )
}

    // </div>
    //     <div className="flex">
    //         <img src={data.character.image} width={750} height={750} alt="character"/>
    //         <div>
    //             <h1 className="text-gray-700 text-base">{data.character.name}</h1>
    //             <p>{data.character.gender}</p>
    //             <div>
    //                 {data.character.episode.map(episode => {
    //                     return <div>
    //                         {episode.name} - <b>{episode.episode}</b>
    //                     </div>
    //                 })}
    //             </div>
    //         </div>
    //     </div>