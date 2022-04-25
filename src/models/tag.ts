export type Tag = {
    id: string
    name: string
    all: boolean
    events: Event[]
}

export type Event = {
    id: string
    // 事件名称
    name: string
    // 是否开启
    open: boolean
}