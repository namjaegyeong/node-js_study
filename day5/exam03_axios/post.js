import axios from "axios";

axios({
    method:'POST',
    url : 'http://localhost:8090/echo',
    data : 'hello axios',
    headers : {
        'my-custom-header':'hi'
    }
}).then((res) =>{
    //console.log(res)
    console.log(res.status)
    console.log(res.data)

}).catch(err=> {
    //console.log(err)
    console.log(err.code)
})