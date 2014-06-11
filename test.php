<?php
/**
 * Created by PhpStorm.
 * User: dmarkovic
 * Date: 11/06/14
 * Time: 2:52 PM
 */
?>
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <style>

    </style>
</head>
<body>
<p><strong>Have any questions or comments?</strong><br>Please feel free to send us an email through this form:</p>
<form role="form" id="contact" name="contact" method="post">
    <div class="form-group">
        <label for="cfname" class="color-pie-orange">First Name</label>
        <input type="text" class="form-control" id="cfname" name="cfname" placeholder="Your name...">
    </div>
    <div class="form-group">
        <label for="clname" class="color-pie-orange">Last Name</label>
        <input type="text" class="form-control" id="clname" name="clname" placeholder="Your name...">
    </div>
    <div class="form-group">
        <label for="cemail" class="color-pie-orange">Email</label>
        <input type="email" class="form-control" id="cemail" name="cemail" placeholder="Your email...">
    </div>
    <div class="form-group">
        <label for="cmessage" class="color-pie-orange">Message</label>
        <textarea class="form-control" id="cmessage" name="cmessage" rows="3" placeholder="Your message..."></textarea>
    </div>
    <input type="hidden" name="from" value="{{profile.email}}">
    <button type="submit" id="submit2" class="btn btn-success">Send Email</button>
</form>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="js/jquery.validate.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/global.js"></script>

</body>
</html>

