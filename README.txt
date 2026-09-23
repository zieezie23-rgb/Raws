CHECK RAWS PWA
================
Cara pakai:
1. Jalankan melalui web server/hosting HTTPS (misalnya GitHub Pages) agar PWA dan Service Worker aktif.
2. Upload 5 bahan dari folder Bahan:
   - MASTER STOCK ...xlsx
   - LaporanLPPvsPlano...csv
   - ListingPlanogram...csv yang memiliki kolom QTY = DISPLAY
   - ListingPlanogram...csv yang memiliki kolom QTY_IN_STORAGE = STORAGE
   - PLU.csv
3. Klik Proses Rekap.
4. Tabel 1 dan Tabel 2 dibuat otomatis.

Catatan:
- Aplikasi bekerja di browser; tidak membutuhkan Google Sheets/database.
- File Check Raws.xlsx dipakai sebagai referensi struktur hasil, bukan bahan wajib.
- Versi ini mengenali file berdasarkan nama kolom sehingga nama file boleh berubah.
- SheetJS diambil dari CDN pada pemakaian pertama; setelah Service Worker menyimpan resource, aplikasi dapat digunakan kembali sesuai cache browser.
