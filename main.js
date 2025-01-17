const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown",function(event) {
    if(event.code==="Enter") {
        search();
    }
});

function search() {
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q=" + input +"&client=firefox-b-d&ei=yZBCZNzeKMiL4-EPj5eo8AY&ved=0ahUKEwic56Sui7v-AhXIxTgGHY8LCm4Q4dUDCA4&uact=5&oq=anime&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzINCAAQigUQsQMQgwEQQzINCAAQigUQsQMQgwEQQzIKCAAQigUQsQMQQzIHCAAQigUQQzIHCAAQigUQQzINCAAQigUQsQMQgwEQQzIICAAQgAQQsQMyCAgAEIAEELEDMgsIABCKBRCxAxCDATILCAAQgAQQsQMQgwE6CggAEEcQ1gQQsAM6CggAEIoFELADEEM6DQgAEOQCENYEELADGAE6DwguEIoFEMgDELADEEMYAjoSCC4QigUQ1AIQyAMQsAMQQxgCOgoILhCxAxCKBRBDOg4ILhCDARDUAhCxAxCABDoHCC4QigUQQzoVCC4QsQMQigUQQxDcBBDeBBDgBBgDOg8IABCKBRDqAhC0AhBDGAQ6EgguEIoFEMgDEOoCELQCEEMYAjoVCC4Q1AIQigUQyAMQ6gIQtAIQQxgCOhUILhCKBRDUAhDIAxDqAhC0AhBDGAI6CgguEIoFENQCEEM6EwguEIoFELEDEIMBEMcBENEDEEM6BQgAEIAESgQIQRgAUKwCWKESYLoTaAJwAXgDgAHCAYgBwwiSAQM2LjSYAQCgAQGwAQ_IARLAAQHaAQYIARABGAnaAQYIAhABGAjaAQYIAxABGBTaAQQIBBgH&sclient=gws-wiz-serp"
}