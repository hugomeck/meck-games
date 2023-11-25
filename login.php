<!-- login.php -->
<?php
session_start();

// Conecte-se ao banco de dados
$conn = new mysqli("utf8mb4_0900_ai_ci", "root", "", "usuarios");

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM usuarios WHERE username = '$username' AND password = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Usuário autenticado
        $_SESSION['username'] = $username;

        // Redireciona para a página index.html
        header("Location: index.html");
        exit();
    } else {
        echo "Login falhou. Verifique suas credenciais.";
    }
}

$conn->close();
?>
