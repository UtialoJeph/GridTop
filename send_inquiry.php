<?php
$server_name='localhost';
$username='root';
$password='';
$database_name="gridtop_dbase";

 $conn=mysqli_connect($server_name,$username,$password,$database_name);
//check the connection
 if(!$conn)
{
    die("Connection Failed:" .mysqli_connect_error());
}
// echo'Connection successful.';

//The PHP code for inquiry submission

if(isset($_POST['save']))
{
    $First_Name=$_POST['First_Name'];
    $Last_Name=$_POST['Last_Name'];
    $Email_Address=$_POST['Email_Address'];
    $Phone_Number=$_POST['Phone_Number'];
    $Service_Needed=$_POST['Service_Needed'];
    $Details=$_POST['Details'];

    $sql_query = "INSERT INTO send_inquiry_table (First_Name,Last_Name,Email_Address,Phone_Number,Service_Needed,Details)
    VALUES ('$First_Name','$Last_Name','$Email_Address','$Phone_Number','$Service_Needed','$Details')";


    if(mysqli_query($conn, $sql_query))
    {
        echo"Inquiry successfully, We will get in touch soon";
    }
    else
    {
     echo "Error: " . $sql . "" . mysqli_error($conn);
     }
     mysqli_close($conn);
    }
 ?>