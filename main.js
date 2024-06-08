function updateDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
    };
    const formattedDateTime = now.toLocaleDateString('id-ID', options);

    document.getElementById('datetime').innerText = formattedDateTime;
}

setInterval(updateDateTime, 1000);
updateDateTime(); 

function handleSubmission() {
    var name = document.getElementById("employeeName").value;
    var address = document.getElementById("employeeAge").value;
    var email = document.getElementById("employeeEmail").value;
    var catTypes = [];
    var checkboxes = document.querySelectorAll('input[name="catType"]:checked');
    checkboxes.forEach((checkbox) => {
        catTypes.push(checkbox.value);
    });
    var gender = document.querySelector('input[name="gender"]:checked').value;

    if (name && address && email && catTypes.length > 0 && gender) {
        alert("Formulir Anda telah berhasil disubmit!");
        document.getElementById("peminatanForm").reset();
    } else {
        alert("Harap lengkapi semua bidang formulir.");
    }
}
