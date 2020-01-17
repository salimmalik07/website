<?php
echo '<link rel="stylesheet" type="text/css" href="style.css">';

define('dbhost','localhost');
define('username','id8185361_localhost');
define('password','password');
define('db','id8185361_localhost');
$connect=new mysqli(dbhost,username,password,db);
$name=mysqli_real_escape_string($connect,$_POST['name']);
$email=mysqli_real_escape_string($connect,$_POST['email']);
$passwordr=mysqli_real_escape_string($connect,$_POST['passwordr']);
$dob=mysqli_real_escape_string($connect,$_POST['dob']);
$qualification=mysqli_real_escape_string($connect,$_POST['qualification']);
$number=mysqli_real_escape_string($connect,$_POST['number']);
$stmt=$connect->stmt_init();
    $stmt->prepare('SELECT * FROM Login WHERE email=? LIMIT 1');
    $stmt->bind_param('s',$email);
    $stmt->execute();
    $stmt->bind_result($email);
    $stmt->store_result();
    $rnum=$stmt->num_rows;
        if($rnum==0){
    $stmt=$connect->stmt_init();
    $stmt=$connect->prepare('INSERT INTO Login(email,name,password,dob,qualification,number) VALUE(?,?,?,?,?,?)');
    $stmt->bind_param('ssssss',$email,$name,$passwordr,$dob,$qualification,$number);
    $stmt->execute();
    echo "<h1>Registration Successful</h1>";
    $data=array();
if(file_exists('data.json'))
{
$current_data = file_get_contents('data.json');
$data=json_decode($current_data,true);
$extra = array(
    'email'=>$_POST['email'],
    'password'=>$_POST['passwordr'],
    'name'=>$_POST['name'],
    'dob'=>$_POST['dob'],
    'qualification'=>$_POST['qualification'],
    'number'=>$_POST['number']
);
array_push($data,$extra);
$final_data=json_encode($data);
    file_put_contents('data.json',$final_data);
}
        }
        else{
            die();
        }
?>
