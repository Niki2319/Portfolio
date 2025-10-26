document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const ham = document.querySelector(".ham");
  const cross = document.querySelector(".cross");
  const main = document.querySelector(".main");

  // Initially hide cross
  cross.style.display = "none";

  // Open sidebar
  ham.addEventListener("click", () => {
    sidebar.classList.remove("sidebarGo");
    main.classList.add("sidebar-open");

    ham.style.display = "none";
    setTimeout(() => {
      cross.style.display = "inline";
    }, 300); // sync with CSS transition
  });

  // Close sidebar
  cross.addEventListener("click", () => {
    sidebar.classList.add("sidebarGo");
    main.classList.remove("sidebar-open");

    cross.style.display = "none";
    setTimeout(() => {
      ham.style.display = "inline";
    }, 300);
  });

  // Optional: Close sidebar if user clicks outside
  main.addEventListener('click', () => {
    if (window.innerWidth <= 480) {
      sidebar.classList.remove('sidebar-open');
      main.classList.remove('sidebar-open');
    }
  });
});
