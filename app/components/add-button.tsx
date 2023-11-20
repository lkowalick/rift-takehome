
interface AddButtonProps {
    onClick: (e: any) => void;
}

export default function AddButton({ onClick }: AddButtonProps) {
    return <button className="rounded-lg border border-solid border-slate-300 py-2 px-5 leading-5 text-sm" type="button" onClick={onClick}>Add</button>
}
