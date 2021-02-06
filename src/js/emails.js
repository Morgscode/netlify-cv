window.addEventListener("DOMContentLoaded", () => {
  const contactFormBtn = document.querySelector("#portfolioContactSubmit");

  if (contactFormBtn) {
    contactFormBtn.addEventListener("click", submitPortfolioContactForm);
  }
});

function enableSubmitButton() {
  return (contactFormBtn.disabled = false);
}

function submitPortfolioContactForm(event) {
  const form = document.querySelector("#portfolioContactForm");

  if (form && form.checkValidity()) {
    // fetch post
  }
}

function convertFormDataToJson(form) {
  const formData = new FormData(form);
  let postData = new Object();
  formData.forEach((value, key) => (postData[key] = value));
  const json = JSON.stringify(postData);
  return json;
}
