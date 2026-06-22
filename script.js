const params = new URLSearchParams(window.location.search);
const selectedPackage = params.get("package");

if (selectedPackage) {
  const packageNotice = document.querySelector("[data-selected-package]");
  if (packageNotice) {
    const label = selectedPackage.charAt(0).toUpperCase() + selectedPackage.slice(1);
    packageNotice.textContent = `Selected package: ${label}`;
  }
}

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}
