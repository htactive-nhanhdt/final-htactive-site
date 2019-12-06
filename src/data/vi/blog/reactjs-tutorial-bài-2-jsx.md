---
blog-title-vn: '[ReactJS Tutorial] Bài 2 - JSX'
blog-date-vn: 2019-11-27T13:55:14.689Z
blog-description-vn: ReactJS là thư viện JavaScript được sử dụng để xây dựng các UI components có thể sử dụng lại.
author-vn: Hoàng Phạm
thumbnail-vn: /img/react.png
tags-vn: ["React","Code"]
---
React sử dụng JSX để tạo template thay vì JavaScript thông thường. Có thể bạn sẽ không sử dụng nó, tuy nhiên sau đây là một số lợi ích của JSX.

* JSX nhanh hơn vì nó thực hiện tối ưu hoá trong khi biên dịch mã cho JavaScript.
* JSX cũng an toàn và hầu hết các lỗi có thể bị bắt trong khi biên dịch.
* JSX giúp bạn viết các template dễ dàng và nhanh hơn nếu bạn đã quen thuộc với HTML.

## Sử dụng JSX

JSX trông giống như một HTML thông thường trong hầu hết các trường hợp. Xem code của file **App.jsx** phần return thẻ **div** .

**App.jsx**

```
import React from react;
  class App extends React.Component {
     render() {
        return (
           <div>
              Hello World!!!
           </div>
        );
     }
  }
  export default App;
```

Mặc dù nó tương tự như HTML, có một vài điều cần lưu ý khi làm việc với JSX.

## Các phần tử lồng nhau

Nếu muốn return nhiều phần tử, cần phải bọc nó bằng một phần tử container. Chú ý cách sử dụng div làm container cho các phần tử **h1** , **h2** và **p** .

**App.jsx**

```
import React from react;
  class App extends React.Component {
     render() {
        return (
           <div>
              <h1>Header</h1>
              <h2>Content</h2>
              <p>This is the content!!!</p>
           </div>
        );
     }
  }
  export default App;
```

![none](/img/react_jsx_wrapper.jpg "none")

## Attributes

Chúng ta có thể sử dụng custom attributes ngoài các attributes và HTML properties thông thường. Khi muốn thêm custom attributes, cần sử dụng tiền tố **data-** . Trong ví dụ sau, chúng ta thêm **data-myattribute** làm thuộc tính của phần tử **p** .

```
import React from react;
  class App extends React.Component {
     render() {
        return (
           <div>
              <h1>Header</h1>
              <h2>Content</h2>
              <p data-myattribute = "somevalue">This is the content!!!</p>
           </div>
        );
     }
  }
  export default App;
```

## JavaScript Expressions

Các JavaScript Expressions có thể được sử dụng bên trong JSX. Chỉ cần wrap nó với dấu ngoặc **{}** . Ví dụ sau sẽ render **2** .

```
import React from react;
  class App extends React.Component {
     render() {
        return (
           <div>
              <h1>{1+1}</h1>
           </div>
        );
     }     
   }
  export default App;
```

![2](/img/react_jsx_inline_javascript.jpg "2")

Không thể sử dụng câu lệnh **if else** bên trong JSX, thay vào đó có thể sử dụng biểu thức có điều kiện (ternary) . Trong ví dụ sau, biến i bằng **if else**1 do đó trình duyệt sẽ render **true** , nếu chúng ta thay đổi nó thành một giá trị khác, nó sẽ render **false** .

```
import React from react;
  class App extends React.Component {
     render() {
        return (
           <div>
              <h1>{i == 1 ? "True!" : "False"}</h1>
           </div>
        );
     }
  }
  export default App;
```

![true](/img/react_jsx_ternary_expression.jpg "true")

## Styling

React khuyến cáo sử dụng các kiểu inline styles. Khi muốn thiết lập các kiểu inline styles, chúng ta cần sử dụng cú pháp **camelCase** . React cũng sẽ tự động nối px sau khi đánh số trên các phần tử cụ thể. Ví dụ sau cho biết cách thêm phần tử **myStyle** vào thẻ **h1** .

```
import React from react;
  class App extends React.Component {
     render() {
        var myStyle = {
           fontSize: 100,
           color: #FF0000
        }
        return (
           <div>
              <h1 style = {myStyle}>Header</h1>
           </div>
        );
     }
  }
  export default App;
```



## Naming Convention

Thẻ HTML luôn sử dụng tên thẻ **chữ thường** , trong khi các thành phần React lại bắt đầu với **Chữ viết hoa** .

Note - Bạn nên sử dụng **className** và **htmlFor** dưới dạng các tên thuộc tính XML thay vì **class** và **for** .

Điều này được giải thích trên trang chủ React như sau - Vì JSX là JavaScript, nên các định danh như **class** và **for** không được khuyến khích làm tên thuộc tính XML. Thay vào đó, React DOM components mong đợi các DOM property được đặt tên là **className** và **htmlFor** tương ứng.

_Nguồn: tutorialspoint.com_
