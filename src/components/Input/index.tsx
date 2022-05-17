import './index.scss';

type Prop = {
  type: string,
  label: string,
  id: string,
}

export function Input(p: Prop) {
  return(
  <div className='input-area'>
    <input type={p.type}
      placeholder=" "
      id={p.id} />
    <label htmlFor={p.id}>{p.label}</label>
  </div>
  )
}