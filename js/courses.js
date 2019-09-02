function makeBold(){
    
    if(document.getElementById("textarea").style.fontWeight=="bold"){
        document.getElementById("textarea").style.fontWeight="normal";
    }
    else{
        document.getElementById("textarea").style.fontWeight="bold";
    }
}
function makeitalic(){
    if(document.getElementById("textarea").style.fontStyle=="italic"){
        document.getElementById("textarea").style.fontStyle="normal";
    }
    else{
        document.getElementById("textarea").style.fontStyle="italic";
    }
}
function underline(){
    if(document.getElementById("textarea").style.textDecoration=="underline"){
        document.getElementById("textarea").style.textDecoration="none";
    }
    else{
        document.getElementById("textarea").style.textDecoration="underline";
    }

}
function taille(){
document.getElementById("textarea").style.fontSize=document.getElementById("huhu").value;
}
function types(){
document.getElementById("textarea").style.fontFamily=document.getElementById("typetext").value;
}