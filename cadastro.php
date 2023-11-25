<?php
// Conecte-se ao banco de dados
$conn = new mysqli("localhost", "root", "", "usuarios");

// Verifique a conexão
if ($conn->connect_error) {
    die("Erro na conexão com o banco de dados: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Criptografar a senha

    // Verifique se o usuário já existe
    $checkUser = $conn->prepare("SELECT * FROM usuarios WHERE username = ?");
    $checkUser->bind_param("s", $username);
    $checkUser->execute();

    $result = $checkUser->get_result();

    if ($result->num_rows > 0) {
        echo "Usuário já existe. Escolha outro nome de usuário.";
    } else {
        // Insira o novo usuário no banco de dados
        $insertUser = $conn->prepare("INSERT INTO usuarios (username, password) VALUES (?, ?)");
        $insertUser->bind_param("ss", $username, $password);

        if ($insertUser->execute()) {
            echo "Cadastro bem-sucedido! Redirecionando para a página de login...";
            // Aguarde por um curto período de tempo (opcional)
            sleep(2);
            // Redireciona para a página de login
            header("Location: login.html");
            exit();
        } else {
            echo "Erro no cadastro: " . $insertUser->error;
        }
    }

    $checkUser->close();
    $insertUser->close();
}

// Feche a conexão com o banco de dados no final do script
$conn->close();
?>
