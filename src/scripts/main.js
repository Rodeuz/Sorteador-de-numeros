document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form-sorteador").addEventListener("submit", function (e) {
    e.preventDefault();
    const numeroMaximo = parseInt(document.getElementById("numeromax").value);

    const randomNumber = Math.floor(Math.random() * numeroMaximo + 1);

    document.getElementById("resultado-valor").innerText = randomNumber;

    document.querySelector(".resultado").style.display = "block";
  });
});
