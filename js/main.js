document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("cookie-consent-banner");
  const acceptBtn = document.getElementById("accept-all");
  const rejectBtn = document.getElementById("reject-all");

  if (!banner) return;

  // Si aucun consentement enregistré → on affiche
  if (!localStorage.getItem("consentMode")) {
    banner.style.display = "block";
  } else {
    banner.style.display = "none";
  }

  acceptBtn.addEventListener("click", () => {
    const consent = {
      ad_storage: "granted",
      analytics_storage: "granted",
      personalization_storage: "granted",
      functionality_storage: "granted",
      security_storage: "granted"
    };

    localStorage.setItem("consentMode", JSON.stringify(consent));
    banner.style.display = "none";
  });

  rejectBtn.addEventListener("click", () => {
    const consent = {
      ad_storage: "denied",
      analytics_storage: "denied",
      personalization_storage: "denied",
      functionality_storage: "denied",
      security_storage: "denied"
    };

    localStorage.setItem("consentMode", JSON.stringify(consent));
    banner.style.display = "none";
  });
});

// document.getElementById("profile-form").addEventListener("submit", function(e){
//   e.preventDefault();
//   const role = document.getElementById("job-function").value;
//   gtag('set', {'user_role': role});
//   alert('Role sent to GA: ' + role);
// });

