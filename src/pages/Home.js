import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCharacters } from "../hooks/useCharacters";



export default function Home() {

    return(
        <div className="flex flex-wrap text-center text-6xl font-bold md:flex lg:w-1/2 p-2">
            <Link to={`/1`}>
                <p className="hover:bg-green-700">All characters</p>
            </Link>
        </div>
    )
}