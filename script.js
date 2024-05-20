            var alertElement = document.getElementById("alertElement");
            function alertMessage(content, timer = 3000) {
                alertElement.innerHTML = "<i class=" + '"bi-check-circle" style="margin-right: 15px;"' + "></i>" + content;
                alertElement.style.display = "block";
                setTimeout(function () {
                    alertElement.innerHTML = "";
                    alertElement.style.display = "none";
                }, timer);
            }
                                        var country = document.getElementById("country");
            var wanum = document.getElementById("wanum");
            var message = document.getElementById("message");
            var linkDialog = document.getElementById("linkDialog");
            var link = document.getElementById("link");
            let waurl;
            function generateLink() {
                if (country.value === "") {
                    alertMessage("please enter your country code");
                } else if (country.value.length > 3) {
                    alertMessage("please enter a valid country code");
                } else if (wanum.value === "") {
                    alertMessage("please enter your WhatsApp number");
                } else if (wanum.value.length !== 10) {
                    alertMessage("please enter a valid WhatsApp number!");
                } else {
                            if (message.value.trim() !== "") {
            waurl = "https://wa.me/" + country.value + wanum.value + "?text=" + encodeURIComponent(message.value);
        } else {
            waurl = "https://wa.me/" + country.value + wanum.value;
        }
                    link.value = waurl;
                    linkDialog.show();
                    alertMessage("link generated!");
                    country.value = "";
                    wanum.value = "";
                    message.value = "";
                }
            }
            function closeDialog() {
                linkDialog.close();
                alertMessage("now generate a new link!")
            }
            function openurl() {
                window.open(link.value);
                alertMessage("opening URL...");
            }
            function shareLink() {
                navigator.share({url: link.value});
                alertMessage("sharing link...");
            }
            function copyLink() {
    var copyText = document.getElementById("link");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
    alertMessage("Link copied to clipboard!");
}
