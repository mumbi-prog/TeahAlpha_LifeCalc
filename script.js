function calculateAge() {
    let dobInput = document.getElementById('dateofbirth').value;
    let mydateofbirth = new Date(dobInput);
    let today = new Date();

        if (mydateofbirth > today) {
            alert("Please add today's date or one in the past.");
            return;
        }

        const ageInMilliseconds = today.getTime() - mydateofbirth.getTime();
        const millisecondsinaday = 1000 * 60 * 60 * 24
        const ageInDays = Math.floor(ageInMilliseconds / millisecondsinaday);
        const years = Math.floor(ageInDays / 365);
        const months = Math.floor((ageInDays % 365) / 30);
        const days = ageInDays % 30;
     
}
