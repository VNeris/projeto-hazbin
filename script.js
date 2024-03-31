function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if(html.classList.contains("light")){
    img.setAttribute("src", "./assets/2dfa0ec6-0db7-4274-878c-71bd481b6347_60f7f6e3-b34f-496b-abab-f875577558d2.jpeg")
  } else {
    img.setAttribute("src", "./assets/c1130bf1858b4c8d979a730cc6cdd95e.jpg")
  }
}
