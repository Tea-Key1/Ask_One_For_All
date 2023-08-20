<?php if ($_POST) { ?>
    <form action="./Contact.php" method="post">
        名前<?php echo $_POST["fullname"] ?><br>
        メール<?php echo $_POST["email"] ?><br>
        お問い合わせ内容<?php echo  nl2br($_POST["message"]) ?><br>
        <input type="submit" name="back" value="戻る"></input>
        <input type="submit" name="send" value="送信"></input>
    </form>
<?php } else { ?>
<?php } ?>