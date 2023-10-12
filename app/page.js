import Link from 'next/link'

export default function Home() {
  let name = 'park'
  let link = '/list'

  return (
    <div>
      <div className="container">
        <h4 className="title"> 애플후레시</h4>
        <p className="title-sub"> by dev {name}</p>
      </div>
    </div>
  )
}
