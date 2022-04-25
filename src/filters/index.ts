import { App } from 'vue';
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.locale('zh-cn')

type Filter = {
    formatTime(time: number): string
}

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $filters: Filter
    }
}
export default (app: App) => {
    app.config.globalProperties.$filters = {
        formatTime(time: number): string {
            if (time == 0) {
                return ''
            }
            dayjs.extend(relativeTime)
            return dayjs(time).fromNow()
        }
    }
}