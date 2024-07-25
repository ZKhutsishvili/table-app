import BooleanComponent from "../components/BooleanComponent";
import ListComponent from "../components/ListComponent";
import NumberComponent from "../components/NumberComponent";
import ReadonlyComponent from "../components/ReadonlyComponent";
import StringComponent from "../components/StringComponent";

const componentMapper = {
    "boolean": BooleanComponent,
    "list": ListComponent,
    "string": StringComponent,
    "number": NumberComponent,
    "readOnly": ReadonlyComponent
}

export default componentMapper