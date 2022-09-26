import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCharacters } from "../hooks/useCharacters";



export default function Home() {

    return(
        <div className="flex flex-wrap">
            <Link to={`/1`}>
                All characters
            </Link>
        </div>
    )
}