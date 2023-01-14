var hitung = -1;
var klikSekali = 0;
var pesan = ["Baaaaaaaaaaa... eee... itu aja wkwkwk", "Hmmm aku lupa yang benar yang mana", "Jawaban anda benar!!, mungkin... XD", "Coba lagi hehehe", "Selamat anda mendapatkan oksigen!!"];

function kartua() {
    if (hitung >= 4) {
        hitung = -1;
    }

    hitung++;
    klikSekali++;

    if (klikSekali == 2) {
        document.getElementById("kartua").innerHTML = "????????.";
        klikSekali = 0;
        hitung--;
    } else {
        document.getElementById("kartua").innerHTML = pesan[hitung];
    }

    document.getElementById("kartub").innerHTML = "????????.";
    document.getElementById("kartuc").innerHTML = "????????.";
}
function kartub() {
    if (hitung >= 4) {
        hitung = -1;
    }

    hitung++;
    klikSekali++;

    if (klikSekali == 2) {
        document.getElementById("kartub").innerHTML = "????????.";
        klikSekali = 0;
        hitung--;
    } else {
        document.getElementById("kartub").innerHTML = pesan[hitung];
    }

    document.getElementById("kartua").innerHTML = "????????.";
    document.getElementById("kartuc").innerHTML = "????????.";
}
function kartuc() {
    if (hitung >= 4) {
        hitung = -1;
    }

    hitung++;
    klikSekali++;

    if (klikSekali == 2) {
        document.getElementById("kartuc").innerHTML = "????????.";
        klikSekali = 0;
        hitung--;
    } else {
        document.getElementById("kartuc").innerHTML = pesan[hitung];
    }

    document.getElementById("kartua").innerHTML = "????????.";
    document.getElementById("kartub").innerHTML = "????????.";
}

function batu(jemuran) {
    document.getElementById("button-tampil-a").innerHTML = "Tampilkan";
    document.getElementById("button-tampil-b").innerHTML = "Tampilkan";
    document.getElementById("button-tampil-c").innerHTML = "Tampilkan";
    document.getElementById("button-tampil-d").innerHTML = "Tampilkan";
    document.getElementById("button-tampil-e").innerHTML = "Tampilkan";

    switch (jemuran) {
        case "a":
            document.getElementById("tampil").src = "../img/batu/a.jpg";
            document.getElementById("button-tampil-a").innerHTML = "Sedang DiTampilkan";
            break;
        case "b":
            document.getElementById("tampil").src = "../img/batu/b.jpg";
            document.getElementById("button-tampil-b").innerHTML = "Sedang DiTampilkan";
            break;
        case "c":
            document.getElementById("tampil").src = "../img/batu/c.jpg";
            document.getElementById("button-tampil-c").innerHTML = "Sedang DiTampilkan";
            break;
        case "d":
            document.getElementById("tampil").src = "../img/batu/d.jpg";
            document.getElementById("button-tampil-d").innerHTML = "Sedang DiTampilkan";
            break;
        case "e":
            document.getElementById("tampil").src = "../img/batu/a.jpg";
            document.getElementById("button-tampil-e").innerHTML = "Sedang DiTampilkan";
            break;
        default:
            document.getElementById("tampil").src = "../img/batu/dummy.jpg";
    }
}
