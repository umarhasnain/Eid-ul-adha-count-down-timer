let end_Date = "17 June 2024 12:00 AM";
document.getElementById("endDate").innerText = end_Date;
const inputs = document.querySelectorAll("input")


setInterval(function() {

    function clock() {
        const end = new Date(end_Date);
        const now = new Date();
        const diff = (end - now) / 1000;
        console.log(diff)
        if (diff < 0) return

        inputs[0].value = Math.floor(diff / 3600 / 24);
        inputs[1].value = Math.floor(diff / 3600) % 24;
        inputs[2].value = Math.floor(diff / 60) % 60;
        inputs[3].value = Math.floor(diff) % 60;

    }

    clock()

}, 1000)