import { notification } from 'ant-design-vue';
import { stringifyQuery } from 'vue-router';

export const successNotify = (message: string) => {
    notification.success({
        message: message,
        placement: 'topRight',
        top: '30px',
    })
}

export const errorNotify = (message: string) => {
    notification.error({
        message: message,
        placement: 'topRight',
        top: '30px',
    })
}

export const warnNotify = (message: string) => {
    notification.error({
        message: message,
        placement: 'topRight',
        top: '30px',
    })
}