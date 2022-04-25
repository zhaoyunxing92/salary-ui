export type Response<T> = {
    code: number | string;
    data: T;
    msg: string;
}