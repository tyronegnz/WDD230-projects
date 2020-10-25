function day(){
    var d = new Date();
    var days = d.getDay();
        if (days == 5) {
            document.getElementsByClassName("top-banner")[0].classList.toggle("show");
        }
    }