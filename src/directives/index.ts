import type { App, DirectiveBinding } from 'vue'
import { message } from 'ant-design-vue';

export default (app: App) => {
    // copy directive
    app.directive('copy', {
        updated: (el: HTMLElement, {value}: DirectiveBinding) => {
            el.onclick = async () => {
                try {
                    await navigator.clipboard.writeText(value);
                    message.success(`${value} 复制成功`);
                } catch (err) {
                    message.error(`${value} 复制失败`);
                }
            }
        }
    })
}