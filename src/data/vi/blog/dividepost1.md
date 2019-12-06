---
blog-title-vn: Những Material component tuyệt vời trong React Native.
blog-date-vn: 2019-11-27T04:21:08.236Z
blog-description-vn: Những Material component tuyệt vời trong React Native.
author-vn: Mạnh Nguyễn
thumbnail-vn: /img/components_react_native.png
tags-vn: ["Code"]
---
Ngày đầu tiên khi mình tiếp cận React Native là năm 2016, tại thời điểm này, việc implement một giao diện người dùng đẹp đẽ, thân thiện thật sự là rất khó khăn. React và React Native ra đời để hỗ trợ việc render giao diện chứ không hỗ trợ lập trình viên cũng như nhà phát triển ứng dụng để họ có thể tối ưu hóa UI/UX trên giao diện của họ. Thời điểm đó, gần như không có library, toolkit hoặc các thứ tương tự để xây dựng giao diện. Tuy nhiên theo thời gian, mọi thứ đã thay đổi, hôm nay React có thể đã được xem như là một trend, một xu hướng của front-vnd, và theo đó lần lượt các thư viện, các toolkit về UI/UX ra đời (cả cho ReactJS và ReactNative).

Riêng về React Native thì đến ngày hôm nay, có rất nhiều UI/UX toolkit ra đời và hỗ trợ rất nhiều cho developer. Chúng ta chỉ đơn giản cài đặt, sử dụng và làm theo hướng dẫn trong các toolkit này thì sẽ có một giao diện đẹp mắt và thân thiện. Vấn đề của toolkit là nó quá lớn, quá cồng kềnh và khó custom. Đọc đến đây có thể một vài bạn sẽ không đồng ý và cho rằng hoàn toàn có thể custom được những toolkit này vì nó là open source. Okay fine! trong thời buổi open source này, cái gì cũng custom được, mình đồng ý. Tuy nhiên trong giới hạn của bài viết này, mình sẽ không đề cập đến các toolkit mà sẽ giới thiệu các library UI trong React Native theo thiên hướng Material design để các bạn có thể dễ dàng integrate và sử dụng.

Những thư viện bên dưới theo mình đánh giá là nhỏ, nhẹ, dễ dàng quản lý và đặc biệt là vẫn đang được maintenance tính đến thời điểm bài viết này được viết (tháng 6 năm 2018).

## **1. react-native-material-bottom-navigation**

Thư viện này hỗ trợ cho mình một cái bottom navigation theo thiên hướng Material design cực kì đẹp mắt và "chuẩn cơm mẹ nấu".

![img](/img/bottom-navigation-1.gif "none")

Nó là thuần javascript, không sử dụng native, đơn giản dễ cài đặt, dễ sử dụng. Hơn nữa, hiện tại nó là một standalone library, có thể sử dụng chung với các library về router hoặc navigator tùy sở thích.

Link github: <https://github.com/timomeh/react-native-material-bottom-navigation>

## 2. react-native-snap-carousel

Mình từng dùng và biết cũng cơ số những component như này trong ReactNative. Nhìn chung thì chúng đều ổn và chạy OK. Nhưng thư viện này thật sự gây ấn tượng khá tốt với cá nhân mình. Cũng chẳng biết phải giải thích như thế nào, thôi thì upload vài cái ảnh gif lên đây để các bạn cùng đánh giá.

![](/img/snap-carousel-1.gif)

![a](/img/snap-carousel-2.gif "a")

![a](/img/snap-carousel-3.gif "a")

Trong các ứng dụng thực tế:

![a](/img/snap-carousel-4.gif "a")

![a](/img/snap-carousel-5.gif "a")

![a](/img/snap-carousel-6.gif "a")

Thư viện này hiện đang được bảo trì và support khá tốt từ nhóm phát triển, nó hiện đang sử dụng flatlist và lazy load nên trông rất mượt mà về performance. Example của thư viện này là một cái app hoàn chỉnh, các bạn có thể xem và học hỏi các component khác trong example đó.

Link github: <https://github.com/archriss/react-native-snap-carousel>

## 3. react-native-material-dropdown

Bạn đang tìm kiếm một component drop-down có dáng dấp của native? Yeah, bạn đến đúng chỗ rồi đấy!!! Thư viện này cung cấp một drop-down component mà thích hợp cho cả IOS và Android cả về UI, UX. Cá nhân mình đảm bảo rằng các bạn sẽ thích nó khi sử dụng.

![a](/img/dropdown-material.gif "a")

Link github: <https://github.com/n4kz/react-native-material-dropdown>

## 4. react-native-material-textfield

Cũng đến từ cùng một nhà phát triển với dropdown ở trên, thư viện này cho ta các components input theo đúng chuẩn Material design

![a](/img/input.gif "a")

Link github: <https://github.com/n4kz/react-native-material-textfield>

## 5. react-native-material-menu

Dự án của bạn đang cần implement một cái button mà khi bấm vào đó sẽ có 1 cái menu overflow hiện ra và bạn đang đi tìm thư viện cho nó? Yeah, nó đây chứ đâu !!! Mô tả nhiều thì lan man, đại khái nó là pure javascript, không có native module, có animation đẹp và có support ripple. Tóm lại là nhìn như native :)

![a](/img/menu.gif "a")

Link github: <https://github.com/mxck/react-native-material-menu>

## 6. react-native-snackbar

Nếu bạn đang tìm kiếm một component cho snack bar hoặc toast đơn giản dể dùng, không cần phải render trong hàm render, có thể dễ dàng gọi ra ở bất cứ đâu trong code (sau một callback api, hoặc một action sagas) thì bạn sẽ cần thư viện này.

\- Không cần thêm trong hàm render.

\- Dễ dàng invoke trong business logic.

`Snackbar.show({`

`title: 'Hello world',`

`duration: Snackbar.LENGTH_SHORT,`

`});`

Trên đây là một số thư viện khá hay về UI mà mình muốn giới thiệu, vẫn còn một số nữa nhưng mà bài viết có vẻ dài quá rồi. Hẹn gặp lại ở phần 2 nhé!
