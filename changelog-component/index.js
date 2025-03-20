const theme = localStorage.getItem("theme");
if (theme === "dark") {
  document.body.classList.add("dark-theme");
}

const toggleTheme = () => {
  document.body.classList.toggle("dark-theme");
  localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
};

document.querySelector("#toggle-theme").addEventListener("click", toggleTheme);

const createChangelog = (date, content) => {
  const fragment = document.createDocumentFragment();

  const timelineItem = document.createElement("div");
  timelineItem.className = "timeline-item";

  const timelineDate = document.createElement("div");
  timelineDate.className = "timeline-date";
  timelineDate.textContent = date;

  const timelineContent = document.createElement("div");
  timelineContent.className = "timeline-content";
  timelineContent.textContent = content;

  timelineItem.append(timelineDate, timelineContent);
  fragment.appendChild(timelineItem);

  return fragment;
};

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".modal");
  const form = document.querySelector(".form-container");
  const contentInput = document.getElementById("content");
  const timeline = document.querySelector(".timeline");

  document.querySelector(".add-new-changelog").addEventListener("click", () => {
    modal.style.display = "grid";
    contentInput.focus();
    modal.dataset.date = new Intl.DateTimeFormat("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date());
  });

  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal") || e.target.classList.contains("cancel-btn")) {
      modal.style.display = "none";
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const content = contentInput.value.trim();
    if (!content) return;

    const date = modal.dataset.date;
    timeline.prepend(createChangelog(date, content));

    contentInput.value = "";
    modal.style.display = "none";
  });
});
