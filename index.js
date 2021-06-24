const firtsName='Kutay';
const lastName= 'Alaaddin';
const age=23
var LinkedinLink = document.getElementById('linkedinUrl')
var githubLink = document.getElementById('githubUrl')
document.getElementById("btn").style.color = "white";
document.getElementById("btn").style.backgroundColor = "red";
document.getElementById("btn").style.fontSize = "30px";
document.getElementById("btn").style.margin = "10px";
githubLink.href='https://github.com/kutayAlaaeddin'
LinkedinLink.href='https://www.linkedin.com/in/kutaiba-alaaddin/'
function getInfo(params) {
    

    document.getElementById('nameSurname').innerHTML=`${firtsName}  ${lastName}`;
    document.getElementById('age').innerHTML=age;
    document.getElementById("btn").style.display = "none";

}