# NIPT — Cẩm nang sàng lọc xét nghiệm NIPT

**NIPT** là cẩm nang sàng lọc xét nghiệm NIPT, được xây dựng bằng cách sử dụng framework tài liệu [**Blume**](https://useblume.dev) (phát triển dựa trên Astro và Vite).

## Develop Locally (Phát triển cục bộ)

Để bắt đầu, hãy đảm bảo bạn đã cài đặt [Node.js](https://nodejs.org) và [Bun](https://bun.com) trên hệ thống của mình. Sau đó, thực hiện các bước sau:

```bash
# Clone repository
git clone https://github.com/MedPocket/NIPT
cd NIPT

# Cài đặt các phụ thuộc
bun install

# Khởi chạy máy chủ phát triển cục bộ
bun dev
```

Sau khi chạy lệnh trên, hãy mở trình duyệt web và truy cập địa chỉ [http://localhost:4321/NIPT](http://localhost:4321/NIPT).

## Các lệnh khả dụng (Available Scripts)

Trong dự án này, bạn có thể chạy các lệnh sau bằng Bun:

- `bun dev` - Khởi động máy chủ phát triển cục bộ với tính năng hot-reload.
- `bun build` - Biên dịch và đóng gói mã nguồn thành thư mục tĩnh (`dist/`) để deploy.
- `bun preview` - Xem trước bản build tĩnh cục bộ.
- `bun run typecheck` - Thực hiện kiểm tra kiểu (typecheck) cho tất cả các trang tài liệu.
- `bun run lint` - Chạy công cụ kiểm tra lỗi cú pháp và mã nguồn (Linter).
- `bun run fmt` - Định dạng lại mã nguồn và tài liệu.

## License

Dự án này được cấp phép theo các điều khoản của [MIT License](LICENSE).

---

_Lưu ý:_ Dự án này có tích hợp hoặc kế thừa các nội dung/tài liệu được điều chỉnh từ [MedPocket/healthy-pregnancy](https://github.com/MedPocket/healthy-pregnancy).
