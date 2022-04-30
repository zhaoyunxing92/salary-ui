import { App } from 'vue';

type Filter = {
    formatType(time: string): string
}

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $filters: Filter
    }
}
export default (app: App) => {
    app.config.globalProperties.$filters = {
        formatType(type: string): string {
            switch (type) {
                case 'string':
                    return '文本'
                case 'number':
                    return '数字'
                case 'date':
                    return '日期'
                default:
                    return '文本'
            }
        }
    }
}