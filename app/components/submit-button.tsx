
interface SubmitButtonProps {
    onClick: (e: any) => void;
    disabled: boolean;
}

export default function SubmitButton({ onClick, disabled }: SubmitButtonProps) {
    return <button className="rounded-lg text-white bg-accent py-2 px-12 leading-5 text-sm disabled:bg-slate-300" disabled={disabled} onClick={onClick} type="button">Submit</button>
}
