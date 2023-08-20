<?php
session_start();
$mode = "input";
if (isset($_POST["back"]) && $_POST["back"]) {

} else if (isset($_POST["confirm"]) && $_POST["confirm"]) {
    $_SESSION["fullname"] = $_POST["fullname"];
    $_SESSION["email"] = $_POST["email"];
    $_SESSION["message"] = $_POST["message"];
    $mode = "confirm";
} else if (isset($_POST["send"]) && $_POST["send"]) {
    $message = "お問い合わせを受け付けました。\r\n"
    ."名前".$_SESSION["fullname"]."\r\n"
    ."メールアドレス".$_SESSION["email"]."\r\n"
    ."お問い合わせ内容"."\r\n"
    .preg_replace("/\r\n|\r\n/", "\r\n", $_SESSION["message"]);
    mail($_SESSION["email"], "お問い合わせ", $message);
    mail("askone40@gmail.com", "お問い合わせ", $message);    
    $_SESSION["fullname"] = "";
    $_SESSION["email"] = "";
    $_SESSION["message"] = "";
    $mode = "send";
} else {
    $_SESSION["fullname"] = "";
    $_SESSION["email"] = "";
    $_SESSION["message"] = "";
}
?>

<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php if ($mode == "input") { ?>
        <form action="./Contact.php" method="post">
            名前<input type="text" name="fullname" required value="<?php echo $_SESSION["fullname"] ?>"></input><br>
            メール<input type="email" name="email" required value="<?php echo $_SESSION["email"] ?>"></input><br>
            お問い合わせ内容<br>
            <textarea cols="40" rows="8" required name="message"><?php echo $_SESSION["message"] ?></textarea><br>
            <input type="submit" name="confirm" value="確認"></input>
        </form>
    <?php } else if ($mode == "confirm") { ?>
            <form action="./Contact.php" method="post">
                名前
            <?php echo $_SESSION["fullname"] ?><br>
                メール
            <?php echo $_SESSION["email"] ?><br>
                お問い合わせ内容
            <?php echo nl2br($_SESSION["message"]) ?><br>
                <input type="submit" name="back" value="戻る"></input>
                <input type="submit" name="send" value="送信"></input>
            </form>
    <?php } else { ?>
        お問い合わせありがとうございます。お問い合わせ内容と共にメッセージを送信いたします。
        <a href="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">Ask One</span>
        </a>
    <?php } ?>
</body>

</html>