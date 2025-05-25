function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6iWN8fL0Kgw":
        Script1();
        break;
      case "6OUbOHY1PF9":
        Script2();
        break;
      case "6loG7Gd4t6k":
        Script3();
        break;
      case "6PB0xpDczKu":
        Script4();
        break;
      case "6NVK7cGKUZa":
        Script5();
        break;
  }
}

function Script1()
{
  if (!window.bgMusic) {
    window.bgMusic = new Audio("story_content/lagu1.mp3");
    window.bgMusic.loop = true;
}
window.bgMusic.play();

}

function Script2()
{
  if (!window.bgMusic) {
    window.bgMusic = new Audio("story_content/lagu1.mp3");
    window.bgMusic.loop = true;
}
window.bgMusic.play();

}

function Script3()
{
  if (window.bgMusic && !window.bgMusic.paused) {
    window.bgMusic.pause(); // hanya pause, tidak reset
}
}

function Script4()
{
  if (window.bgMusic && !window.bgMusic.paused) {
    window.bgMusic.pause(); // hanya pause, tidak reset
}

}

function Script5()
{
  if (!window.bgMusic) {
    window.bgMusic = new Audio("story_content/lagu1.mp3");
    window.bgMusic.loop = true; // atau false jika tidak ingin looping
}
window.bgMusic.play();

}

