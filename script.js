$(document).ready(function(){
    $('#usernamevalidation').hide();
    $('#passwordvalidation').hide();
    $('confirmpasswordvalidation').hide();
    $('#emailvalidation').hide();

    var Error = true;
    var password_error = true;
    var confirmpassword_error = true;

    $('#username').keyup(function(){
        check_username();
    });

    function check_username(){
        var username_length = $('#username').val().length;
        if(username_length == ''){
            $('#usernamevalidation').html('Username is required');
            $('#usernamevalidation').show();
            $('#usernamevalidation').css('color', 'red');
            Error = false;
            return false;
        }
        else{
            $('#usernamevalidation').hide();
            Error = true;
        }
        if(username_length < 4 || username_length > 20){
            $('#usernamevalidation').html('Username must be atleast 4 and less than or equal to 20 characters');
            $('#usernamevalidation').css('color', 'red');
            $('#usernamevalidation').show();
            Error = false;
            return false;

        }else{
            $('#usernamevalidation').hide();
            Error = true;
        }
    }

    $('#password').keyup(function(){
        check_password();
    });

    function check_password(){
        var password_length = $('#password').val().length;
        if(password_length == ''){
            $('#passwordvalidation').html('Password is required');
            $('#passwordvalidation').show();
            $('#passwordvalidation').css('color', 'red');
            password_error = false;
            return false;
        }
        else{
            $('#passwordvalidation').hide();
            password_error = true;
        }
        if(password_length < 8 || password_length > 20){
            $('#passwordvalidation').html('Password must be more than 8 and less than or equal to 20 characters');
            $('#passwordvalidation').css('color', 'red');
            $('#passwordvalidation').show();
            password_error = false;
            return false;

        }else{
            $('#passwordvalidation').hide();
            password_error = true;
        }
    }

    $('#confirmpassword').keyup(function(){
        check_confirmpassword();
    });

    function check_confirmpassword(){
        var confirm_password = $('#confirmpassword').val();
        var password = $('#password').val();
        if(confirm_password != password){
            $('#confirmpasswordvalidation').html('Password does not match');
            $('#confirmpasswordvalidation').css('color', 'red');
            $('#confirmpasswordvalidation').show();
            confirmpassword_error = false;
            return false;
        }
        else{
            $('#confirmpasswordvalidation').hide();
            confirmpassword_error = true;
        }
    }

    $('#email').keyup(function(){
        check_email();
    });

    function check_email(){
        var email_length = $('#email').val().length;
        if(email_length == ''){
            $('#emailvalidation').html('Email is required');
            $('#emailvalidation').show();
            $('#emailvalidation').css('color', 'red');
            Error = false;
            return false;
        }
        else{
            $('#emailvalidation').hide();
            Error = true;
        }
        if(email_length < 4 || email_length > 20){
            $('#emailvalidation').html('Email must be atleast 4 and less than or equal to 20 characters');
            $('#emailvalidation').css('color', 'red');
            $('#emailvalidation').show();
            Error = false;
            return false;

        }else{
            $('#emailvalidation').hide();
            Error = true;
        }

        var email_val = $('#email').val();
        var regex = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
        if(!regex.test(email_val)){
            $('#emailvalidation').html('Invalid Email');
            $('#emailvalidation').css('color', 'red');
            $('#emailvalidation').show();
            Error = false;
            return false;
        }
    }

    $('#submitvalidation').click(function(){
        check_username();
        check_password();
        check_confirmpassword();
        // check_email();
        if(Error == true && password_error == true && confirmpassword_error == true){
            return true;
        }
        else{
            return false;
        }
    });


});