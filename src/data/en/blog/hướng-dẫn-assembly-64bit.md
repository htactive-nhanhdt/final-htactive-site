---
blog-title-en: Hướng dẫn Assembly 64bit.
blog-date-en: 2019-11-27T13:27:44.773Z
blog-description-en: >-
  Tiếp theo bài trước, sau khi các bác đã có 1 chương trình hoàn chỉnh hiển thị
  dòng chữ “Hello World!”, bài này sẽ hướng dẫn các bạn viết một hàm hoàn chỉnh
  trong assembly nhằm mục đích mô-đun hoá ứng dụng.
author-en: Khiêm Trần
thumbnail-en: /img/assem.png
tags-en: ["Code"]

---
<iframe width="650" height="365" src="https://www.youtube.com/embed/0esP0h6SWZ4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## LỜI NÓI ĐẦU

Suốt hàng ngàn năm, con người đã sử dụng các ngôn ngữ lập trình để bắt máy tính phải “hiểu" mình và làm theo mệnh lệnh của mình. Các bạn đừng bị thầy cô lừa dối, bởi vì máy tính vốn chỉ hiểu một ngôn ngữ duy nhất, đó là ngôn ngữ máy (machine code). Và trong khi các bạn diễn giải ý định của mình bằng java hay c# thì máy tính hoàn toàn không hiểu được. Và phải qua các bước biên dịch phức tạp thì máy mới hiểu được bạn muốn nói gì. Nhưng mà “tam sao thất bản", chắc chắn máy tính sẽ không hiểu đúng 100% bạn ý định nói gì đâu. Mà coi như là máy tính hiểu bạn rồi, thì khi nào bạn sẽ hiểu máy tính?

Nếu bạn là người yêu máy tính, thích lập trình thì hãy nhanh chân học ngôn ngữ mà máy cũng hiểu và bạn cũng hiểu. Mình sẽ không bắt các bạn phải học mã máy, nhưng chí ít bạn nên học **Assemb-Lư** vì với máy tính, như thế là tuyệt lắm rồi. Assembly - Machine code nó tương đương 1-1 nên nếu biết assembly thì cũng tạm chấp nhận. Đối với các bạn học bách khoa thì quả thật là may mắn vì các bạn đã được học assembly. Nhưng mà chắc là đã quên hết rồi nên trong bài này mình sẽ hướng dẫn lại căn bản cho các bạn.

Trong bài viết sử dụng MacOS để lập trình nên bạn nào không có thì sử dụng trí tưởng tượng phong phú của mình.

## I. CĂN BẢN ASSEMBLY

**1. Data size**: Các khái niệm cơ bản về size của data khi làm việc: byte (8 bit) -> word (16 bit) -> double words (32 bit) -> quad words 64 bit). Mình chỉ làm việc với 2 toán tử có kích thước tương đương.

**2. Thanh ghi:** Là các thanh nhớ đặc biệt dùng để tính toán. Khi tính toán thì chỉ thao tác với giá trị trên thanh ghi. (các thanh ghi general các bạn từng học như _ax <=> al: (8 bit); ax: (16 bit); eax (32 bit); rax (64 bit))_

**3. Lưu trữ dữ liệu**: Ngoài thanh ghi, có 2 vùng nhớ là stack và heap.

**4. Lệnh:** có các nhóm lệnh: đọc ghi dữ liệu / tính toán / điều khiển (lệnh nhảy - gọi hàm).

**5. Nhãn:** Mình có thể đánh dấu các câu lệnh, vùng nhớ bằng nhãn để có thể tham chiếu sau này.

**6. Cú pháp:**

```
[:]  nguồn[, đích]
```

Ví dụ:

```
movl $1, %eax; // gán eax = 1
```

## II. Hello World:

Để bắt đầu, các bạn có thể sử dụng một trình soạn thảo bất kỳ, tạo một file và đặt tên là main.s, mở terminal và gõ:

```
g++ main.s -o main
```

Bạn sẽ nhận được một thông báo lỗi như sau:

Thông báo lỗi do chưa viết hàm main.

> Thông báo lỗi do chưa viết hàm main.

Chương trình assembly được chia thành nhiều đoạn, cấu trúc căn bản như sau:

```
.section __DATA, __data // section data chứa data sử dụng trong chương trình
.section __TEXT, __text // section text chứa code trong chương trình
```



Chương trình muốn chạy được thì phải có symbol `_main`, do đó ta thêm symbol `_main `vào trong chương trình.

```
.section __DATA, __data // section data chứa data sử dụng trong chương trình.section __TEXT, __text // section text chứa code trong chương trình.global _main_main:
```

Chỉ thị global `_main `đăng kí với trình biên dịch symbol `_main `sẽ được public trong giai đoạn liên kết.

Bây giờ chúng ta đã biên dịch thành công, tuy nhiên lúc chạy chương trình sẽ gặp lỗi sau:

Hàm main chưa có gì thì làm sao mà chạy? làm sao mà chạy?

> Hàm main chưa có gì thì làm sao mà chạy? làm sao mà chạy?

Lý do là hàm `main`hiện tại chúng ta chưa viết gì cả. Vậy hàm `main`sẽ làm gì? Chúng ta sẽ thử ra chỉ thị kết thúc chương trình.

```
_main:  movl $0x2000001, %eax  syscall
```

Nếu như trong MS DOS các bạn quen với interrupt (ngắt hệ thống) thì ở hệ thống 64 bit đó là syscall, các chương trình con của hệ thống. $0x2000001 là system exit(). Các bạn có thể tham khảo các chương trình con này ở đây

Định nghĩa + tham số tương đương ở đây

Như vậy chương trình của chúng ta đã chạy. Nhưng nó kết thúc ngay lập tức chưa kịp làm gì cả. Vậy làm sao để in ra chữ HelloWorld?

Nhìn trong file mình vưà gửi thì syscall 4 sẽ in viết một thông điệp ra dòng xuất chuẩn. Có 3 tham số : 1 là kí hiệu của dòng xuất (output stream) và 2 là thông điệp, 3 là kích thước của thông điệp

Ta chỉnh sửa lại chương trình như sau:

```
.section __DATA, __data
  helloMessage: .asciz "Hello World
"
.section __TEXT, __text
.global _main
_main:
  movl $0x2000004, %eax // ngắt để in ra
  movl $1, %edi // standard output = 1
  movq helloMessage@GOTPCREL(%rip), %rsi // thông điệp cần in ra
  movq $100, %rdx // kích thước của thông điệp
  syscall  
  movl $0x2000001, %eax // ngắt dừng chương trình
  movl $0, %ebx // exit code == 0
  syscall
```

Mình sẽ giải thích convention khi đưa tham số vào một lời gọi hàm trong bài tiếp theo. 

Bài tiếp: TDD với Assembly 64 bit + hướng dẫn thiết kế sử dụng mẫu Dependency Injection.
