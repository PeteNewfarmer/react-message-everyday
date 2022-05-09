export interface ButtonProps {
    children?: any
    onClick(): void
    type?: "primary" | "default"
    className?: string
}