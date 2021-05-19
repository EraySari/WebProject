<?php
	echo "ADI SOYADI <br/>";
	echo "<b>".$_POST['name'].' '. $_POST['surname']."</b><br/>";
	
	echo "E-MAİL ADRESİ <br/>";
	echo "<b>".$_POST['email']."</b><br/>";
	
	echo "CİNSİYET <br/>";
	echo "<b>".$_POST['gender']."</b><br/>";
	
	echo "D.TARİHİ <br/>";
	echo "<b>".$_POST['date']."</b><br/>";
	
	echo "BEGENDİGİ SAYFALAR <br/>";
	if(isset($_POST['begeni'])){
		$begeni=$_POST['begeni'];
		foreach($begeni as $h){
			echo $h."<br>";
		}
	}
	else{
		echo("Begenilen sayfa işaretlenmedi<br/>");
	}
	
	echo "İLETİSİM NEDENİ <br/>";
	echo "<b>".$_POST['neden']."</b><br/>";

    echo "MESAJI <br/>";
	echo "<b>".$_POST['mesaj']."</b><br/>";
	
	echo "<p> <a href='iletisim.html'>&lt;İletisim sayfasına geri dön&gt;</a></p> ";

?>