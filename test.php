<?php
/**
 * Created by PhpStorm.
 * User: dmarkovic
 * Date: 11/06/14
 * Time: 2:52 PM
 */
?>
<p><strong>Have any questions or comments?</strong><br>Please feel free to send us an email through this form:</p>
<form role="form" id="contact" name="contact" id="contact" method="post" action="http://pmtdev.pie247.com/pie_webs/contact_form/">
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

