
export default function StringComponent({value, id, columnId, onChange, parentId}) {
    return <div className="row">
        <input className="input-without-style m-1" value={value} onChange={(e) => onChange(id, columnId, e.target.value, parentId)}/>
    </div>
}