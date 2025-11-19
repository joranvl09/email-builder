// Templates
const templates = [
  {name: "Template 1", content: "Hallo [naam],\n\nBedankt voor uw bericht."},
  {name: "Template 2", content: "Beste [naam],\n\nHierbij stuur ik u de gevraagde info."}
];

// Veelgebruikte zinnen
const sentences = [
  "Met vriendelijke groet,",
  "Laat het me weten als u vragen heeft.",
  "Dank voor uw tijd."
];

// Dropdown vullen met templates
const templateSelect = document.getElementById("template-select");
templates.forEach((t, index) => {
  const option = document.createElement("option");
  option.value = index;
  option.textContent = t.name;
  templateSelect.appendChild(option);
});

// Tekstveld vullen bij keuze template
const emailContent = document.getElementById("email-content");
templateSelect.addEventListener("change", () => {
  const t = templates[templateSelect.value];
  emailContent.value = t.content;
});

// Veelgebruikte zinnen lijst
const sentenceList = document.getElementById("sentence-list");
sentences.forEach(s => {
  const li = document.createElement("li");
  li.textContent = s;
  li.addEventListener("click", () => {
    emailContent.value += "\n" + s;
  });
  sentenceList.appendChild(li);
});

// Kopieer naar clipboard
document.getElementById("copy-button").addEventListener("click", () => {
  emailContent.select();
  navigator.clipboard.writeText(emailContent.value);
  alert("Gekopieerd naar clipboard!");
});
