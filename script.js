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

// Dropdown vullen
const templateSelect = document.getElementById("template-select");
templates.forEach((t, index) => {
  const option = document.createElement("option");
  option.value = index;
  option.textContent = t.name;
  templateSelect.appendChild(option);
});

// Tekstveld vullen bij template selectie
const emailContent = document.getElementById("email-content");
templateSelect.addEventListener("change", () => {
  const t = templates[templateSelect.value];
  emailContent.value = t.content;
});

// Veelgebruikte zinnen toevoegen met drag-and-drop
const sentenceList = document.getElementById("sentence-list");
sentences.forEach((s, i) => {
  const li = document.createElement("li");
  li.textContent = s;
  li.setAttribute("draggable", true);
  li.setAttribute("id", "sentence-" + i);

  li.addEventListener("dragstart", drag);

  sentenceList.appendChild(li);
});

// Drag-and-drop functies
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const text = document.getElementById(data).textContent;
  emailContent.value += "\n" + text;
}

// Kopieer naar clipboard
document.getElementById("copy-button").addEventListener("click", () => {
  emailContent.select();
  navigator.clipboard.writeText(emailContent.value);
  alert("Gekopieerd naar clipboard!");
});

