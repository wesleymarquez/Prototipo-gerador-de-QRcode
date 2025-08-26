let qr;

function gerarQRCode() {
  const container = document.getElementById("qrcode");
  const link = document.getElementById("linkInput").value.trim();
  const size = parseInt(document.getElementById("sizeSelect").value);
  const downloadBtn = document.getElementById("downloadBtn");

  container.innerHTML = "";
  downloadBtn.style.display = "none";

  if (!link) {
    alert("Por favor, insira um link válido.");
    return;
  }

  qr = new QRCode(container, {
    text: link,
    width: size,
    height: size,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  setTimeout(() => {
    downloadBtn.style.display = "inline-block";
  }, 500);
}

function baixarQRCode() {
  const qrImg = document.querySelector("#qrcode img");

  if (qrImg) {
    const link = document.createElement("a");
    link.href = qrImg.src;
    link.download = "qrcode.png";
    link.click();
  } else {
    alert("QR Code não encontrado!");
  }
}

// Gera o QR Code do PIX automaticamente
const payloadPix = "00020126770014BR.GOV.BCB.PIX0124wesleymarquez@bol.com.br0227Ajude a manter o site no ar5204000053039865802BR5916Wesley Milhomens6009SAO PAULO62140510rsRRaK8Ha9630404FC";

window.addEventListener("DOMContentLoaded", () => {
  new QRCode(document.getElementById("pix-qrcode"), {
    text: payloadPix,
    width: 250,
    height: 250,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
});
