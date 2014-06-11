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

function makeCall()
{
    console.log('makeCall');
    jQuery("#submit2").click(function(e) {
        e.preventDefault();
        jQuery.ajax({
            type: "POST",
            url: "http://pmtdev.pie247.com/pie_webs/contact_form/",
            data: jQuery("form#contact").serialize(),
            dataType: 'jsonp',
            cache: false
        }).done(function(result) {
            $('.modal.in').modal('hide');
            //$('#myModal').modal('hide');
            alert("Done");
        }).fail(function() {
            //$('#myModal').modal('hide');
            $('.modal.in').modal('hide');
            alert("Done");
        });
    })//closing click
}//closing makeCall
