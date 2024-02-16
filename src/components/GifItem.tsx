import { stateImages } from "./GifGrid"



// seria igual que poner props:stateImages
export const GifItem = ({ title, url }:stateImages) => {
  return (
    <div className="card">
      <img src={ url } alt="no-image" />
      <p>{ title }</p>
    </div>
  )
}
