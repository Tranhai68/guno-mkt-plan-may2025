# GUNO MKT Plan - GAS Ready

Bộ file này đã chuẩn hóa để đẩy lên Google Apps Script Web App.

## File cần đưa lên Apps Script

- `Code.gs`
- `Index.html`
- `Admin.html`
- `Tracker.html`
- `Data.html`
- `appsscript.json` nếu dùng clasp

## Route khi deploy Web App

- Plan chính: `/exec?page=index`
- Admin: `/exec?page=admin`
- Tracker: `/exec?page=tracker`

Nếu mở `/exec` không có tham số, app tự vào Plan chính.

## Lưu dữ liệu

- Localhost/static: dữ liệu lưu bằng `localStorage`.
- Khi chạy trên GAS: `saveData()` vẫn lưu localStorage và đồng bộ thêm vào file Drive tên `guno_mkt_plan_family_data.json` trong tài khoản deploy.
- Lần mở sau, GAS sẽ nạp dữ liệu từ file Drive này trước, rồi mới render trang.

## Deploy thủ công

1. Vào [script.google.com](https://script.google.com) và tạo project mới.
2. Tạo/copy các file đúng tên như trên.
3. Vào `Deploy > New deployment > Web app`.
4. Chọn `Execute as: Me`.
5. Chọn quyền truy cập theo nhu cầu. Nếu share cho team, có thể chọn account domain hoặc anyone with link.
6. Deploy và cấp quyền Drive khi Google hỏi, vì admin cần file Drive để lưu dữ liệu dùng chung.

## Deploy bằng clasp

```bash
cd gas-ready
clasp create --type webapp --title "GUNO MKT Plan Gia Dinh"
clasp push
clasp deploy --description "GUNO MKT Plan Gia Dinh"
```

Sau khi deploy, mở URL `/exec?page=index`.
