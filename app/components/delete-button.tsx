import Image from "next/image";

interface DeleteButtonProps {
    onDelete: () => void;
}

export default function DeleteButton({ onDelete }: DeleteButtonProps) {
    return (
        <button className="absolute top-1/3 -left-8" onClick={onDelete}>
            <Image className="relative -top-1/4" src="/delete.svg" width={14} height={14} alt="Delete Field Mapping" />
        </button>
    );
}