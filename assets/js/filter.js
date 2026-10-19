(function () {
  var bar = document.querySelector(".filters");
  if (!bar) return;

  var buttons = bar.querySelectorAll("button");
  var sections = document.querySelectorAll(".theme");

  function apply(filter) {
    buttons.forEach(function (button) {
      var on = button.getAttribute("data-filter") === filter;
      button.classList.toggle("is-on", on);
      button.setAttribute("aria-pressed", on ? "true" : "false");
    });

    sections.forEach(function (section) {
      var shown = 0;
      section.querySelectorAll(".paper").forEach(function (paper) {
        var tags = (paper.getAttribute("data-tags") || "").split(/\s+/);
        var match = filter === "all" || tags.indexOf(filter) !== -1;
        paper.hidden = !match;
        if (match) shown += 1;
      });
      section.hidden = shown === 0;
    });
  }

  bar.addEventListener("click", function (event) {
    var button = event.target.closest("button");
    if (!button || !bar.contains(button)) return;
    apply(button.getAttribute("data-filter"));
  });
})();
