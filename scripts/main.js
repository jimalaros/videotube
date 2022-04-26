let form =  document.getElementById("btn")

form.addEventListener("submit", function (e) {
    e.preventDefault()
    const input = document.querySelector("#btn2").value;
    localStorage.setItem("nombre",input)
    window.location.href = './pages/cartas.html'
})