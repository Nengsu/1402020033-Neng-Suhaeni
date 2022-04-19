/**
 @author Neng Suhaeni / 1402020033
 DPW kelas A
 Semangat Ngoding!!!
*/

$(document).ready(function() {
    // Function ini untuk menonaktifkan huruf dan simbol
    $(".notlp").keypress(function(key) {
        var key = key.which;
        let x = false;
        if (key != 8 && key != 0 && (key  < 48 || key > 57)) {
            return x;
        }
    });
    
    // Untuk mengatur perubahan pada saat mengklik Pulsa
    $("#pulsa").click(function() {
        $(".nominal").show();
        $(".tblPulsa").show();
        $(".nominal2").hide();
        $(".tblpData").hide();
        $("#pulsa").css("border-bottom", "2px solid #03ac0e");
        $("#pulsa").css("color", "#03ac0e");
        $("#pdata").css("color", "black");
        $("#pdata").css("border-bottom", "2px solid transparent");
    });

    // Untuk mengatur perubahan pada saat mengklik Paket Data
    $("#pdata").click(function() {
        $(".nominal").hide();
        $(".tblPulsa").hide();
        $(".nominal2").prop("hidden", false);
        $(".nominal2").show();
        $(".tblpData").prop("hidden", false);
        $(".tblpData").show();
        $("#pdata").css("border-bottom", "2px solid #03ac0e");
        $("#pdata").css("color", "#03ac0e");
        $("#pulsa").css("color", "black");
        $("#pulsa").css("border-bottom", "2px solid transparent");
    });

    // Untuk mengatur perubahan pada tombol Pulsa
    $(".nominal").change(function() {
        $(".tblPulsa").prop("disabled", false);
        $(".tblPulsa").css("color", "white");
        $(".tblPulsa").css("background-color", "#F75C18");
    });

    // Untuk mengatur perubahan pada tombol Paket Data
    $(".nominal2").change(function() {
        $(".tblpData").prop("disabled", false);
        $(".tblpData").css("color", "white");
        $(".tblpData").css("background-color", "#F75C18");
    });

    // Untuk mengatur perubahan pada pilih Pulsa dan Paket Data
    $(".notlp").change(function() {
        if ($(".notlp").val() > 0) {
            $(".nominal").prop("disabled", false);
            $(".nominal2").prop("disabled", false);
        }
       
        // Untuk mengatur perubahan dan memberikan kondisi pada saat mengklik tombol Pulsa 
        $(".tblPulsa").click(function () {
            var hargaPls = parseInt($(".nominal").val());
            var temp = "";
            let knfrm = confirm("Pembelian pulsa sebesar " + hargaPls + " ke nomor " + $(".notlp").val());
            if (hargaPls >= 10000) {
                temp = hargaPls + 2000;
            }else{
                temp = hargaPls + 3000; 
            }

            if (knfrm == true) {
                alert("Total harga pulsa Rp. " + temp + ",- ke nomor " + $(".notlp").val() + " sedang di proses. Terima Kasih :)");                   
            }
        });

        // Untuk mengatur perubahan dan memberikan kondisi pada saat mengklik tombol Paket Data
        $(".tblpData").click(function () {
            var hargaPD = $(".nominal2").val();
            var temp = "";
            let knfrm = confirm("Pembelian paket data " + hargaPD + " ke nomor " + $(".notlp").val());
            if (hargaPD === "Internet 10 GB") {
                temp = "30.500";
            }if (hargaPD === "Internet 15 GB") {
               temp = "43.000";
            }if (hargaPD === "Internet Combo Unlimited (Kuota Malam)") {
                temp = "20.000";
            }if (hargaPD === "Internet Combo Unlimited") {
                temp = "70.000";
            }

            if (knfrm == true) {
                alert("Total harga paket data Rp. " + temp + ",- ke nomor " + $(".notlp").val() + " sedang di proses. Terima Kasih :)");                   
            }
        });
    });
});