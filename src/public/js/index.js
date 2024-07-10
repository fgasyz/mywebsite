window.onlo

function main() {
  getKindOfPortofolio();
}

function getKindOfPortofolio() {
  const items = ["all", "android", "website", "restfull-api"];
  const active = "bg-indigo-500";
  const listOfPortofolio = document.getElementsByClassName("portofolios")[0];
  for (let i = 0; i < listOfPortofolio.children.length; i++) {
    listOfPortofolio.children[0].classList.add(active);
    listOfPortofolio.children[i].addEventListener("click", (e) => {
      if (listOfPortofolio.children[i].id == items[0]) {
        listOfPortofolio.children[0].classList.add(active);
        listOfPortofolio.children[1].classList.remove(active);
        listOfPortofolio.children[2].classList.remove(active);
        listOfPortofolio.children[3].classList.remove(active);
      }
      if (listOfPortofolio.children[i].id == items[1]) {
        listOfPortofolio.children[1].classList.add(active);
        listOfPortofolio.children[0].classList.remove(active);
        listOfPortofolio.children[2].classList.remove(active);
        listOfPortofolio.children[3].classList.remove(active);
      }
      if (listOfPortofolio.children[i].id == items[2]) {
        listOfPortofolio.children[2].classList.add(active);
        listOfPortofolio.children[0].classList.remove(active);
        listOfPortofolio.children[1].classList.remove(active);
        listOfPortofolio.children[3].classList.remove(active);
      }
      if (listOfPortofolio.children[i].id == items[3]) {
        listOfPortofolio.children[3].classList.add(active);
        listOfPortofolio.children[0].classList.remove(active);
        listOfPortofolio.children[1].classList.remove(active);
        listOfPortofolio.children[2].classList.remove(active);
      }
    });
  }
}

main();
