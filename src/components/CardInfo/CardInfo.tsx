import './cardInfo.scss';

type Prop = {
  title: string,
  content: string,
  fnClick: (value: string) => void,
  visibility: boolean;
}

export function CardInfo(p: Prop) {

  function sendValue() {
    p.fnClick(p.title);
  }

  return<div className="card-info" onClick={sendValue}>
    <h1>{p.title}</h1>
    { p.visibility
      ? <span>R$ {p.content}</span>
      : <span className='hidden'>R$ - - - -</span>
    }
  </div>
}