document.addEventListener("DOMContentLoaded", function() {
    const query = new URLSearchParams(window.location.search).get("q");

    if (query) {
        const resultadoPesquisa = document.getElementById("resultadoPesquisa");
        resultadoPesquisa.innerHTML = "Carregando resultados...";

        // Simule uma chamada à API para obter os resultados da pesquisa
        // Substitua este código com uma chamada real à sua API ou fonte de dados
        setTimeout(function() {
            resultadoPesquisa.innerHTML = ""; // Limpa a mensagem de carregamento

            // Simule uma lista de resultados
            const resultados = [
                "Resultado 1: Descrição do resultado 1.",
                "Resultado 2: Descrição do resultado 2.",
                "Resultado 3: Descrição do resultado 3.",
                // Adicione mais resultados conforme necessário
            ];

            resultados.forEach(function(resultado) {
                const li = document.createElement("li");
                li.textContent = resultado;
                resultadoPesquisa.appendChild(li);
            });
        }, 1000); // Simula um atraso na resposta do servidor
    } else {
        // Se a consulta estiver em branco, exiba uma mensagem de erro ou redirecione o usuário
        document.getElementById("resultadoPesquisa").textContent = "Nenhuma consulta de pesquisa fornecida.";
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const loginMessage = document.getElementById('login-message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Enviar as credenciais para o servidor (usando XMLHttpRequest ou Fetch)

        // Exemplo de uso do Fetch API:
        fetch('login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                loginMessage.textContent = 'Login bem-sucedido';
            } else {
                loginMessage.textContent = 'Credenciais inválidas';
            }
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    });
});

document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    // Implemente a lógica de login aqui (por exemplo, verificando as credenciais em um array ou banco de dados).
    // Simplesmente alerta o resultado neste exemplo.
    alert("Login realizado com sucesso para: " + username);
});

document.getElementById("register-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;

    // Implemente a lógica de cadastro aqui (por exemplo, adicionando as credenciais a um array ou banco de dados).
    // Simplesmente alerta o resultado neste exemplo.
    alert("Cadastro realizado com sucesso para: " + username);
});
function login(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("login.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Login bem-sucedido!");

            // Exibe os dados do usuário na página
            displayUserData(data.userData);
        } else {
            alert("Login falhou. Verifique suas credenciais.");
        }
    })
    .catch(error => console.error("Erro:", error));
}

function displayUserData(userData) {
    // Exemplo simples: exibir os dados do usuário em um elemento div
    const userDisplay = document.getElementById("userDisplay");

    if (userData) {
        userDisplay.innerHTML = `
            <p>Usuário: ${userData.username}</p>
            <p>E-mail: ${userData.email}</p>
        `;
    } else {
        userDisplay.innerHTML = "Erro ao exibir dados do usuário.";
    }
}
<script>
  let cart = [];

  function addToCart(productId) {
      const productElement = document.querySelector(`[data-id="${productId}"]`);
      const productName = productElement.dataset.name;
      const productPrice = parseFloat(productElement.dataset.price);

      const item = {
          id: productId,
          name: productName,
          price: productPrice
      };

      cart.push(item);

      updateCart();
  }

  function updateCart() {
      const cartElement = document.getElementById('cart');
      cartElement.innerHTML = '<h3>Itens no Carrinho</h3>';

      if (cart.length === 0) {
          cartElement.innerHTML += '<p>O carrinho está vazio.</p>';
      } else {
          const total = cart.reduce((acc, item) => acc + item.price, 0);
          cartElement.innerHTML += '<ul>';
          cart.forEach(item => {
              cartElement.innerHTML += `<li>${item.name} - $${item.price.toFixed(2)}</li>`;
          });
          cartElement.innerHTML += '</ul>';
          cartElement.innerHTML += `<p>Total: $${total.toFixed(2)}</p>`;
      }
  }
</script>

