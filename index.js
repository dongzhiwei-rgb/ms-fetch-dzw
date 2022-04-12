const fetch = require('node-fetch');


//外部可引入当前文件

//get请求
module.exports.get = async url=>{
    // console.log(url)
    const response = await fetch(url);
    //json解析数据   fetch获取对象
    const resData = await response.json();
    return resData;
};

//post请求
module.exports.post = async (url,data)=>{
    const response = await fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
}

//put请求
module.exports.put = async (url,data)=>{
    const response = await fetch(url,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
};

//delete请求
module.exports.delete = async url => {
    await fetch(url,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        }
    });
    const resData = await "delete success";
    return resData;
};

