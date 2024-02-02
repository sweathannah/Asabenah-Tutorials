function formatDateTime() {
    var currentDateTime = new Date();

    var year = currentDateTime.getFullYear();
    var month = (currentDateTime.getMonth() + 1).toString().padStart(2, '0');
    var day = currentDateTime.getDate().toString().padStart(2, '0');
    var hours = currentDateTime.getHours().toString().padStart(2, '0');
    var minutes = currentDateTime.getMinutes().toString().padStart(2, '0');

    var formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;

    alert("Formatted Date and Time:\n\n" +
        "Format (YYYY-MM-DD HH:mm): " + formattedDateTime);
}

// Call the function when the page loads
formatDateTime();
