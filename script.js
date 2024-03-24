const code = (str, callback) => {
    var typed = '';
    document.addEventListener("keypress", function (event) {
        typed += String.fromCharCode(event.keyCode || event.which).toLowerCase();
        if (typed === str) {
            callback();
            typed = ''; // Reset typed string after executing callback
        }
    });
}

code("dev", () => {
    console.log("dev");
})


function openFight() {window.location.replace(window.location.origin + "/fight");}
function openStore() {window.location.replace(window.location.origin + "/store");}
function openBank()  {window.location.replace(window.location.origin + "/bank");}
function openStats() {window.location.replace(window.location.origin + "/stats");}

