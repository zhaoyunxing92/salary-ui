import $http from './axios';
import { Login, Auth } from '../models';

export class UserService {
    private static instance: UserService = new UserService()

    static getInstance(): UserService {
        return UserService.instance
    }

    /**
     * 登录
     * @constructor
     */
    Login(req: Login): Promise<Auth> {
        return $http.post('/user/v1/login', req).then(res => res.data)
    }
}

export function useUserService() {
    return UserService.getInstance();
}