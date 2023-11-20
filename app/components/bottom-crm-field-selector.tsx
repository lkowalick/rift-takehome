import FieldSelector, { FieldSelectorWithoutOptionsProps } from "./field-selector";

import BottomCrmFields from "../lib/bottom-crm-fields.json";

export default function BottomCrmFieldSelector({ fieldData, onChange }: FieldSelectorWithoutOptionsProps) {
    return <FieldSelector items={BottomCrmFields} fieldData={fieldData} onChange={onChange} />;
}
