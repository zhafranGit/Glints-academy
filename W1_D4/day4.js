// ! GIT -> control version untuk mengelola perubahan file di dalam folder (repo)
/**
 * VCS (Version Control System) -> sistemy yg mengelola perubahan dari sebuah dokumen
 * 
 * - Bekerja sama dg tim (source code berbeda)
 * - Tracking perubahan
 * - Collaboration
 * 
 * Fungsi :
 * 1. menyimpan perubahan source code
 * 2. berkolaborasi dg developer lain
 * 3. mengetahui kapan & siapa yg melakukan perubahan 
 * 4. bisa undo perubahan yg terjadi (git checkout)
 */

// * commit -> riwayat perubahan file disimpan (ctrl+s)
// *  git repo bisa bercabang (branch)
// * menggabungkan branch (merge)
// * command diatas bisa dilakukan local di komputer (asalkan terinstal git)


// ! GITHUB / GITLAB -> WEBSITE UNTUK UPLOAD FILE TANPA MENGINSTALL GIT 

// * bisa bekerja di github tnpa menginstall git 
// * conclusion -> layanan cloud untuk menyimpan  mengelola project /repo git (instagram programmer)
// ? di github/gitlab bisa melakukan commit,merge,branch (secara online)
// ? github/gitlab -> website yg menggunkan git

// ! jika menggabungkan keduanya -> bisa mengirim source code ke gitlab atau sebaliknya (push), mengambil source code ke dalam local (pull)

// * yang akan dipush dan dipull adalah commit 
// * syarat untuk bisa melakukannya harus dibuat secara Remote (clone)


/**
 * ! RECAP
 * * VERSION CONTROL SYSTEM -> MENYIMPAN MENGELOLA REKAMAN PERUBAHAN DARI SOURCE CODE
 * * GIT -> SALAH SATU SOFTWARE YG BISA MELAKUKAN VCS
 * * WEB UNTUK MENGELOLA PROJECT GIT
 */


/**
 * ! ISTILAH
 * ? REPO -> FOLDER PROJECT
 * ? COMMIT -> REKAMAN DARI REPO KITA
 * ? HASH -> PENANDA UNITK PADA SEBUAH COMMIT
 * ? CHCKOUT -> BERPINDAH KE SEBUAH COMMIT
 * ? BRANCH -> CABANG BEBAS DARI SEBUAH COMMIT (BISA DILAKUKAN OLEH ORANG LAIN MAUPUN KITA SENDIRI)
 * ? MERGE -> MENGGABUNGKAN 2 ATAU LEBIH BRANCH
 * ? REMOTE -> SUMBER YANG MEMILIKI REPO
 * ? CLONE -> MENGAMBIL REPO DARI REMOTE
 * ? PUSH -> MENGIRIM COMMIT KE REPO
 * ? PULL -> MENGAMBIL COMMIT KE REPO
 */


/**
 * ! BRANCH 
 * - membuat git branch 
 * - membuat rekaman tanpa mengganggu main branch
 * - feature experimental
 * - 2 / lebih orang yg mengerjakan repo yg sama
 */

// * Merge -> menggabungkan branch kembali ke main branch
// * Checkout -> berpidah ke branch / commit yg lain 
// * Pull req-> permission untuk menari perubahan 
// * Merge conflict-> baris yg sama diubah oleh 2branch yg berbeda


/**
 * ! FORK -> DUPLICATE REPO ORG LAIN YG BISA DI MODIF
 * * MEMBUAT COPY DAR REPO ORANG LAIN (BESERTA HISTORY NYA)
 * * MEMODIF TERHADAP REPO ORI
 * * CONTRIBUTE PADA REPO ORANG LAIN
 * * FORK!= CLONE
 * * FORK -> MENDUPLIKAT REPO ORANG LAIN KE DLM REPO KITA
 * * CLONE -> MENDUPLIKAT REMOTE DI GITLAB KE DALAM LOCAL COMPUTER
 */

/**
 * ! git command (local)
 * * git init
 * * git add <file>
 * * git status
 * * git commit
 * * git config
 * * git branch
 * * git help
 * * git log
 */

/**
 * * working tree
 * * staging area -> .GIT
 * * history -> .GIT
 */

// ! git config --global user.email ""
// ! git config --global user.name ""

// console.log(undefined + "2"); //semua tipe data ditambah string akan menjadi string
// console.log(NaN + "2");
// console.log(null + "2");
        // 0 1 2
var a = "cat";
// console.log(a.length);
// ! length -> panjang berawal 1
// ! index -> berawal dari 0
// console.log(a[3]);
// console.log(a[16]);
// console.log(a[a.length - 1]);
              // index = 44 - 1 = 43
// console.log(a[-1]);
// console.log(a[a.length]);

let arr = ["novel", "buku cerita", "fanfict", "fantasy"];
// console.log(arr[3]);
// arr.push('health')
// console.log(arr);
// console.log(arr[arr.length-1]); //mengakses index terakhir 
// console.log(arr[arr.length-1][arr.length]);

let arr2 = ["buku", "pensil", "botol minum", "earphone","penggaris"];
// console.log(arr2[0][3]);
// console.log(arr2[3][3]);
// console.log(arr2[0][0] + arr2[2][2]);

// arr2[3] = "penghapus"
// console.log(arr2);

arr2.shift()
arr2.pop()
arr2.unshift("kucing")
arr2.push("meo")
console.log(arr2);

console.log(null !== undefined); //true 
console.log(null != undefined); //false dianggap sama2 kosong 
// ! sama dengan (!==) && (===) dicek value dan data type
// ! (!=) && (==) di cek value saja