import { Link } from 'react-router-dom'

export default function BlogCard(props) {
  return (
    <div className="card" style={{width:"18rem"}}>
  <img src={props.image} className="card-img-top, w-300rem" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.desc}</p>
    <Link to={props.link} className="btn btn-primary">read more</Link>
  </div>
  </div>

  )
}
