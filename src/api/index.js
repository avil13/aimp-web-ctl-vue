import { VK } from './resources';

function getResponce(res) {
    return res.data;
}

export const vk = {
    user(id) {
        const data = Object.assign({}, {
            user_ids: id,
            fields: 'photo_50'
        });
        return VK.user({}, data).then(getResponce);
    },
    friends(id) {
        const data = Object.assign({}, {
            user_id: id,
            fields: 'photo_50'
        });
        return VK.friends({}, data).then(getResponce);
    }
};
