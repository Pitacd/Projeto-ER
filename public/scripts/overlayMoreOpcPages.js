let moreOpcPagesOverlay = document.getElementById("moreOpcOverlay");
let moreOpcPagesBtn = document.getElementById("moreOpcIcon");
let overlayMoreOpcVisible = false;

moreOpcPagesBtn.addEventListener("click", ()=>{
    if(!overlayMoreOpcVisible){
        moreOpcPagesOverlay.style.display = "block";
        overlayMoreOpcVisible = true;
    }
    else{
        moreOpcPagesOverlay.style.display = "none";
        overlayMoreOpcVisible = false;
    }
});

moreOpcPagesOverlay.addEventListener("click", ()=>{
    overlayMoreOpcVisible != overlayMoreOpcVisible;
    moreOpcPagesOverlay.style.display = "none";
});
