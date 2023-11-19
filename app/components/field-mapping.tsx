import Image from "next/image";
import RiftFieldSelector from "./rift-field-selector";
import TopCrmFieldSelector from "./top-crm-field-selector";
import BottomCrmFieldSelector from "./bottom-crm-field-selector";
import { FieldMap } from "../page";

export default function FieldMapping({ className = '', fieldMap, onChange }: { className: string, fieldMap: FieldMap, onChange: (fieldMap: FieldMap) => void }) {
    return (
        <div className={`flex items-center ${className}`}>
            <div>
                <RiftFieldSelector value={fieldMap.riftField} onChange={(value: string) => onChange({...fieldMap, riftField: value})}/>
            </div>
            <div className="px-2">
                <Image src="/arrows-split.svg" width={20} height={20} alt="Maps to CRM Fields" priority={true} />
            </div>
            <div>
                <TopCrmFieldSelector className="mb-2" value={fieldMap.topCrmField} onChange={(value: string) => onChange({...fieldMap, topCrmField: value})}/>
                <BottomCrmFieldSelector className="mt-2" value={fieldMap.bottomCrmField} onChange={(value: string) => onChange({...fieldMap, bottomCrmField: value})} />
            </div>
        </div>
    )
}