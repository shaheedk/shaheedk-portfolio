function sendMail(){
    let params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
        
        
    };
    console.log(params);
        const serviceID="service_nwipspq";
const templateID="template_v5ud9nc"
emailjs.send(serviceID,templateID,params)
.then( 
    res=>{
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("message").value="";
    console.log(res)
    alert("you message send successfully")

})
Cache(err=>console.log(err));
   
}
