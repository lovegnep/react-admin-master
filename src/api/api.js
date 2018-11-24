import Server from './server';

const apihead = 'http://localhost:3000/gm/';

class API extends Server {

    async register(params = {}) {
        try {
            const url = apihead+'register';
            let result = await this.axios('post', url, params);
            if (result && result.status === 0) {
                return result;
            } else {
                let err = {
                    tip: '注册失败',
                    response: result,
                    data: params,
                    url,
                }
                throw err;
            }
        } catch (err) {
            throw err;
        }

    }
    async login(params = {}) {
        try {
            const url = apihead+'login';
            let result = await this.axios('post', url, params);
            if (result) {
                return result;
            } else {
                let err = {
                    tip: '登陆失败',
                    response: result,
                    data: params,
                    url,
                }
                throw err;
            }
        } catch (err) {
            throw err;
        }

    }

    async uploadCourse(params = {}) {
        const url = apihead+'course/upload';
        try {

            let result = await this.axios('post', url, params);
            if (result) {
                return result;
            } else {
                let err = {
                    tip: '上传教材失败',
                    response: result,
                    data: params,
                    url,
                }
                throw err;
            }
        } catch (err) {
            throw err;
        }

    }
    async editCourse(params = {}) {
        const url = apihead+'course/edit';
        try {

            let result = await this.axios('post', url, params);
            if (result) {
                return result;
            } else {
                let err = {
                    tip: '编辑教材失败',
                    response: result,
                    data: params,
                    url,
                }
                throw err;
            }
        } catch (err) {
            throw err;
        }

    }
    async operateCourse(params = {}) {
        const url = apihead+'course/operate';
        try {

            let result = await this.axios('post', url, params);
            if (result) {
                return result;
            } else {
                let err = {
                    tip: '操作教材失败',
                    response: result,
                    data: params,
                    url,
                }
                throw err;
            }
        } catch (err) {
            throw err;
        }

    }
    async listCourse(params = {}) {
        const url = apihead+'course/list';
        try {

            let result = await this.axios('post', url, params);
            if (result) {
                return result;
            } else {
                let err = {
                    tip: '获取教材列表失败',
                    response: result,
                    data: params,
                    url,
                }
                throw err;
            }
        } catch (err) {
            throw err;
        }

    }

}

export default new API();
