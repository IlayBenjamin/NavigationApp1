import $ from "jquery";

export function insertMessage(func, data) {
    $.ajax({
        url: "https://dni-official.000webhostapp.com/servers/application-server/mysql/services/Work/insertMessage.php",
        method: "POST",
        data: {
            userId: data.message.userId,
            content: data.message.content,
            icon: data.message.icon,
            sender: data.message.sender
        },
        success: function (output) {
            data.message.id = parseInt(output);
            //sendToWebSocketServer(data.message);
            func(output, data);
            return output;
        },
    });
}

