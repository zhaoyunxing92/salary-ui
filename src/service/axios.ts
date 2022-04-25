import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { message } from 'ant-design-vue';
import { useStore } from '../store';
import router from '../router'

const $http: AxiosInstance = axios.create({
    // baseURL: 'http://192.168.10.2:18080/rest/api',
    baseURL: 'http://localhost:18080/rest/api',
    // baseURL: '/mock',
    timeout: 6000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    },
});

// axios 实例拦截响应
$http.interceptors.response.use(
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
            if (code === 401 || code == 403) {
                await router.push({name: 'login'})
            }
            message.error(`${code}:${msg}`);
            return Promise.reject(response.data);
        }
        message.error(`网络异常`);
        return Promise.reject({code: 500, msg: '网络异常'});
    }
);

// axios 实例拦截请求
$http.interceptors.request.use(
    (conf: AxiosRequestConfig) => {
        const store = useStore()
        conf.headers = {
            ...conf.headers,
            token: store.getToken
        }
        return conf;
    },
    (err: any) => {
        return Promise.reject(err);
    }
)

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
export default $http;