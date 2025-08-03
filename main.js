let selectedTemplate = "";

function selectTemplate(templateName) {
  selectedTemplate = templateName;

  fetch(`templates/${templateName}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById("cvPreview").innerHTML = html;
      updateCV();
    });
}

function updateCV() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const summary = document.getElementById("summary").value;

  setText("cv-name", name);
  setText("cv-email", email);
  setText("cv-phone", phone);
  setText("cv-summary", summary);
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function downloadPDF() {
  const element = document.getElementById("cvPreview");
  html2pdf().from(element).save("cv.pdf");
}
