$(document).ready(function () {
    $('.table2').css('display','none');
    $('.update').css('display','none');
    $('#theme').text('Light Theme');  
 });
$('.signup').on('click',function(e){
        $('.login-container').css('display','none');
        $('.register-container').css('display','inline');
        $('#title').text('Registeration');
        e.preventDefault();
        
    })

    $('#login').on('click',function(e){
        $('.login-container').css('display','inline');
        $('.register-container').css('display','none');
        $('#title').text('Login');
        e.preventDefault();
        
    })
$('#switch').on('click', () => {
    if ($('#switch').prop('checked')) {
        $('body').css('background','#424242');
        $('#theme').text('Dark Theme');
        $('#theme').css('color','#9E9E9E');
        $('label').css('color','#424242');
    } else {
        $('body').css('background','#CFD8DC');
        $('#theme').text('Light Theme');
        $('#theme').css('color','#9E9E9E');
        $('label').css('color','black');
   
    }
})

$('#register').on('click',()=>{
    event.preventDefault();
    
    var email=$('#emailr').val();
    var password=$('#passwordr').val();
    var name=$('#name').val();
    var dob=$('#dob').val();
    var qualification=$('#qualification').val();
    var number=$('#number').val();
    if(email != '' && password != '' && name != '' && dob != '' && qualification != '' &&  number != ''){
        $.ajax({   
            type: "POST",
            url: "register.php",             
            data: {
               'email':email,
               'passwordr':password,
               'name':name,
               'dob':dob,
               'qualification':qualification,
               'number':number,
            },            
            success: function(response){     
                
            swal({
                title: "Regsitration Successful!",
                text: 'Thank you for registering!',
                icon: "success",
                button: "Sign-In",
            })
            .then((value) => {
                $('.login-container').css('display','inline');
                $('.register-container').css('display','none');
                $('#title').text('Login');
                e.preventDefault();
            });               
                $(".register")[0].reset();
                           
            }
            
    
          });
    
       
    }
    else{
        swal("Fields are empty!");

    }
    
})
$('#login').on('click',()=>{
    var email=$('#email').val();
    var password=$('#password').val();
    if(email != '' && password != '' ){

        $.ajax({
            url:'data.json',
            dataType:'json',
            type: 'post',
            cache: 'false',
            success: function(data){
                $(data).each(function(index,value){
                    if(email == value.email && password == value.password){
                        $('.login-container').css('display','none');
                        $('.register-container').css('display','none');
                        $('.table2').css('display','inline');
                        console.log(value);
                        var vluelist={};
                        valuelist=value;
                        var jname=value.name;
                        $('#rname').text(value.name);
                        var jemail=value.email;
                        $('#remail').text(value.email);
                        var jdob=value.dob;
                        $('#rdon').text(value.dob);
                        var jqualification=value.qualification;
                        $('#rqualification').text(value.qualification);
                        var jnumber=value.number;
                        $('#rnumber').text(value.number);
                        $('#mydata').mirandajs(valuelist);
                    }
                    else{

                    }
                    
                })
            }
        })
    }
    else{
        swal("Fields are empty!");
    }
    
})
$('#edit').on('click',()=>{
    $('.login-container').css('display','none');
    $('.register-container').css('display','none');
    $('.table2').css('display','none');
    $('.update').css('display','inline');
    $('#title').val('');
    var oemail=$("#remail").text();
    var oname=$("#rname").text();
    var odob=$("#rdob").text();
    var oqualification=$("#rqualification").text();
    var onumber=$("#rnumber").text();
    onumber = parseInt(onumber);

    $('#emailc').val(oemail);
    $('#namec').val(oname);
    $('#dobc').val(odob);
    $('#qualificationc').val(oqualification);
    $('#numberc').val(onumber);

   

   
})
$('#update').on('submit',()=>{
    var email=$("#emailc").text();
    var name=$("#namec").text();
    var dob=$("#dobc").text();
    var qualification=$("#qualificationc").text();
    var number=$("#numberc").text();
    var emailec=$("#remail").text();

    $.ajax({   
        type: "POST",
        url: "modify.php",             
        data: {
            'emailec':emailec,
           'email':email,
           'name':name,
           'dob':dob,
           'qualification':qualification,
           'number':number,
        },            
        success: function(response){     
            
        swal({
            title: "Update Successful!",
            text: 'data is been updated!',
            icon: "success",
            button: "okay",
        })
        .then((value) => {
            $('.login-container').css('display','none');
            $('.register-container').css('display','none');
            $('.table2').css('display','inline');
            e.preventDefault();
        });               
            $(".modify")[0].reset();
                       
        }
        

      });
})
$('#pass').on('click',()=>{
    $('.login-container').css('display','none');
    $('.register-container').css('display','none');
    $('.table2').css('display','none');
    $('.password').css('display','inline');

})
