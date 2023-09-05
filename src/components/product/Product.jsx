import './product.css'

export default function Product({img}) {
  return (
    <div className="p">
      <div className="pBrowser">
        <div className="pCircle"></div>
        <div className="pCircle"></div>
        <div className="pCircle"></div>
      </div>
      {/* <a href="" target="_blank" rel="noreferrer"> */}
        <img src={img} alt="" className="pImg" />
      {/* </a> */}
    </div>
  )
}
