import Hello from '../components/hello'

export default function Cart() {
  let 장바구니 = ['Tomatoes', 'Pasta']

  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem 장바구니={장바구니[0]} />
      <CartItem 장바구니={장바구니[1]} />
      <Button color="blue" />
      <Banner content="롯데카드" />
      <Banner content="현대카드" />
    </div>
  )
}
function Button(props) {
  return <button style={{ backgroundColor: props.color }}>결제</button>
}

function Banner(props) {
  return <h5>{props.content} 결제 행사중</h5>
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>상품명 {props.장바구니}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  )
}
