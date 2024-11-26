# Tugas 9 - Pertemuan 10 & Tugas 10 - Pertemuan 11

- **Nama** : Arya Galuh Saputra
- **NIM** : H1D022022
- **Shift Lama** : C
- **Shift Baru** : B

## Screenshot & Penjelasan

### 1. Login Page

<img src="images/login.png" height="500">

Tampilan halaman login aplikasi yang menyediakan tombol "Sign In with Google" untuk memulai autentikasi.

### 2. Proses Login Google

<img src="images/select.png" height="500">

Munculnya popup pilihan akun Google saat pengguna menekan tombol login.

<img src="images/continue.png" height="500">

Persetujuan izin akses yang diminta oleh aplikasi dari akun Google pengguna.

### 3. Home Page

<img src="images/home.png" height="500">

Tampilan halaman utama aplikasi setelah login berhasil, berisi navigasi dan konten utama.

### 4. Profile Page

<img src="images/profile.png" height="500">

Halaman profil yang memuat informasi pengguna dari akun Google, seperti nama, email, dan foto profil.

## Alur Kerja Autentikasi

1. **Inisialisasi Firebase dan Google Auth**
   - Aplikasi dimulai dengan mengonfigurasi Firebase menggunakan kredensial dari Firebase Console.
   - Menyiapkan penyedia Google Auth dengan Client ID yang diperoleh dari Google Cloud Console.

   ```typescript
   const firebaseConfig = {
   apiKey: "YOUR_API_KEY",
   authDomain: "YOUR_AUTH_DOMAIN",
   projectId: "YOUR_PROJECT_ID",
   // ...other config
   };

   const firebase = initializeApp(firebaseConfig);
   const auth = getAuth(firebase);
   ```

2. **Proses Login**
   - Pengguna menekan tombol "Sign In with Google".
   - Aplikasi menginisialisasi Google Auth dengan Client ID yang telah diatur sebelumnya.
   - Muncul popup untuk memilih akun Google.
   - Pengguna memilih akun dan memberikan izin akses yang diperlukan.
   - Aplikasi menerima token autentikasi dari Google.
   - Token tersebut diverifikasi oleh Firebase.
   - Data pengguna disimpan dalam Firebase Authentication.

   ```typescript
   const loginWithGoogle = async () => {
   try {
      await GoogleAuth.initialize({
         clientId: "YOUR_CLIENT_ID",
         scopes: ["profile", "email"],
         grantOfflineAccess: true,
      });
      const googleUser = await GoogleAuth.signIn();
      const credential = GoogleAuthProvider.credential(
         googleUser.authentication.idToken
      );
      await signInWithCredential(auth, credential);
      router.push("/home");
   } catch (error) {
      console.error("Google sign-in error:", error);
      // Handle error
   }
   };
   ```

3. **Pengelolaan State dan Data Pengguna**
   - Data pengguna dikelola menggunakan Pinia store.
   - Informasi seperti foto profil, nama, dan email diambil dari data akun Google.
   - Status autentikasi dipantau menggunakan `onAuthStateChanged`.
   - Router guard digunakan untuk melindungi halaman yang memerlukan autentikasi.

4. **Implementasi Teknis**
   - Memanfaatkan `@codetrix-studio/capacitor-google-auth` untuk menangani proses Google Sign-In.
   - Melakukan error handling untuk menangani kasus kegagalan login.
   - Menyiapkan router navigation guard untuk melindungi route.
   - Mengimplementasikan fungsi logout untuk membersihkan state dan mengarahkan kembali ke halaman login.


## Screenshot & Penjelasan CRUD 


### 1. Create Todo

<img src="images/afterlogin.png" height="500">

Tampilan awal setelah login.

<img src="images/create1.png" height="500">
<img src="images/create2.png" height="500">
<img src="images/create3.png" height="500">

Fitur ini untuk membuat todo baru dengan memasukkan title dan deskripsi. Klik tombol "+" di pojok kanan bawah untuk membuka modal input. Setelah data diisi, tekan "Add Todo" untuk menyimpan ke Firestore.


### 2. Read Todo

<img src="images/read.png" height="500">

Daftar todo ditampilkan dalam dua bagian: Active Todos dan Completed Todos. Setiap todo menampilkan informasi seperti:
- Title
- Deskripsi
- Waktu relatif
- Status (aktif/selesai)


### 3. Update Todo

<img src="images/update1.png" height="500">
<img src="images/update2.png" height="500">
<img src="images/update3.png" height="500">
<img src="images/update4.png" height="500">

Untuk mengedit todo:
- Geser todo ke kanan, lalu klik ikon pensil
- Modal edit akan terbuka dengan informasi todo yang dipilih
- Ubah title atau deskripsi sesuai kebutuhan
- Tekan tombol "Edit Todo" untuk menyimpan perubahan


### 4. Delete Todo

<img src="images/delete1.png" height="500">
<img src="images/delete2.png" height="500">

Ada dua cara untuk menghapus todo:
- Geser todo ke kiri, lalu klik ikon tempat sampah
- Konfirmasi penghapusan akan muncul
- Todo akan dihapus langsung dari Firestore


### 5. Toggle Todo Status

<img src="images/completed1.png" height="500">
<img src="images/completed2.png" height="500">
<img src="images/completed3.png" height="500">

Untuk mengganti status todo:
- Geser todo ke kanan, lalu klik ikon centang untuk mengubah statusnya
- Todo akan berpindah antara bagian Active dan Completed
- Perubahan status disimpan di Firestore dengan mencatat timestamp pembaruan