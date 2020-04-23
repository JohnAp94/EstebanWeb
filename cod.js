document.getElementById("comentb").addEventListener("click", escribirComentario);


function escribirComentario()
{
  var x = document.getElementById("comentt");

  var para = document.createElement("P");             // Create a <p> element
  para.innerText = x.value;
  para.style.color = "#fff";             // Insert text
  document.body.appendChild(para);
}
