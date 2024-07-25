import { FaMinus, FaPlus } from "react-icons/fa";

export default function ReadonlyComponent({value, columnId, subRows, onClick, isExpanded}) {
    return <div className="row  align-items-center">
        <div className="fit-content">{value}</div>
        {columnId === "row-id" && subRows && <div className="m-0 p-0 fit-content cursor-pointer" onClick={onClick}>{isExpanded ? <FaMinus  size={12}/> : <FaPlus size={12}/>}</div>}
    </div>
}