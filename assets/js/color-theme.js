(() => {
  const root = document.documentElement;
  let theme = 'light';
  try {
    if (localStorage.getItem('theme') === 'dark') theme = 'dark';
  } catch {
    // The toggle still works when browser storage is disabled.
  }
  root.dataset.theme = theme;

  document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('color-theme-toggle');
    button.hidden = false;
    button.addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = theme;
      try {
        localStorage.setItem('theme', theme);
      } catch {
        // The current page has already applied the selected theme.
      }
    });
  });
})();
