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

    async addNewTheme(params = {}) {
        try {
            let result = await this.axios('post', apihead+'newtheme', params);
            if (result && result.status === 1) {
                return result;
            } else {
                let err = {
                    tip: '新建文章失败',
                    response: result,
                    data: params,
                    url: apihead+'theme/newtheme',
                }
                throw err;
            }
        } catch (err) {
            throw err;
        }

    }
    async deleTheme(params = {}) {
        try {
            let result = await this.axios('post', apihead+'theme/'+params._id+'/delete', params);
            if (result && result.status === 1) {
                return result;
            } else {
                let err = {
                    tip: '删除文章失败',
                    response: result,
                    data: params,
                    url: apihead+'theme/'+params._id+'/delete',
                }
                throw err;
            }
        } catch (err) {
            throw err;
        }

    }
    async editTheme(params = {}) {
        try {
            let result = await this.axios('post', apihead+'theme/'+params._id+'/edit', params);
            if (result && result.status === 1) {
                return result;
            } else {
                let err = {
                    tip: '修改文章失败',
                    response: result,
                    data: params,
                    url: apihead+'theme/'+params._id+'/edit',
                }
                throw err;
            }
        } catch (err) {
            throw err;
        }

    }
    async secretTheme(params = {}) {
        try {
            let result = await this.axios('post', apihead+'theme/'+params._id+'/addsecret', params);
            if (result && result.status === 1) {
                return result;
            } else {
                let err = {
                    tip: '隐藏文章失败',
                    response: result,
                    data: params,
                    url: apihead+'theme/'+params._id+'/addsecret',
                }
                throw err;
            }
        } catch (err) {
            throw err;
        }

    }
    async unsecretTheme(params = {}) {
        try {
            let result = await this.axios('post', apihead+'theme/'+params._id+'/delesecret', params);
            if (result && result.status === 1) {
                return result;
            } else {
                let err = {
                    tip: '取消隐藏文章失败',
                    response: result,
                    data: params,
                    url: apihead+'theme/'+params._id+'/delesecret',
                }
                throw err;
            }
        } catch (err) {
            throw err;
        }

    }
    async addReply(params = {}) {
        try {
            let result = await this.axios('post', apihead+'theme/'+params._id+'/reply', params);
            if (result && result.status === 1) {
                return result;
            } else {
                let err = {
                    tip: '评论失败',
                    response: result,
                    data: params,
                    url: apihead+'theme/'+params._id+'/reply',
                }
                throw err;
            }
        } catch (err) {
            throw err;
        }

    }

    async optReply(params = {}) {//对评论赞或者踩
        try {
            let result = await this.axios('post', apihead+'reply/'+params._id+'/replyopt', params);
            if (result && result.status === 1) {
                return result;
            } else {
                let err = {
                    tip: '操作失败',
                    response: result,
                    data: params,
                    url: apihead+'reply/'+params._id+'/replyopt',
                }
                throw err;
            }
        } catch (err) {
            throw err;
        }

    }

}

export default new API();
