const ignoreShortcutsForClassNames = [
  "eventpopover-header--draggable",
  "modal-two",
];
const ignoreElementsQuery = ignoreShortcutsForClassNames
  .map((className) => `.${className}`)
  .join(",");

const defaultShortcuts = {
  next: "n",
  previous: "p",
  today: "t",
  day: "d",
  week: "w",
  month: "m",
};

// Get shortcuts from storage or use defaults
let currentShortcuts = defaultShortcuts;
browser.storage.sync.get("shortcuts").then((result) => {
  if (result.shortcuts) {
    currentShortcuts = result.shortcuts;
  }
});

// Listen for changes in shortcuts
browser.storage.onChanged.addListener((changes) => {
  if (changes.shortcuts) {
    currentShortcuts = changes.shortcuts.newValue;
  }
});

document.addEventListener("keydown", function (event) {
  const ignoreElements = document.querySelectorAll(ignoreElementsQuery);
  const ignoreElementsAreShown = ignoreElements.length > 0;
  if (ignoreElementsAreShown) {
    return;
  }

  let buttonQueries = [];
  const key = event.key.toLowerCase();

  // Next
  if (key === currentShortcuts.next) {
    buttonQueries.push('[data-testid="calendar-toolbar:next"]');
  }

  // Previous
  if (key === currentShortcuts.previous) {
    buttonQueries.push('[data-testid="calendar-toolbar:previous"]');
  }

  // Today
  if (key === currentShortcuts.today) {
    buttonQueries.push('[data-testid="calendar-toolbar:today"]');
  }

  // Day
  if (key === currentShortcuts.day) {
    buttonQueries.push('[data-testid="calendar-view:view-options-dropdown"]');
    buttonQueries.push('[data-testid="view-option-day"]');
    buttonQueries.push('[data-testid="calendar-view:view-options-dropdown"]');
  }

  // Week
  if (key === currentShortcuts.week) {
    buttonQueries.push('[data-testid="calendar-view:view-options-dropdown"]');
    buttonQueries.push('[data-testid="view-option-week"]');
    buttonQueries.push('[data-testid="calendar-view:view-options-dropdown"]');
  }

  // Month
  if (key === currentShortcuts.month) {
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
