import request from '@/utils/request'

export default {
    sendsms(mobile) {
        return request({
            url: `/user/sendsms/${mobile}`,
            method: "put",
        });
    },
    register(user, code) {
        return request({
            url: `/user/register/${code}`,
            method: "post",
            data: user,
        });
    },
    login(mobile, password) {
        return request({
            url: "/user/login",
            method: "post",
            data: {
                mobile,
                password,
            },
        });
    },
}



