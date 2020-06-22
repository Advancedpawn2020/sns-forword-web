import request from '@/utils/request';


export default {
    getLabelByPage(page, size) {
        return request({
            url: `label/search/${page}/${size}`,
            method: "post",
        });
    },
    hotLabel() {
        return request({
            url: "label/toplist",
            method: "get",
        });
    },
}


