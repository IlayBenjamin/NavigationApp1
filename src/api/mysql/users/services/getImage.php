<?php

    $servername = "localhost";
    $username = "id21177325_dnidb_admin";
    $password = "ilayBenjamin_2003";
    $dbname = "id21177325_dnidb";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }


    $username = "BrunoRamirazMasado";
    $nickname = "BrunoLatina";
    $password = "araka2003";
    
    $imagePath =__DIR__ . ('/bruno.png');
    
    // Read the image file
    $blob = addslashes(file_get_contents($imagePath));
    
    $sql = "INSERT INTO users (username, nickname, password, profileImage) VALUES (?, ?, ?, ?)";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssb", $username, $nickname, $password, $blob);
    
    if ($stmt->execute()) {
        echo "User data inserted successfully.";
    } else {
        echo "Error inserting user data.";
    }
    
    $stmt->close();
    $conn->close();
?>
    





####################################################################################
====================================================================================
====================================================================================
************                    Second Get User Function                *************
====================================================================================
====================================================================================
####################################################################################




export function getCompletedUserById2(id, func, data) {

var funcGetProfileImage = (output2, data2) => {
    console.log("GetProfileImage-Output: " + JSON.stringify(output2));
    var img = document.getElementById("menu_user_icon");
    img.src = output2;
    img.onload = function () {
        URL.revokeObjectURL(output2);
    };
    //data2.user.profileImage = output2;
    var results = func(output2, data2);
    console.log("GetProfileImage-Func-Return: " + JSON.stringify(data2));
    return data2;
}

var funcGetUser = (output2, data2) => {
    $(document).ready(function () {
        console.log("GetUser-Output: " + JSON.stringify(output2));
        data2.user.id = output2.id;
        data2.user.username = output2.username;
        data2.user.nickname = output2.nickname;
        data2.user.password = output2.password;
        data2.user.profileImage = getUserImageById(id, funcGetProfileImage, data2 );
        console.log("GetUser-Func-Return: " + JSON.stringify(data2));
        return data2;
    });

}

getUserById(id, funcGetUser, data);
}






####################################################################################
====================================================================================
====================================================================================
************                    First Get User Function                *************
====================================================================================
====================================================================================
####################################################################################



var user = props.user;
    var id = user.id;
    var data = {id: id, user: user};

    var funcGetUser = (response, data) => {
        $(document).ready(function () {
            data.user.username = response.username;
            data.user.nickname = response.nickname;
            data.user.password = response.password;
            var funcGetProfileImage = (r, d) => {
                var img = document.getElementById("menu_user_icon");
                img.src = r;
                img.onload = function () {
                    URL.revokeObjectURL(r);
                };
                d.user.profileImage = r;
                return d;
            }
            var userData = getUserImageById(data.id, funcGetProfileImage, data);
                return data.user;    
        });
    }

    var funcGetCompleteUser = (response, data) => { 
        $(document).ready(function () {
            console.log("Data: " + JSON.stringify(data) + "\n" + "Response: " + response);
        });
    }

    $(document).ready(function () {
      //  user = getUserById(id, funcGetUser, data);
      user = getCompletedUserById(id, funcGetCompleteUser, data)
    });
