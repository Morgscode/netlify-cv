window.addEventListener("DOMContentLoaded", () => {
  if (contactFormBtn) {
    contactFormBtn.addEventListener("click", submitPortfolioContactForm);
  }
});

function enableSubmitButton() {
  const contactFormBtn = document.querySelector("#portfolioContactSubmit");
  return (contactFormBtn.disabled = false);
}

async function submitPortfolioContactForm(event) {
  const form = document.querySelector("#portfolioContactForm");

  if (form && form.checkValidity()) {
    // fetch post

    const formData = convertFormDataToJson(form);
    const formRequest = await fetch(
      "https://lukemorgan-web-cv.netlify.app/.netlify/functions/sendMail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: formData,
      }
    );

    formRequest
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

function convertFormDataToJson(form) {
  const formData = new FormData(form);
  let postData = new Object();
  formData.forEach((value, key) => (postData[key] = value));
  const json = JSON.stringify(postData);
  return json;
}
