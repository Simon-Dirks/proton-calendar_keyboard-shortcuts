const ignoreShortcutsForClassNames = [
  "eventpopover-header--draggable",
  "modal-two",
];
const ignoreElementsQuery = ignoreShortcutsForClassNames
  .map((className) => `.${className}`)
  .join(",");

document.addEventListener("keydown", function (event) {
  const ignoreElements = document.querySelectorAll(ignoreElementsQuery);
  const ignoreElementsAreShown = ignoreElements.length > 0;
  if (ignoreElementsAreShown) {
    return;
  }

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
  if (key === "d") {
    buttonQueries.push('[data-testid="calendar-view:view-options-dropdown"]');
    buttonQueries.push('[data-testid="view-option-day"]');
    buttonQueries.push('[data-testid="calendar-view:view-options-dropdown"]');
  }

  // Week
  if (key === "w") {
    buttonQueries.push('[data-testid="calendar-view:view-options-dropdown"]');
    buttonQueries.push('[data-testid="view-option-week"]');
    buttonQueries.push('[data-testid="calendar-view:view-options-dropdown"]');
  }

  // Month
  if (key === "m") {
    buttonQueries.push('[data-testid="calendar-view:view-options-dropdown"]');
    buttonQueries.push('[data-testid="view-option-month"]');
    buttonQueries.push('[data-testid="calendar-view:view-options-dropdown"]');
  }

  if (!buttonQueries || buttonQueries.length === 0) {
    return;
  }

  const clickButtons = async () => {
    for (const query of buttonQueries) {
      const button = document.querySelector(query);
      if (button) {
        button.click();
        await new Promise((resolve) => setTimeout(resolve, 1));
      }
    }
  };

  clickButtons();
});
