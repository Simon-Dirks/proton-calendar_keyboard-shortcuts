document.addEventListener("keydown", function (event) {
    let buttonQuery = '';
    const key = event.key.toLowerCase();

    if (key === "n") {
        buttonQuery = '[data-testid="calendar-toolbar:next"]';
    }
    if (key === "p") {
        buttonQuery = '[data-testid="calendar-toolbar:previous"]';
    }
    if (key === "t") {
        buttonQuery = '[data-testid="calendar-toolbar:today"]';
    }

    if (buttonQuery) {
        const button = document.querySelector(buttonQuery);
        if (button) {
            button.click();
        }
    }
});
