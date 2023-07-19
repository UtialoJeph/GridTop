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
//echo'Connection successful.';

//The PHP code for ticket submission
if(isset($_POST['save']))
{
    $First_Name=$_POST['First_Name'];
    $Last_Name=$_POST['Last_Name'];
    $Email_Address=$_POST['Email_Address'];
    $Phone_Number=$_POST['Phone_Number'];
    $Product_Name_inQuest=$_POST['Product_Name_inQuest'];
    $The_Problem=$_POST['The_Problem'];
    $Relevant_Link=$_POST['Relevant_Link'];
    $Details_of_problem=$_POST['Details_of_problem'];

    $sql_query = "INSERT INTO submit_ticket_table (First_Name,Last_Name,Email_Address,Phone_Number,Product_Name_inQuest,The_Problem,Relevant_Link,Details_of_problem)
    VALUES ('$First_Name','$Last_Name','$Email_Address','$Phone_Number','$Product_Name_inQuest','$The_Problem','$Relevant_Link','$Details_of_problem')";


    if(mysqli_query($conn, $sql_query))
    {
        echo"Ticket submitted successfully, We will get in touch soon";
    }
    else
    {
     echo "Error: " . $sql . "" . mysqli_error($conn);
     }
     mysqli_close($conn);
    }
  ?>


