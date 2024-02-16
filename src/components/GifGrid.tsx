
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem }  from "./GifItem"



interface category {
    category:string
}

export interface stateImages{
    id: string; 
    title: string;
    url: string; 
}


export const GifGrid = ({ category }:category) =>  {

  const {images, isLoading } = useFetchGifs( category )



  return (
    <>
        <h3>{ category }</h3>
        {
          isLoading && <h1>Cargando...</h1> 
        }

        <div className="card-grid">
          {
            images.map( image => (
                  <GifItem  
                      key={ image.id } 
                      {...image }/>
              ))  
          } 
        </div>
    </>
  )
}
