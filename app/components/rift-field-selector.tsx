import FieldSelector, { FieldSelectorWithoutOptionsProps } from "./field-selector";

import RiftFields from '../lib/rift-fields.json';

export default function RiftFieldSelector({ fieldData, onChange }: FieldSelectorWithoutOptionsProps) {
    return <FieldSelector items={RiftFields} fieldData={fieldData} onChange={onChange} />;
}
