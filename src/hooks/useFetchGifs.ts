import { useEffect, useState } from "react";
import { stateImages } from "../components/GifGrid";
import { getGifs } from "../Helpers/getGifs";

export const useFetchGifs = (category:string) => {

    const [images, setImages] = useState<stateImages[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getGifs( category)
                .then( images => setImages( images )) 
        setIsLoading( false )
    },[]) 


    return{
        images,
        isLoading
    }

}
