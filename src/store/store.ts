import { defineStore } from 'pinia';

type salary = {
    // 是否打开滑块
    trigger: boolean;
    // 选中的按钮
    selected: string[]
}
export const useStore = defineStore('salary', {
        state: () => ({trigger: false, selected: []} as salary),
        actions: {
            setSelected(path: string): void {
                this.selected.splice(0, 1, path);
            }
        },
        persist: {
            enabled: true,
            strategies: [
                {
                    key: 'trigger',
                    storage: sessionStorage,
                    paths: ['trigger']
                },
                {
                    key: 'selected',
                    storage: sessionStorage,
                    paths: ['selected']
                }
            ]
        }
    }
)