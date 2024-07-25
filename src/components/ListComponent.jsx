import { Badge } from "reactstrap"

export default function ListComponent({value, id, columnId, onChange, parentId}) {
    return <div className="row row-component overflow-auto m-1">
        {value?.map((elem, index) => {
            return <Badge className="fit-content m-1 d-flex" key={index}>
                <input className="input-without-style bg-secondary text-white m-1" value={elem} onChange={(e) => {
                    const tmp = [...value]
                    tmp[index] = e.target.value
                    onChange(id, columnId, tmp, parentId)
                }}></input>
                <div className="cursor-pointer m-1" onClick={() => onChange(id, columnId, value.filter((curr, i) => i !== index), parentId)}>x</div>
            </Badge>
        })}
        <Badge className="fit-content m-1 d-flex">
            <div className="cursor-pointer m-1" onClick={() => onChange(id, columnId, [...value, ""], parentId)}>+</div>
        </Badge>
    </div>
}