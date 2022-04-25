import $http from './axios';
import { Applet, CreateApplet, SimpleApplet } from '../models';

export class AppletService {
    private static instance: AppletService = new AppletService()

    static getInstance(): AppletService {
        return AppletService.instance
    }

    /**
     * 获取小程序列表
     * @constructor
     */
    List(): Promise<SimpleApplet[]> {
        return $http.post('/applet/list/v1').then(res => res.data)
    }

    /**
     * 保存小程序
     * @param app app
     * @constructor
     */
    Store(app: CreateApplet): Promise<SimpleApplet> {
        return $http.post('/applet/v1', app).then(res => res.data)
    }

    /**
     * 获取小程序详情
     * @param id
     * @constructor
     */
    Detail(id: string): Promise<Applet> {
        return $http.get(`/applet/v1/${id}`).then(res => res.data)
    }

    /**
     * 刷新小程序信息
     * @param id
     * @constructor
     */
    Refresh(id: string): Promise<Applet> {
        return $http.put(`/applet/v1/${id}/refresh`).then(res => res.data)
    }
}

export function useAppletService() {
    return AppletService.getInstance();
}