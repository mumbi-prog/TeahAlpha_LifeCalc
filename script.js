function calculateAge() {
    let dobInput = document.getElementById('dateofbirth').value;
    let mydateofbirth = new Date(dobInput);
    let today = new Date();

        if (mydateofbirth > today) {
            alert("Please add today's date or one in the past.");
            return;
        }
  
}
