import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

import "./styles.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    classes?: string;
}

export function Button({ classes = '', ...props }: ButtonProps) {
    return (
        <button
            className={classNames(`search-button ${classes}`)}
            {...props}
        >
            {props.children}
        </button>
    )
}