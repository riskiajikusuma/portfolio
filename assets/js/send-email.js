(function(){
    emailjs.init({
        publicKey: "zKybvUjOBe9eXdeWO",
    });
})();

function sendMail() {
    let params = {
        from_name : document.getElementById("smName").value,
        email : document.getElementById("smEmail").value,
        subject : document.getElementById("smSubject").value,
        message : document.getElementById("smMessage").value
    }

    emailjs.send("service_01", "template_01", params).then(
        alert("Your message has been sent, Thank You!")
    )
}