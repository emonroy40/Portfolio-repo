var type = new Typed(".multiple_text", {
    strings: ["Frontend Developer", "Web Designer", "Wordpress Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    typeDaly: 1000,
    loop: true
})

//Lime Time

const showTime = () => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";


    if (h > 11) {
        session = "PM";
    }

    if (h > 12) {
        h = h - 12;
    }

    if (h == 0) {
        h = 12;
    }


    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;


    let time = h + ":" + m + ":" + s + " " + session;
    document.getElementById('clock').innerHTML = time;
}

setInterval(showTime, 1000);
