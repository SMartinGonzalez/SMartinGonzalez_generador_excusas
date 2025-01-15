function generarExcusa() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
  ];

  let rdmWho = Math.floor(Math.random() * who.length);
  let rdmWhat = Math.floor(Math.random() * what.length);
  let rdmAct = Math.floor(Math.random() * action.length);
  let rdmWhen = Math.floor(Math.random() * when.length);
  return `${who[rdmWho]} ${action[rdmAct]} ${what[rdmWhat]} ${when[rdmWhen]}`;
}
window.onload = function() {
  const excusa = document.getElementById("excuse");
  excusa.innerHTML = generarExcusa();
};
