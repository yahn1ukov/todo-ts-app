export interface Todo {
    id: number,
    text: string,
    date: Date
}

export interface CreateTodoFormValues {
    text: string
}

export interface ChangeTodoFormValues {
    text: string
}