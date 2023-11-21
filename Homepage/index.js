// Watermark Started
const Watermark = ()=>{
    document.addEventListener("scroll",()=>{
        gsap.to("#watermark p",{
            opacity:1
        })
    })
    document.addEventListener('scroll', ()=>{
        clearTimeout(window.scrollTimeout);
        window.scrollTimeout = setTimeout(()=>{
            gsap.to("#watermark p",{
                opacity:0.4,
                duration:1
            })
        }, 50); 
    });
    
}
Watermark();
// Watermark Ends
// Navbar Started
const navbar = ()=>{
    let flag = false;
    const menu_btn = document.querySelector("#navbar .menu_icon");
    window.addEventListener("scroll",(e)=>{
        scrollY>650 ? menu_btn_inc() : menu_btn_dec()
        scrollY>650 ? a_tag_down() : a_tag_up()
    })
    const menu_btn_dec = async ()=>{
        await gsap.to("#navbar .menu_icon",{
            scale:0,
        })
    }
    const menu_btn_inc = ()=>{
        gsap.to("#navbar .menu_icon",{
            scale:1
        })
    }
    const a_tag_down = ()=>{
        gsap.to("#navbar .nav_links a",{
            top:`100%`,
            stagger:.1
        })
    }
    const a_tag_up = ()=>{
        gsap.to("#navbar .nav_links a",{
            top:`0`,
            stagger:.1
        })
    }
    menu_btn.addEventListener("click",()=>{
        flag ? a_tag_down() : a_tag_up();
        flag = !flag
    })

}
navbar()
// Navbar Ended

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
            top:`${30}%`,
            duration:0.5,
            delay:0
        })
    },600)
    setTimeout(async ()=>{
        await gsap.to("#welcome",{
            opacity:0,
            delay:0
        })
        welcome.style.display="none"
    },1300)
}
welcomeMsg();
// Welcome Page Ended