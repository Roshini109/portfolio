import './productlist.css'
import Product from "../product/Product"
import { products } from '../../data'

export default function Productlist() {
  return (
    <div className="pl">
        <div className="plTxt">
            <h1 className="plTitle">Create & inspire. It's Roshini</h1>
            <p className="plDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Molestias aspernatur maiores at vitae. Facilis recusandae 
                vel accusamus tempora reprehenderit nesciunt et corporis 
                officia! Voluptatibus dolorem aut beatae possimus natus 
                quibusdam.
            </p>
        </div>
        <div className="plList">
            {products.map((item)=>(
              <Product key={item.id} img={item.img} />
            ))}
        </div>
    </div>
  )
}
