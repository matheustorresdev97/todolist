export function Input({
       className,
    ...rest
}: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>) {
    return (
        <input
            className={`border border-gray-700 rounded-lg bg-gray-500 text-gray-100 h-14 p-4 w-full leading-[140%] placeholder:text-gray-300 focus:border-purple-dark -translate-y-1/2 mb-[2.3125rem] ${className || ''}`}
            placeholder="Adicione uma nova tarefa"
            {...rest}
        />
    )
}