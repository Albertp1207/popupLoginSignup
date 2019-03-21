let Req =(url,method,data)=>{
    return fetch(url,{
        method:method,
        body:JSON.stringify(data),
        headers: new Headers({
            "Content-Type":"application/json"
        })
    })
        .then(res=>res.json())
}

export default Req;