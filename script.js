function irCheckout() {
  window.location.href = "checkout.html";
}

function liberar() {
  let codigo = document.getElementById("codigo").value;

  if (codigo === "MARCO2026") {
    document.getElementById("palpiteBox").innerHTML =
      "✅ Brasil vence por 2x1 ou 2x0 <br> Confiança: 65%";
  } else {
    alert("Código inválido!");
  }
}