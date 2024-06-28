import { GiftItem } from "./GiftItem";
import { useFetchGift } from "../hooks/useFetchGift";

export const GiftGrid = ({category}) => {

  const { images, isLoading } = useFetchGift( category )  

  return (
    <>
        <h3>{ category }</h3>
        {
          isLoading && <h2>Cargando...</h2>
        }
        <ol>
          <div className="card-grid">
            {
              images.map( (img) => (
                <GiftItem 
                  key={ img.id }
                  { ...img }
                />                
              ))
            }
          </div>
        </ol>           
    </>
  )
}