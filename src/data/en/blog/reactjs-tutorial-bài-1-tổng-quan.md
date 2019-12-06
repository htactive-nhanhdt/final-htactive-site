---
blog-title-en: '[ReactJS Tutorial] Bài 1 - Tổng quan'
blog-date-en: 2019-11-27T10:39:33.405Z
blog-description-en: ReactJS là thư viện JavaScript được sử dụng để xây dựng các UI components có thể sử dụng lại.
author-en: Hoàng Phạm
thumbnail-en: /img/react.png
tags-en: ["React","Code"]
---
ReactJS là thư viện JavaScript được sử dụng để xây dựng các UI components có thể sử dụng lại. Theo tài liệu chính thức của React: React là một thư viện dùng để xây dựng các giao diện người dùng tổng hợp. Nó khuyến khích việc tạo ra các UI components sử dụng lại được, và thể hiện dữ liệu thay đổi theo thời gian. Rất nhiều người sử dụng React như View trong MVC. React làm trừu tượng các DOM, cung cấp một mô hình lập trình đơn giản và hiệu suất tốt hơn. React có thể render server side bằng cách sử dụng NodeJs, và nó cũng có thể tạo ra các native apps bằng cách sử dụng React Native. React sử dụng luồng dữ liệu một chiều (one-way data flow), làm dễ hiểu hơn so với data binding truyền thống.

## React Features

* **JSX** - JSX là phần mở rộng về cú pháp JavaScript. Không nhất thiết phải sử dụng JSX trong phát triển React, nhưng vẫn khuyến khích sử dụng nó.
* **Components** - React xoay quanh các components . Bạn cần phải nghĩ về mọi thứ như components. Điều này sẽ giúp bạn maintain code khi làm việc trên các dự án có quy mô lớn hơn.
* **Flux** và luồng dữ liệu một chiều - React thực hiện luồng dữ liệu một chiều giúp bạn dễ hiểu về ứng dụng của mình, còn Flux là một pattern giúp duy trì dữ liệu của bạn một chiều.

## Ưu điểm của React

* Sử dụng DOM ảo như một đối tượng JavaScript. Điều này sẽ cải thiện hiệu suất ứng dụng vì DOM ảo JavaScript nhanh hơn DOM thông thường.
* Có thể được sử dụng ở client side và server side cũng như tích hợp với các frameworks khác.
* Các components và dữ liệu cải thiện tính dễ đọc, giúp maintain các ứng dụng lớn hơn.

## Nhược điểm của React

* Chỉ cover tầng View của ứng dụng, do đó bạn vẫn cần chọn thêm các công nghệ khác để có được bộ khung hoàn chỉnh để phát triển ứng dụng.
* Sử dụng inline CSS và JSX, nhìn có thể có vẻ khó chịu đối với một số developers.

_Nguồn: tutorialspoint.com_
