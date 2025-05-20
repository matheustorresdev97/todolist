import clipboard from '../assets/clipboard.png'

export function Empty() {
    return (
        <div className="py-16 px-4 border-t border-t-gray-400 rounded-lg flex flex-col items-center gap-4 text-gray-300">
            <img src={clipboard} alt="ícone de prancheta" />
            <p className="flex flex-col text-center">
                <strong className="font-bold">Você ainda não tem tarefas cadastradas</strong>
                Crie tarefas e organize seus itens a fazer
            </p>
        </div>
    )
}