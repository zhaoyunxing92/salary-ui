export type EventConfig = {
    // 企业id
    corpId: string

    // 注册的事件类型
    tags: string[]

    token: string

    // 接收事件回调的url，必须是公网可以访问的url地址。
    url: string

    //数据加密密钥。用于回调数据的加密，长度固定为43个字符，从a-z，A-Z，0-9共62个字符中选取，您可以随机生成，ISV(服务提供商)推荐使用注册套件时填写的EncodingAESKey
    secret: string
}