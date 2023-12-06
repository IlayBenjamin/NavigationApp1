import $ from 'jquery';



export function getAllMessages(func, data) {
    $.ajax({
        url: "https://dni-official.000webhostapp.com/servers/application-server/mysql/services/Work/getAllMessages.php",
        method: "POST",
        data: {user: JSON.stringify(data.user)},
        success: function (output) {
            console.log(JSON.stringify(output));
            func(output, data);
            return output;
        }
    });
}

