type Props = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>

export function Button({ children, className, ...rest }: Props) {
    return (
        <button
            className={`flex items-center justify-center h-12 p-4 bg-blue-dark text-gray-100 border-0 rounded-lg gap-2 shadow-none underline-[140%] font-bold text-sm transition duration-200 hover:bg-blue -translate-y-1/2 mb-[2.3125rem] ${className || ''}`}
            {...rest}
        >
            {children}
        </button>
    )
}