function login() {
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();

  const erro = document.getElementById("erro");
  const loading = document.getElementById("loading");

  erro.innerText = "";

  // validação básica
  if (!email || !senha) {
    erro.innerText = "Preencha todos os campos";
    return;
  }

  loading.style.display = "block";

  firebase.auth().signInWithEmailAndPassword(email, senha)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch((e) => {
      loading.style.display = "none";

      switch (e.code) {
        case "auth/invalid-email":
          erro.innerText = "Email inválido";
          break;
        case "auth/user-not-found":
          erro.innerText = "Usuário não encontrado";
          break;
        case "auth/wrong-password":
          erro.innerText = "Senha incorreta";
          break;
        case "auth/too-many-requests":
          erro.innerText = "Muitas tentativas. Tente mais tarde.";
          break;
        default:
          erro.innerText = "Erro ao fazer login";
      }
    });
}