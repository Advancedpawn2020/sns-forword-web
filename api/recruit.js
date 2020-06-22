import request from '@/utils/request'

export default {
    getListByPagination(page, size, searchMap) {
        return request({
            url: `/recruit/search/${page}/${size}`,
            method: "post",
            data: searchMap,
        });
    },
    getById(id) {
        return request({
            url: `/recruit/${id}`,
            method: "get",
        });
    },
    saveEnterprise(pojo) {
        return request({
            url: "/recruit",
            method: "post",
            data: pojo,
        });
    },
    updateById(id, pojo) {
        if (id === null || id === '') {
            return this.saveEnterprise(pojo)
        }
        return request({
            url: `/recruit/${id}`,
            method: "put",
            data: pojo,
        });
    },
    deleteById(id) {
        return request({
            url: `/enterprise/${id}`,
            method: "delete",
        });
    },
    recommand() {
        return request({
            url: "recruit/search/recommand",
            method: "get",
        });
    },
    newlist() {
        return request({
            url: "recruit/search/newlist",
            method: "get",
        });
    },
}
