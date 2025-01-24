document.querySelector('.click-to-enter').addEventListener('click', function() {
    this.classList.add('hide');
    
    document.querySelector('.main-content').classList.add('show');

    var video = document.getElementById('background-video');
    video.muted = false;
    video.play();
});

function copyEthereumAddress() {
    navigator.clipboard.writeText("......");
    alert("Ethereum address copied to clipboard!");
}

function copyLitecoinAddress() {
    navigator.clipboard.writeText(".....");
    alert("Litecoin address copied to clipboard!");
}

function copydiscorduser() {
    navigator.clipboard.writeText(".....");
    alert("Discord User copied to clipboard!");
}

function copyemail() {
    navigator.clipboard.writeText("....");
    alert("Email copied to clipboard!");
}
