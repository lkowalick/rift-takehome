import Image from "next/image";
import RiftFieldSelector from "./rift-field-selector";
import TopCrmFieldSelector from "./top-crm-field-selector";
import BottomCrmFieldSelector from "./bottom-crm-field-selector";
import { FieldMap, FieldNames, Item } from "../lib/constants";
import DeleteButton from "./delete-button";

interface FieldMappingProps {
    fieldMap: FieldMap;
    onChange: (fieldMap: FieldMap) => void;
    onDelete: (() => void) | null;
}

export default function FieldMapping({ fieldMap, onChange, onDelete }: FieldMappingProps) {
    function fieldOnChangeHandler(fieldName: FieldNames) {
        return (value: Item) => {
            const newField = { ...fieldMap[fieldName], value }
            onChange({ ...fieldMap, [fieldName]: newField })
        }
    }

    return (
        <div className="col-span-3">
            <div className="grid grid-cols-layout items-center gap-2">
                <div className="relative">
                    {onDelete ? <DeleteButton onDelete={onDelete} /> : null}
                    <RiftFieldSelector fieldData={fieldMap.riftField} onChange={fieldOnChangeHandler('riftField')} />
                </div>
                <div className="center">
                    <Image src="/arrows-split.svg" width={20} height={20} alt="Maps to CRM Fields" priority={true} />
                </div>
                <div className="flex flex-col gap-2">
                    <TopCrmFieldSelector fieldData={fieldMap.topCrmField} onChange={fieldOnChangeHandler('topCrmField')} />
                    <BottomCrmFieldSelector fieldData={fieldMap.bottomCrmField} onChange={fieldOnChangeHandler('bottomCrmField')} />
                </div>
            </div>
        </div>
    )
}