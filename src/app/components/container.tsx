import { ReactNode } from "react"

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export function Container({ children, className }: ContainerProps) {
    return (
        <div className={`max-w-8xl px-4 lg:px-16 ${className}`}>{children}</div>
    );
}