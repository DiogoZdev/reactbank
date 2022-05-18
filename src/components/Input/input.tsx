import './input.scss';

type Prop = {
  type: string,
  label: string,
  id: string,
  maxLength?: number,
}

export function Input(p: Prop) {
  return(
  <div className='input-area'>
    <input type={p.type}
      placeholder=" "
      maxLength={p.maxLength}
      id={p.id} />
    <label htmlFor={p.id}>{p.label}</label>
  </div>
  )
}