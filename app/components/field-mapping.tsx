import Image from "next/image";
import RiftFieldSelector from "./rift-field-selector";
import TopCrmFieldSelector from "./top-crm-field-selector";
import BottomCrmFieldSelector from "./bottom-crm-field-selector";

export default function FieldMapping() {
    return (
        <div className="flex items-center my-3">
            <div>
                <RiftFieldSelector />
            </div>
            <div className="px-2">
                <Image src="/arrows-split.svg" width={20} height={20} alt="Maps to CRM Fields" />
            </div>
            <div>
                <TopCrmFieldSelector className="mb-2"/>
                <BottomCrmFieldSelector className="mt-2" />
            </div>
        </div>
    )
}