const tg = window.Telegram.WebApp;

window.onload = () => {
    setInterval(() => {
        tg.CloudStorage.getItem("skrypakmb_bal", (err, data) => {
            if(err){} // watafak?
            else{document.getElementById("score").innerHTML = data;}
        });
    }, 1000);

    document.getElementById("clickArea").onclick = () => {
        tg.CloudStorage.getItem("skrypakmb_bal", (err, data) => {
            tg.CloudStorage.setItem("skrypakmb_bal", parseInt(data, 10) + 1);
        });
    };
};
