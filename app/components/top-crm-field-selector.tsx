import FieldSelector from "./field-selector";

import TopCrmFields from "../lib/top-crm-fields.json";
import { FieldData, Item } from "../lib/constants";

export default function TopCrmFieldSelector({ className = '', fieldData, onChange }: { className?: string, fieldData: FieldData, onChange: (value: Item) => void, }) {
    return <FieldSelector className={className} items={TopCrmFields} fieldData={fieldData} onChange={onChange} />;
}