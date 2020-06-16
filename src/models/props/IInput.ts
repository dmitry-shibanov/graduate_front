interface IInput {
    onChange: (id: string, value: string, files?: FileList | null) => void;
    onBlur: (event: React.FocusEvent) => void;
    placeholder?: string | undefined;
    value: string | number | string[] | undefined;
    required?: boolean;
    id: string;
    label?: string
    rows?: number;
    type?: string;
    control: string | undefined;
    valid: boolean;
    touched: boolean;
}

export default IInput;