import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "SUA_KEY",
  authDomain: "SEU_APP.firebaseapp.com",
  projectId: "SEU_ID",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export { collection, addDoc, getDocs };
function copiarPix(){
  let chave = document.getElementById("pix").value;
  navigator.clipboard.writeText(chave);
  alert("PIX copiado!");
}