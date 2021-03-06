import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { message } from 'ant-design-vue';


const instance: AxiosInstance = axios.create({
    // baseURL: 'http://localhost:18080/rest/api',
    baseURL: import.meta.env.MODE === 'develop' ? '/mock' : '/',
    timeout: 6000,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    },
});

// axios 实例拦截响应
instance.interceptors.response.use(
    (res: AxiosResponse) => {
        if (res.status === 200) {
            return res;
        } else {
            message.warn(convert(res.status));
            return res;
        }
    },
    // 请求失败
    async (err: any) => {
        const {response} = err;
        if (response) {
            const {code, msg} = response.data
            message.error(`${code}:${msg}`);
            return Promise.reject(response.data);
        }
        message.error(`网络异常`);
        return Promise.reject({code: 500, msg: '网络异常'});
    }
);

const convert = (status: number | string): string => {
    let msg: string;
    switch (status) {
        case 400:
            msg = '请求错误(400)';
            break;
        case 401:
            msg = '未授权，请重新登录(401)';
            break;
        case 403:
            msg = '拒绝访问(403)';
            break;
        case 404:
            msg = '请求出错(404)';
            break;
        case 408:
            msg = '请求超时(408)';
            break;
        case 500:
            msg = '服务器错误(500)';
            break;
        case 501:
            msg = '服务未实现(501)';
            break;
        case 502:
            msg = '网络错误(502)';
            break;
        case 503:
            msg = '服务不可用(503)';
            break;
        case 504:
            msg = '网络超时(504)';
            break;
        case 505:
            msg = 'HTTP版本不受支持(505)';
            break;
        default:
            msg = `系统异常(${status})!`;
    }
    return msg;
};
export default instance;