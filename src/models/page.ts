export type Page<T> = {
    page: number
    data: T
    total: number
}

export type ListReq = {
    search: string
    page: number
    size: number
}