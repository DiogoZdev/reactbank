import './cardInfo.scss';

type Prop = {
  title: string,
  content: string,
}

export function CardInfo(p: Prop) {
  return<div className="card-info">
    <h1>{p.title}</h1>
    <span>R$ {p.content}</span>
  </div>
}