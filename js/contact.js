document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-form");
  const note = document.querySelector("#form-note");
  if (!form || !note) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    note.innerHTML = "Thanks! This site isn't yet connected to a live inbox — for a guaranteed response right now, please message us on " +
      '<a href="https://www.instagram.com/mpestcontrolrd?stkn=cXJtZmRmbjVoOTF4&utm_source=qr" target="_blank" rel="noopener" style="color:var(--green-700); font-weight:600;">Instagram</a>.';
    note.style.color = "var(--green-700)";
    form.reset();
  });
});
