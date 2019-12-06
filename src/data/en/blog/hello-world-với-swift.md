---
blog-title-en: Hello World với Swift
blog-date-en: 2019-11-27T09:49:20.555Z
blog-description-en: >-
  Hôm nay mình sẽ hướng dẫn các bạn viết chương trình Hello World sử dụng Swift.
  Để bắt đầu, chúng ta sẽ viết 1 chương trình đơn giản như sau ...
author-en: Hiếu Lê
thumbnail-en: /img/hello-world-working-copy1.png
tags-en: ["Code"]
---
## Bắt đầu

Hôm nay mình sẽ hướng dẫn các bạn viết chương trình Hello World sử dụng Swift. Để bắt đầu, chúng ta sẽ viết 1 chương trình đơn giản:

```
print("Hello World!")
```

## Sử dụng lại

Chương trình trên sẽ in ra dòng chữ Hello World!. Đơn giản vãi nồi!!! Để có thể sử dụng lại mã nguồn trên ở nhiều nơi, bây giờ chúng ta sẽ phát triển một kiểu (Type) thực hiện nhiệm vụ in ra dòng Hello World! trên. Có 2 lựa chọn trong Swift là value type và reference type, nói nhiều các bạn sẽ rối, theo mấy bác bên Apple thì nên sử dụng value type để tránh implicit sharing và dễ kiểm soát hơn (éo hiểu nhưng mà cũng éo cần quan tâm, làm theo phát!). Mình sẽ viết lại chương trình trên như sau:

```
struct Greeter { 
   ///   /// Display Message `Hello World`  ///  
    func sayHelloWorld() {   
       print("Hello World!") 
        }
      } 
    let greeter = Greeter()
    greeter.sayHelloWorld()
```

## Mở rộng

Vậy là mình vừa phát triển được 1 kiểu Greeter hiển thị dòng chữ HelloWorld!. Nhưng hiện tại, lớp của mình chỉ có thể hiển thị lên console. Mình muốn phát triển ra để chương trình của mình có thể hiển thị thông điệp lên nhiều nơi khác nhau như lên màn hình đồ họa, gửi thông điệp qua email, SMS, ... Để làm được điều đó, mình sẽ định nghĩa một giao thức là Displayer chung cho tất cả các đối tượng kể trên. Trong swift gọi là protocol, một lớp có thể cài đặt nhiều protocol khác nhau nên nghe đồn việc sử dụng protocol sẽ linh hoạt hơn.

Chương trình được viết lại như sau:

```
// common protocol for displaying a messageprotocol 
Displayer {  
  func display(message: String)
  }
struct ConsoleDisplayer: Displayer {  
  func display(message: String) { 
       print(message)  
       }
       }
       struct Greeter { 
          let helloWorldMessage = "Hello World!"  
          func sayHelloWorld() {    
            let displayer = ConsoleDisplayer()    
            displayer.display(helloWorldMessage)  
            }
            }
            let greeter = Greeter()
            greeter.sayHelloWorld()
```

## Inject Dependencies

Chương trình trên có 1 vấn đề đó là lớp ConsoleDisplayer được khởi tạo bên trong lớp Greeter, sau này nếu chúng ta muốn thay đổi implement sang một lớp khác như GraphicDisplayer thì chúng ta phải sửa lớp Greeter, do đó chúng ta sẽ sửa lớp Greeter lại để cho phép đưa một phụ thuộc vào lớp này (xem Dependency Injection).

```
protocol Displayer { 
   func display(message: String)
   }
   struct ConsoleDisplayer: Displayer { 
      func display(message: String) {  
          print(message) 
           }
           }
           struct Greeter {  
             let helloWorldMessage = "Hello World" 
              var displayer: Displayer  init(displayer aDisplayer: Displayer) {    displayer = aDisplayer  }  
              func sayHelloWorld() {  
                  displayer.display(helloWorldMessage)
                  }
                  }
                  let displayer = ConsoleDisplayer()
                  let greeter = Greeter(displayer: displayer)
                  greeter.sayHelloWorld()
```



## In thông điệp ra UILabel

Bây giờ chúng ta đã có 1 lớp `Greeter`tương đối ổn định. Chúng ta có thể sử dụng lớp `Greeter`này bất cứ đâu. Ví dụ, chúng ta sẽ sử dụng lớp `Greeter`của chúng ta để hiển thị dòng chữ Hello World! lên một UILabel như dưới đây:

```
extension UILabel: Displayer { 
   func display(message: String) {
         text = message  
         }
         }
         let greeter = Greeter(displayer: helloWorldLabel) 
         // helloWorldLabel is an outlet to a UILabel
         greeter.sayHelloWorld()
```

_xong đoạn này Swift extension quá chất._

## Kiểm thử

Chúng ta sẽ kiểm tra tính đúng đắn của hàm sayHelloWorld bằng cách viết một đơn vị kiểm thử. Để làm điều này, chúng ta sẽ mock một lớp Displayer như sau:

```
struct TestDisplayer: Displayer {  
  var messages = [String]()  func display(message: String) {  
      messages.append(message)  
      }
      }
      let expectedHelloWorldMessage = "Hello World!"
      func testSayHelloWorld() {  
        let displayer = TestDisplayer()  
        let greeter = Greeter(displayer: displayer)  
        greeter.sayHelloWorld() 
         // check result  
         XCTAssertEqual(1, displayer.messages.count, "Should display a message")
           
         XCTAssertEqual(expectedHelloWorldMessage, 
         displayer.messages[0], "Should display (expectedHelloWorldMessage) message") 
         }
```

_Đón đọc phần tiếp theo: hiển thị Hello World! theo nhiều ngôn ngữ khác nhau._

__
