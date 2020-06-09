function openNav(){
    if($(window).width() < 692) {
        document.querySelector('.side-nav').style.width="250px";
    }
    else{
         document.querySelector(".side-nav").style.width = "250px";
        document.querySelector(".main").style.marginLeft= "250px";
        document.querySelector(".navbar-brand").style.marginLeft= "180px";
    }
    
}
function closeNav(){
    if($(window).width() < 692) {
        document.querySelector('.side-nav').style.width="0";
         document.querySelector(".main").style.marginLeft= "0";
        ocument.querySelector(".navbar-brand").style.marginLeft= "0";
    }
    else{
         document.querySelector(".side-nav").style.width = "0";
        document.querySelector(".main").style.marginLeft= "0";
        document.querySelector(".navbar-brand").style.marginLeft= "0";
    }    
}

function openProf() {
    document.querySelector(".side-nav-prof").style.width = "100%";
}
function closeProf() {
    document.querySelector(".side-nav-prof").style.width = "0";
}
function openSettings() {
    document.querySelector(".side-nav-settings").style.width = "250px";
}
function closeSettings() {
    document.querySelector(".side-nav-settings").style.width = "0";
}
function openSettingsAccount() {
    document.querySelector(".side-nav-settings-account").style.width = "250px";
}
function closeSettingsAccount() {
    document.querySelector(".side-nav-settings-account").style.width = "0";
}