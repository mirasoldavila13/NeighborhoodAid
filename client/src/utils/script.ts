// Grab all tabs and panels
const tabs = document.querySelectorAll<HTMLElement>('.tab');
const panels = document.querySelectorAll<HTMLElement>('.panel');

// Function to handle tab click event
function handleTabClick(e: MouseEvent) {
  const target = e.target as HTMLElement;

  // Remove active states from all tabs
  tabs.forEach((tab) => {
    const tabChild = tab.children[0] as HTMLElement;
    tabChild.classList.remove('border-softRed', 'border-b-4');
  });

  // Hide all panels
  panels.forEach((panel) => {
    panel.classList.add('hidden');
  });

  // Add active state to the clicked tab
  target.classList.add('border-softRed', 'border-b-4');

  // Show the corresponding panel based on the data-target attribute
  const targetPanel = target.getAttribute('data-target');
  if (targetPanel) {
    document.querySelector(`.${targetPanel}`)?.classList.remove('hidden');
  }
}

// Add event listeners to all tabs
tabs.forEach((tab) => {
  tab.addEventListener('click', handleTabClick);
});

// Toggle Mobile Menu
const btn = document.getElementById('menu-btn') as HTMLElement | null;
const menu = document.getElementById('menu') as HTMLElement | null;

btn?.addEventListener('click', () => {
  btn.classList.toggle('open');
  if (menu) {
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
  }
});
