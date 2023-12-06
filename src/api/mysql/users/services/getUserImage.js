import $ from 'jquery';


export function getUserImageByIdx(id, func, data) {
    $.ajax({
        url: "https://dni-official.000webhostapp.com/servers/application-server/mysql/services/Work/getUserImageById.php",
        method: "POST",
        data: { id: id, data: data},
        success: function(output) {
            console.log("Data received:", output);
            func(output, data);
            return output;
        }
    });
}