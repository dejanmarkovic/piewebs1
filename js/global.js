/**
 * Created by dmarkovic on 02/06/14.
 */
console.log('global');
jQuery(document).ready(function($) {
    setup_registration_form();
    setup_contact_form();
    makeCall();
});

function setup_registration_form()
{
    $("#submit").click(function () {
        $("#registration").submit();
    });

    $("#registration").validate(
        {
            rules: {
                enrollerKeyCode: {
                    minlength: 2,
                    required: true
                },
                fname: {
                    minlength: 2,
                    required: true
                },
                lname: {
                    minlength: 2,
                    required: true
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                enrollerKeyCode:  {
                    required: "Please enter the sponsor key of the person who directed you here."
                }
            },
            highlight: function(label) {
                jQuery(label).closest('.control-group').addClass('error');
            },
            success: function(label) {
                jQuery(label)
                    .closest('.control-group').addClass('success');
            }
        });
}

function setup_contact_form()
{
    /*
     $("#submit2").click(function () {
     $("#contact").submit();
     });
     */
    $("#contact").validate(
        {
            rules: {
                cfname: {
                    minlength: 2,
                    required: true
                },
                clname: {
                    minlength: 2,
                    required: true
                },
                cemail: {
                    required: true,
                    email: true
                },
                cmessage: {
                    minlength: 2,
                    required: true
                }
            },
            highlight: function(label) {
                jQuery(label).closest('.control-group').addClass('error');
            },
            success: function(label) {
                jQuery(label)
                    .closest('.control-group').addClass('success');
            }
        });
}


//ajaxurl = "http://jsfiddle.net/echo/jsonp/";

var myData;
function makeCall()
{
    console.log('makeCall');
    jQuery("#submit2").click(function(e) {
        e.preventDefault();
        console.log('click');
       // console.log(ajaxurl);

        //   $("#contact").submit();
        //$("#contact").submit();
        var cemail = "bzvz@bzb.com"; //$('#cemail').val();
        console.log(cemail);

        /*
        jQuery.ajax({

             //headers: {
             //Accept : "text/plain; charset=utf-8",
             //"Content-Type": "application/json; charset=utf-8"
             //},

            //type: "POST",
            type: "POST",
            url         : ajaxurl, // Location of the service
            // data        : {email: cemail},
            data: {
                text: 'some text',
                par1: 'another text'
            },
            /// data        : jQuery("form#callForm").serialize() + '&action=ltp_check_sponsor_key',
            /// data        : jQuery("form#callForm").serialize() + '&action=ltp_check_sponsor_key',
            //contentType:"application/json; charset=utf-8",
            // dataType:"json",
            dataType: 'jsonp', //
            success:function(data){
                console.log("ajax success");
                console.log(data);

            },
            error: function(e) {
                console.log(e.message);
                console.log('ajax not pass');
            }
        })//closing ajax
        */

      //  ajaxurl = "http://pmtdev.pie247.com/pie_webs/contact_form/";

        $.ajax({
            type: "POST",
            url: "http://pmtdev.pie247.com/pie_webs/contact_form/",
            data: jQuery("form#contact").serialize(),
            dataType: 'jsonp',
            cache: false
        }).done(function(result) {
            //if (result == "") self.submit();
            console.log('result');
           // console.dir('result');
            console.log('works');
        }).fail(function() {
            console.log('error');
        });

    })//closing click
}//closing makeCall
