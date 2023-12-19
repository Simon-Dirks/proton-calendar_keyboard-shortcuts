document.addEventListener("keydown", function (event) {
    let buttonQueries = [];
    const key = event.key.toLowerCase();

    // Next
    if (key === "n") {
        buttonQueries.push('[data-testid="calendar-toolbar:next"]');
    }

    // Previous
    if (key === "p") {
        buttonQueries.push('[data-testid="calendar-toolbar:previous"]');
    }

    // Today
    if (key === "t") {
        buttonQueries.push('[data-testid="calendar-toolbar:today"]');
    }

    // Day
    if (key === 'd') {
        buttonQueries.push('[data-testid="calendar-view:view-options-dropdown"]');
        buttonQueries.push('[data-testid="view-option-day"]');
        buttonQueries.push('[data-testid="calendar-view:view-options-dropdown"]');
    }

    // Week
    if (key === 'w') {
        buttonQueries.push('[data-testid="calendar-view:view-options-dropdown"]');
        buttonQueries.push('[data-testid="view-option-week"]');
        buttonQueries.push('[data-testid="calendar-view:view-options-dropdown"]');
    }

    // Month
    if (key === 'm') {
        buttonQueries.push('[data-testid="calendar-view:view-options-dropdown"]');
        buttonQueries.push('[data-testid="view-option-month"]');
        buttonQueries.push('[data-testid="calendar-view:view-options-dropdown"]');
    }

    if (buttonQueries) {
        for (const buttonQuery of buttonQueries) {
            const button = document.querySelector(buttonQuery);
            if (button) {
                button.click();
            }
        }

    }
});
