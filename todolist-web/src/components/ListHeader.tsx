interface Props {
    tasksCounter: number
    checkedTasksCounter: number
}

export function ListHeader({ tasksCounter, checkedTasksCounter }: Props) {
    return (
        <header className="flex flex-1 items-center justify-between">
            <aside className="flex items-center justify-between text-blue gap-x-3">
                <p className="text-sm">Tarefas criadas</p>
                <span className="py-0.5 px-2 rounded-2xl text-[0.75rem] text-gray-200 bg-gray-400">{tasksCounter}</span>
            </aside>

            <aside className="flex items-center justify-between text-purple gap-x-3">
                <p className="text-sm">Concluídas</p>
                <span className="py-0.5 px-2 rounded-2xl text-[0.75rem] text-gray-200 bg-gray-400">
                    {tasksCounter === 0
                        ? tasksCounter
                        : `${checkedTasksCounter} de ${tasksCounter}`}
                </span>
            </aside>
        </header>
    )
}