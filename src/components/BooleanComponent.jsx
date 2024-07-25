import { Input } from "reactstrap";

export default function BooleanComponent({value, parentId, id, columnId, onChange}) {
    return <div className="row d-flex align-items-center">
        <div className="ml-2">
            <Input type="switch" checked={value} onChange={() => onChange(id, columnId, !value, parentId)}/>
        </div>
    </div>
}