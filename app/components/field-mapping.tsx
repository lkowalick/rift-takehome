import FieldSelector from "./field-selector";
import Image from "next/image";

export default function FieldMapping() {
    return (
        <div className="flex items-center">
            <div>
                <FieldSelector />
            </div>
            <div>
                <Image src="/arrows-split.svg" width={20} height={20} alt="Maps to CRM Fields" />
            </div>
            <div>
                <FieldSelector />
                <FieldSelector />
            </div>
        </div>
    )
}