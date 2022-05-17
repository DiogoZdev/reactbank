import './index.scss';

type Props = {
    type: string,
    text: string,
    func: () => void,
}

export function Button(p: Props) {
    return(
        <button
        onClick={p.func}
        className={p.type}>
            {p.text}
        </button>
    )
}