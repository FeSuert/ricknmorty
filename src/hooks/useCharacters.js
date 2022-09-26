import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_CHARACTERS = gql`
    query GetCharacters($page: Int){
        characters(page: $page){
            results {
                id
                name
                image
            }
        }
    }
`

export const useCharacters = (page) => {
    console.log("Here")
    const {error,data,loading} = useQuery(GET_CHARACTERS, {
        variables: {
            page
        }
    })

    return {
        error,
        data,
        loading
    }
}