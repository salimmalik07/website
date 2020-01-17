<?php
$data=array();
$emailec=$_POST['emailec'];
$name=$_POST['name'];
$email=$_POST['email'];
$dob=$_POST['dob'];
$qualification=$_POST['qualification'];
$number=$_POST['number'];
if(file_exists('data.json'))
{
$current_data = file_get_contents('data.json');
$data=json_decode($current_data,true);
foreach($data as $row)    {
        if($row["email"]==$emailec){
           $row["name"]=$name;
           $row["email"]==$email;
            $row["dob"]=$dob;
            $row["qualification"]=$qualification;
            $row["number"]=$number;
        }
        $newJsonString = json_encode($data);
    file_put_contents('data.json', $newJsonString); 
}
}
?>
