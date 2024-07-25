import { Fragment, useState } from "react";
import componentMapper from "../utils/componentMapper";
import { getColumnWidth, rowContains } from "../utils/tableUtils";
import { Input } from "reactstrap";
import EmptyComponent from "./EmptyComponent";

export default function Table({ columns, data }) {
    const indexedColumns = [
        {
            id: "row-id",
            ordinalNo: 0,
            title: "ID",
            type: "readOnly",
            width: 50
        }, ...columns];
    const [rows, setRows] = useState(data.map((elem, index) => { return { ...elem, "row-id": index + 1 } }));
    const [openColumns, setOpenColumns] = useState(indexedColumns.map(elem => elem.id));
    const [expandedRows, setExpandedRows] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    const updateRow = (id, columnId, value) => {
        setRows(state => {
            const tmp = [...state];
            const index = rows.findIndex(elem => elem.id === id);
            if (index >= 0) {
                tmp[index][columnId] = value;
            }
            localStorage.setItem("data", JSON.stringify(tmp));
            return tmp;
        });
    };

    const updateSubRow = (id, columnId, value, parentId) => {
        setRows(state => {
            const tmp = [...state];
            const parentIndex = tmp.findIndex(elem => elem.id === parentId);
            if (parentIndex >= 0) {
                const index = tmp[parentIndex].subRows?.findIndex(elem => elem.id === id);
                if (index >= 0) {
                    tmp[parentIndex].subRows[index][columnId] = value;
                }
            }
            localStorage.setItem("data", JSON.stringify(tmp));
            return tmp;
        });
    };

    const handleColumnFilter = (id) => {
        setOpenColumns(state => {
            const tmp = [...state];
            return tmp.includes(id) ? tmp.filter(elem => elem !== id) : [...tmp, id];
        });
    };

    const handleExpandRow = (id) => {
        setExpandedRows(state => {
            const tmp = [...state];
            return tmp.includes(id) ? tmp.filter(elem => elem !== id) : [...tmp, id];
        });
    };

    return (
        <div>
            <div className="m-1 row align-items-center">
                <input className="m-2 fit-content" placeholder="search" onChange={e => setSearchValue(e.target.value)} />
                {columns?.map(column => {
                    return (
                        <div className="m-1 fit-content" key={column.id}>
                            <Input type="checkbox" checked={openColumns.includes(column.id)} onChange={() => handleColumnFilter(column.id)} /> {column.title}
                        </div>
                    );
                })}
            </div>
            <table className="table m-0 p-0 custom-table">
                <thead>
                    <tr>
                        {indexedColumns?.map(column => {
                            if (openColumns.includes(column.id)) {
                                return (
                                    <th key={column.id} style={{ width: `${getColumnWidth(indexedColumns.filter(elem => openColumns.includes(elem.id)), column)}%` }}>
                                        {column.title}
                                    </th>
                                );
                            }
                            return null;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {rows?.map(row => {
                        if (rowContains(row, searchValue)) {
                            return (
                                <Fragment key={row.id}>
                                    <tr >
                                        {indexedColumns?.map(column => {
                                            if (openColumns.includes(column.id)) {
                                                const Component = componentMapper[column.type];
                                                return (
                                                    <td key={column.id}>
                                                        <Component
                                                       
                                                        onClick={() => handleExpandRow(row.id)}
                                                            isExpanded={expandedRows.includes(row.id)}
                                                            subRows={row.subRows}
                                                            value={row[column.id]}
                                                            id={row.id}
                                                            columnId={column.id}
                                                            onChange={updateRow}
                                                        />
                                                    </td>
                                                );
                                            }
                                            return null;
                                        })}
                                    </tr>
                                    {expandedRows.includes(row.id) && row.subRows?.map(subRow => {
                                        return (
                                            <tr key={`subrow-${subRow.id}`} >
                                                {indexedColumns?.map(column => {
                                                    if (openColumns.includes(column.id) && column.id !== "row-id" && rowContains(subRow, searchValue)) {
                                                        const Component = componentMapper[column.type];
                                                        return (
                                                            <td key={column.id} >
                                                                <Component
                                                                    value={subRow[column.id]}
                                                                    parentId={row.id}
                                                                    id={subRow.id}
                                                                    columnId={column.id}
                                                                    onChange={updateSubRow}
                                                                />
                                                            </td>
                                                        );
                                                    } else if (column.id === "row-id") {
                                                        return <td key={column.id} className=" border-left"><EmptyComponent /></td>;
                                                    }
                                                    return null
                                                })}
                                            </tr>
                                        );
                                    })}
                                </Fragment>
                            );
                        }
                        return null;
                    })}
                </tbody>
            </table>
        </div>
    );
}
