import $ from 'jquery';



function getUserDataById(id, func, data) {
    $.ajax({
        url: "https://dni-official.000webhostapp.com/servers/application-server/mysql/services/Work/getUserById.php",
        method: "POST",
        data: { id: id, data: data },
        success: function (output) {
            func(output, data);
            return output;
        }
    });
}


function getUserImageById(id, func, data) {
    $.ajax({
        url: "https://dni-official.000webhostapp.com/servers/application-server/mysql/services/Work/getUserImageById.php",
        method: "POST",
        data: { id: id, data: data },
        success: function (output) {
            console.log("Data received:", output);
            func(output, data);
            return output;
        }
    });
}


export function getUserById(id, func, data) {
    getUserDataById(id, function (o, d) {
        var objectOutput = JSON.parse(o);
        d.user.username = objectOutput.username;
        d.user.nickname = objectOutput.nickname;
        d.user.password = objectOutput.password;
        d.user.id = objectOutput.id;
        getUserImageById(id, function (o2, d2) {
            d2.user.profileImage = o2;
            func(o2, d2);
            return d2;
        }, data);
    }, data);

}







        // console.log("getUserImageById : Data -->  \n" + JSON.stringify(d2) + "\n\n");
        //    console.log("getUserImageById : Output -->  \n" + JSON.stringify(o2) + "\n\n\n\n");


        //  console.log("getUserById : Data -->  \n" + JSON.stringify(d) + "\n\n");
        // console.log("getUserById : Output -->  \n" + JSON.stringify(o) + "\n\n\n\n");