export interface TaskProps {
    id: number
    description: string
    complete: boolean
    createdAt: string
    completedAt: string | null
}
