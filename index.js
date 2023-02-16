const bodyEL = document.querySelector("body");
bodyEL.addEventListener("mousemove", (event)=>{
   const Xpos = event.offsetX;
   const Ypos = event.offsetX;
      const spanEL = document.createElement("span");
    
      spanEL.style.left= Xpos +"px";
      spanEL.style.top= Ypos + "px";
    const size = Math.random() *100 ;
    spanEL.style.width = size + "px"
    spanEL.style.height = size + "px"
      bodyEL.appendChild(spanEL);
      setTimeout(() => {
        spanEL.remove();
      }, 3000);
})