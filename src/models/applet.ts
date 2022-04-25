export type Applet = {
    id: string
    // 小程序名称
    name: string

    // 小程序agentId
    agentId: number | null

    corpId: string

    createTime: number| null

    desc: string

    icon: string

    key: string

    modifyTime: number| null

    homePageLink: string

    ompLink: string

    pcHomePageLink: string

    self: boolean

    status: number | null
}
export type SimpleApplet = {
    corpId?: string

    name?: string

    icon?: string

    key?: string
}

export type CreateApplet = {
    corpId: string;

    // 小程序agentId
    agentId: number | null;

    // 小程序key
    key: string;

    //小程序秘钥
    secret: string;
}