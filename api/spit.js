import request from '@/utils/request';

export default {
    getListByPagination(currentPage, pageSize, searchMap) {
        return request({
            url: `/spit/search/${currentPage}/${pageSize}`,
            method: "post",
            data: searchMap,
        });
    },
    getById(id) {
        return request({
            url: `/spit/${id}`,
            method: "get",
        });
    },
    commentList(id) {
        return request({
            url:`/spit/commentlist/${id}`,
            method: "get",
        });
    },
    thumbup(id) {
        return request({
            url: `/spit/thumbup/${id}`,
            method: "put",
        });
    },
    save(pojo) {
        return request({
            url: "/spit",
            method: "post",
            data: pojo
        });
    },
}

