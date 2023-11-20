import FieldSelector from "./field-selector";

import BottomCrmFields from "../lib/bottom-crm-fields.json";
import { FieldData, Item } from "../lib/constants";

export default function BottomCrmFieldSelector({ fieldData, onChange }: { fieldData: FieldData, onChange: (value: Item) => void }) {
    return <FieldSelector items={BottomCrmFields} fieldData={fieldData} onChange={onChange} />;
}