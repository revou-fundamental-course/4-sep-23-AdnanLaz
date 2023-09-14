function sembunyiKeliling() {
    const tombolKeliling = document.getElementById("tombol_keliling");
    var element = document.getElementById("elementyangdisembunyikankeliling");
    if (element.style.display === "block") {
        element.style.display = "none";
        tombolKeliling.textContent = "Tampilkan Hitungan Keliling";
    } else {
        element.style.display = "block";
        tombolKeliling.textContent = "Sembunyikan Tampilan Keliling";
    }
}

function sembunyiLuas() {
    const tombolLuas = document.getElementById("tombol_luas");
    var element = document.getElementById("elementyangdisembunyikanluas");
    if (element.style.display === "block") {
        element.style.display = "none";
        tombolLuas.textContent = "Tampilkan Hitungan Luas";
    } else {
        element.style.display = "block";
        tombolLuas.textContent = "Sembunyikan Tampilan Luas";
    }
}

function hitungK() {
    var Sisi = parseFloat(document.getElementById("sisiK").value);
    if (isNaN(Sisi)) {
        alert("Masukan Nilasi Sisi Yang Ingin Dihitung Keliling Dengan Benar Ya :)")
    } else {
        var hasil = 4 * Sisi;

        document.getElementById("v_sisiK").textContent = Sisi;
        document.getElementById("hasilkeliling").textContent = hasil;

        var element = document.getElementById("elementyangdisembunyikanhitunganK");
        if (element.style.display === "none") {
            element.style.display = "block";
        } else {
            element.style.display = "block";
        }
    }


}

function hitungL() {
    var Sisi = parseFloat(document.getElementById("sisiL").value);
    if (isNaN(Sisi)) {
        alert("Masukan Nilai Sisi Yang Ingin Dihitung Luas Dengan Benar Ya :)")
    } else {
        var hasil = Sisi * Sisi;

        document.getElementById("v_sisiL1").textContent = Sisi;
        document.getElementById("v_sisiL2").textContent = Sisi;
        document.getElementById("hasilLuas").textContent = hasil;

        var element = document.getElementById("elementyangdisembunyikanhitunganL");

        if (element.style.display === "none") {
            element.style.display = "block";
        } else {
            element.style.display = "block";
        }
    }

}

function HapusK() {
    var Sisi = document.getElementById("sisiK");
    Sisi.value = "";
    var element = document.getElementById("elementyangdisembunyikanhitunganK");

    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "none";
    }
}

function HapusL() {
    var Sisi = document.getElementById("sisiL");
    Sisi.value = "";
    var element = document.getElementById("elementyangdisembunyikanhitunganL");

    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "none";
    }
}