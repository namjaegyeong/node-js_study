import axios from "axios";

axios.get('http://localhost:8090/echo?title=hello&msg=nodejs')
.then((res)=>{
    console.log(res.status);
    console.log(res.data);
})
.catch((err)=>{
    console.log(err);
})