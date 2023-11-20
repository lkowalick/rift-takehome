import FieldSelector from "./field-selector";

import BottomCrmFields from "../lib/bottom-crm-fields.json";
import { FieldData, Item } from "../lib/constants";

export default function BottomCrmFieldSelector({ className = '', fieldData, onChange }: { className?: string, fieldData: FieldData, onChange: (value: Item) => void }) {
    return <FieldSelector className={className} items={BottomCrmFields} fieldData={fieldData} onChange={onChange} />;
}