let bold = false, italics = false, underline = false;

window.onload = function () {

  let fontsize = document.querySelector(".fontsize"); // font size
  let fontselect = document.querySelector(".input-font"); // font select 
  let color = document.querySelector(".color"); // color select
  let textarea = document.querySelector("textarea");

    document.getElementById('bold').addEventListener('click', async () => {
      textarea.style.fontWeight = !textarea.style.fontWeight || textarea.style.fontWeight === "normal" ? "bold" : "normal";
    });  
    document.getElementById('italics').addEventListener('click', async () => {
      textarea.style.fontStyle = !textarea.style.fontStyle || textarea.style.fontStyle === "normal" ? "italic" : "normal";
    }); 
    document.getElementById('underline').addEventListener('click', async () => {
      textarea.style.textDecorationLine = !textarea.style.textDecorationLine || textarea.style.textDecorationLine === "none" ? "underline" : "none";
    }); 

    fontselect.addEventListener('change', function() {
      textarea.style.fontFamily = this.value;
    });

    fontsize.addEventListener('change', function() {
      textarea.style.fontSize = `${this.value}px`;
    });

    color.addEventListener('change', function() {
      textarea.style.color = this.value;
    });

    textarea.addEventListener("input", function() {
      // console.log(this);
    })

}
