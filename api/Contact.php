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
    $mode = "send";
} else {
    $_SESSION = array();
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
        <form action="api/Contact.php" method="post">
            名前<input type="text" name="fullname" value="<?php echo $_SESSION["fullname"] ?>" /></input><br>
            メール<input type="email" name="email" value="<?php echo $_SESSION["email"] ?>" /></input><br>
            お問い合わせ内容<br>
            <textarea cols="40" rows="8" name="messaage"><?php echo $_SESSION["message"] ?></textarea><br>
            <input type="submit" name="confirm" value="確認" /></input>
        </form>
    <?php } else if ($mode == "confirm") { ?>
            <form action="api/Contact.php" method="post">
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
    <?php } ?>
</body>

</html>