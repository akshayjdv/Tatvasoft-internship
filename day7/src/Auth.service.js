import request from "./request";

const ENDPOINT = "api/user";

const login = async(data) =>{
    const url = `${ENDPOINT}/login`;

    return request.post(url,data).then( (res)=>{
        return res.data.detail;
    });
};

const create = async(data) =>{
    const url = `${ENDPOINT}`;

    return request.post(url,data).then( (res)=>{
        return res.data.detail;
    });
};

const authService = {
    login,
    create,
};

export default authService;