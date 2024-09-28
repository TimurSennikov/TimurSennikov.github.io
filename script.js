const tg = window.Telegram.WebApp;

window.onload = () => {
    setInterval(() => {
        tg.CloudStorage.getItem("skrypakmb_bal", (err, data) => {
            if(err){alert("wtf?");} // watafak?
            else{document.getElementById("score").innerHTML = data;}
        });
    }, 1000);

    document.getElementById("clickArea").onclick = () => {
        tg.CloudStorage.getItem("skrypakmb_bal", (err, data) => {
            tg.CloudStorage.setItem("skrypakmb_bal", data + 1);
        });
    };
};
