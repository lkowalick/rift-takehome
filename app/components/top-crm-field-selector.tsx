import FieldSelector from "./field-selector";

import TopCrmFields from "../lib/top-crm-fields.json";
import { FieldData, Item } from "../lib/constants";

export default function TopCrmFieldSelector({ fieldData, onChange }: { fieldData: FieldData, onChange: (value: Item) => void, }) {
    return <FieldSelector items={TopCrmFields} fieldData={fieldData} onChange={onChange} />;
}