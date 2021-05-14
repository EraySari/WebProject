function formcontrol(){
    var x=document.forms["myForm"]["ad"].value;
    if(x==""||x==null){
        alert("Lütfen adınızı giriniz.");
        return false;
    }

    var y=document.forms["myForm"]["soyad"].value;
    if(y==""||y==null){
        alert("Lütfen soyadınızı giriniz.");
        return false;
    }
    

    var k=document.forms["myForm"]["mesaj"].value;
    if(k==""||k==null){
        alert("Lütfen mesajınızı giriniz.");
        return false;
    }

    var mail = document.getElementById("email").value;
	var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+.)+([.])+[a-zA-Z0-9.-]{2,4}$/;
	if (regex.test(mail)!=true)
	{alert("Mail adresi geçersiz"); return false;}
	

    var radiourun = document.getElementsByName("gender");
    var radioadet ;
    radioadet = radiourun.length;
    var cinsiyet;
    cinsiyet = "" ;
    for (var i = 0; i < radioadet; i++) {
    if (radiourun[i].checked) {
    cinsiyet = radiourun[i].value;
    }
    }

    if (cinsiyet == "" ){
    alert("Lütfen cinsiyetinizi seçiniz.");
    return false ;
    }

    var t=document.forms["myForm"]["dtarihi"].value;
    if(t==""||t==null){
        alert("Lütfen doğum tarihinizi giriniz.");
        return false;
    }
}
