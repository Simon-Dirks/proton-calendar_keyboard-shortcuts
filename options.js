const defaultShortcuts = {
  next: "n",
  previous: "p",
  today: "t",
  day: "d",
  week: "w",
  month: "m",
};

// Convert input to lowercase immediately on input
function setupInputHandlers() {
  Object.keys(defaultShortcuts).forEach(key => {
    const input = document.getElementById(key);
    input.addEventListener('input', (e) => {
      e.target.value = e.target.value.toLowerCase();
    });
  });
}

function saveOptions() {
  const shortcuts = {};
  for (const key of Object.keys(defaultShortcuts)) {
    // Get value and ensure it's lowercase, fallback to default if empty
    const value = document.getElementById(key).value.toLowerCase() || defaultShortcuts[key];
    shortcuts[key] = value;
  }

  browser.storage.sync.set({ shortcuts }).then(() => {
    const status = document.getElementById("status");
    status.textContent = "Shortcuts saved!";
    setTimeout(() => {
      status.textContent = "";
    }, 2000);
  });
}

function restoreOptions() {
  browser.storage.sync.get("shortcuts").then((result) => {
    const shortcuts = result.shortcuts || defaultShortcuts;
    for (const [key, value] of Object.entries(shortcuts)) {
      document.getElementById(key).value = value;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  restoreOptions();
  setupInputHandlers();
});
document.getElementById("save").addEventListener("click", saveOptions);
