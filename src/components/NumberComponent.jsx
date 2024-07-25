
export default function NumberComponent({value, id, columnId, onChange, parentId}) {
    return <div className="row">
        <input className="input-without-style m-1" type="number" value={value} onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } onChange={(e) => onChange(id, columnId, e.target.value, parentId)}  />
    </div>
}