import FieldSelector from "./field-selector";

import RiftFields from '../lib/rift-fields.json';
import { FieldData, Item } from "../lib/constants";

export default function RiftFieldSelector({ className = '', fieldData, onChange }: { className?: string, fieldData: FieldData, onChange: (value: Item) => void }) {
    return <FieldSelector className={className} items={RiftFields} fieldData={fieldData} onChange={onChange} />;
}