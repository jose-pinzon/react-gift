import { APIGifphy } from "../Interfaces/ApiGifs"


export  const getGifs = async( category:string ) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=4c0IQjJvlgFWPKj25MtLu8cfeKNfnWQs&q=${ category }&limit=20`
    
    const resp = await fetch( url )
    const { data }:APIGifphy = await resp.json()
    
    const gifs = data.map( img =>({
      id:img.id,
      title:img.title,
      url:img.images.downsized_medium.url
    }))

    return gifs
  }