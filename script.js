let selectedTemplate = '';

function selectTemplate(name) {
  selectedTemplate = name;
  fetch(`templates/${name}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById("cvPreview").innerHTML = html;
      updateCV();
    });
}

function updateCV() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (document.getElementById("cv-name")) {
    document.getElementById("cv-name").innerText = name;
  }

  if (document.getElementById("cv-email")) {
    document.getElementById("cv-email").innerText = email;
  }
}

function downloadPDF() {
  const element = document.getElementById("cvPreview");
  html2pdf().from(element).save("cv.pdf");
}
