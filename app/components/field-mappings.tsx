import { FieldMap } from "../lib/constants";
import FieldMapping from "./field-mapping"

interface FieldMappingsProps {
    fieldMaps: FieldMap[];
    onChange: (index: number, value: FieldMap) => void;
    onDelete: (index: number) => void;
}

export default function FieldMappings({ fieldMaps, onChange, onDelete }: FieldMappingsProps) {
    const showDelete = fieldMaps.length > 1;

    function handleFieldMappingChange(index: number) {
        return (value: FieldMap) => onChange(index, value);
    }

    function handleFieldMappingDelete(index: number): (() => void) | null {
        if (showDelete) {
            return () => onDelete(index);
        } else {
            return null;
        }
    }

    return (
        fieldMaps.map((fieldMap, i) => <FieldMapping fieldMap={fieldMap} onChange={handleFieldMappingChange(i)} onDelete={handleFieldMappingDelete(i)} key={i} />)
    )
}