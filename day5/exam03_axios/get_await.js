import axios from "axios";

(async function(){
    let res = await axios.get('http://localhost:8090/echo?title=hello&msg=nodejs');

    //console.log(res)
    console.log(res.data);
    console.log(res.status);
    
})();