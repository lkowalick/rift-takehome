import FieldSelector from "./field-selector";

import RiftFields from '../lib/rift-fields.json';
import { FieldData, Item } from "../lib/constants";

export default function RiftFieldSelector({ fieldData, onChange }: { fieldData: FieldData, onChange: (value: Item) => void }) {
    return <FieldSelector items={RiftFields} fieldData={fieldData} onChange={onChange} />;
}