import FieldSelector, { FieldSelectorWithoutOptionsProps } from "./field-selector";

import TopCrmFields from "../lib/top-crm-fields.json";

export default function TopCrmFieldSelector({ fieldData, onChange }: FieldSelectorWithoutOptionsProps) {
    return <FieldSelector items={TopCrmFields} fieldData={fieldData} onChange={onChange} />;
}