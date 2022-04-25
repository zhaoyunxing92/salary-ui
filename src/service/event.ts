import $http from './axios';
import { EventConfig } from '../models';

export class EventService {
    private static instance: EventService = new EventService()

    static getInstance(): EventService {
        return EventService.instance
    }

    /**
     * 注册事件
     * @constructor
     */
    RegisterEvent(config: EventConfig): Promise<EventConfig> {
        return $http.post('/event/register/', config).then(res => res.data)
    }
}

export function useEventService() {
    return EventService.getInstance();
}