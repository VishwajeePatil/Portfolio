// Welcome Page Started
const welcomeMsg = ()=>{
    const welcome = document.getElementById("welcome");
    welcome.style.display="block"
    const wel_msg = document.getElementById("welcome_msg");
    const msg_arr = [{msg:"Hello",color:"orange"},{msg:"नमस्ते",color:"white"},{msg:"नमस्कार",color:"green"}];
    function updateName(index) {
        setTimeout(function () {
            wel_msg.textContent = msg_arr[index].msg;
            wel_msg.style.color=msg_arr[index].color;
        }, index * 300);
    }
    for (var i = 0; i < msg_arr.length; i++) {
        updateName(i);
    }
    setTimeout(()=>{
        gsap.to("#welcome .quote > p",{
            top:`${50}%`,
            duration:0.5,
            delay:0
        })
    },600)
    setTimeout(()=>{
        welcome.style.display="none"
    },1500)
}
welcomeMsg();
// Welcome Page Ended