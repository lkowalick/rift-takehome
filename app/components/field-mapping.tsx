import Image from "next/image";
import RiftFieldSelector from "./rift-field-selector";
import TopCrmFieldSelector from "./top-crm-field-selector";
import BottomCrmFieldSelector from "./bottom-crm-field-selector";
import { FieldMap, Item } from "../lib/constants";

export default function FieldMapping({ className = '', fieldMap, onChange }: { className: string, fieldMap: FieldMap, onChange: (fieldMap: FieldMap) => void}) {
    function fieldOnChangeHandler(fieldName: 'riftField' | 'bottomCrmField' | 'topCrmField') {
        return (value: Item) => {
            const newField = { ...fieldMap[fieldName], value }
            onChange({ ...fieldMap, [fieldName]: newField })
        }
    }

    return (
        <div className={`flex items-center ${className}`}>
            <div>
                <RiftFieldSelector fieldData={fieldMap.riftField} onChange={fieldOnChangeHandler('riftField')} />
            </div>
            <div className="px-2">
                <Image src="/arrows-split.svg" width={20} height={20} alt="Maps to CRM Fields" priority={true} />
            </div>
            <div>
                <TopCrmFieldSelector className="mb-4" fieldData={fieldMap.topCrmField} onChange={fieldOnChangeHandler('topCrmField')} />
                <BottomCrmFieldSelector fieldData={fieldMap.bottomCrmField} onChange={fieldOnChangeHandler('bottomCrmField')} />
            </div>
        </div>
    )
}