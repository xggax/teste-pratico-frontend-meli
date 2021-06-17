import { InputHTMLAttributes } from "react";

import "./styles.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    children?: React.ReactNode;
}

export function Input(props: InputProps) {
    return <input {...props} />
}