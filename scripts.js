// The following code is for the GobblerConnect Search

function gobblerSearch(){
    const base_url = "https://gobblerconnect.vt.edu/organizations?query=";
    var raw_seach = document.getElementById("search").value;
    console.log(raw_seach);
    window.open(base_url.concat(raw_seach.split(' ').join("%20")), "_blank");
}
