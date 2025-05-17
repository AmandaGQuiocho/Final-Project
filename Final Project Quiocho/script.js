document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const requiredFields = ["fn", "ln", "email", "pass", "reason"];
  let valid = true;

  requiredFields.forEach(field => {
    const input = form.elements[field];
    if (!input.value.trim()) {
      input.style.border = "2px solid red";
      input.placeholder = "required";
      valid = false;
    } else {
      input.style.border = "";
    }
  });

  if (!form.sex.value) {
    alert("Sex is required.");
    valid = false;
  }

  if (valid) {
    localStorage.setItem("fn", form.fn.value.trim());
    localStorage.setItem("ln", form.ln.value.trim());
    localStorage.setItem("email", form.email.value.trim());
    localStorage.setItem("sex", form.sex.value);
    localStorage.setItem("reason", form.reason.value.trim());

    window.location.href = "proj_profile_quiocho.html";
  }
});
