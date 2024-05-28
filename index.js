import ru from "ru.js";
import en from "en.js";

const btn = document.getElementById("changeLang");
const output = (err, t) => {
  if (err) {
    return console.log("something went wrong loading", err);
  }
  btn.innerHTML = t("key");
  document.getElementById("pageTitle").innerHTML = t("title");
  document.getElementById("login").innerHTML = t("login");
  document.getElementById("mail").innerHTML = t("mail");
  document.getElementById("password").innerHTML = t("password");
  document.getElementById("password2").innerHTML = t("password2");
  document.getElementById("selectLanguage").innerHTML = t("language");
  document.getElementById("russian").innerHTML = t("languageRus");
  document.getElementById("english").innerHTML = t("languageEng");
  document.getElementById("checkboxText").innerHTML = t("checkbox");
  document.getElementById("submit").innerHTML = t("submit");
  document.getElementById("reset").innerHTML = t("reset");
};

i18next.init(
  {
    lng: "en",
    debug: true,
    resources: {
      en,
      ru,
    },
  },
  output
);

btn.onclick = () => {
  const lang = i18next.language === "en" ? "ru" : "en";
  i18next.changeLanguage(lang, output);
};
