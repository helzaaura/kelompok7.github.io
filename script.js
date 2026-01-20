<button id="connect">Connect Arduino</button>
<p id="challenge">Challenge: -</p>
<input id="response" placeholder="Masukkan response">
<button id="send">Kirim</button>
<p id="status"></p>

<script>
let port, writer, reader;

document.getElementById("connect").onclick = async () => {
  port = await navigator.serial.requestPort();
  await port.open({ baudRate: 9600 });

  reader = port.readable.getReader();
  writer = port.writable.getWriter();

  readSerial();
};

async function readSerial() {
  const decoder = new TextDecoder();
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    const text = decoder.decode(value);
    if (text.includes("CHALLENGE")) {
      // baris berikutnya adalah angka challenge
    } else {
      document.getElementById("challenge").innerText += text;
    }
  }
}

document.getElementById("send").onclick = async () => {
  const encoder = new TextEncoder();
  const value = document.getElementById("response").value + "\n";
  await writer.write(encoder.encode(value));
};
</script>
