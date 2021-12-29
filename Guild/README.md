### Hướng dẫn sử dụng

Trong src có file index.js để link qua index.html
Code chính ở file app.js 

setupTest.js --> để setup test component

# use State -> thay đổi giao diện tự động

 ```import { useState } from 'react' ```

Giá trị đầu vào là giá trị khởi tạo -> return ra cái mảng
[state , setState]

--> state là giá trị nhận vào , setState là hàm để thay đổi giá trị

Dùng callback với setState
Tương tự cũng làm đc với hàm khởi tạo
 ```
const [counter, setCounter] = useState(()=>{
    //tính toán ở trong này rồi return lại
}) 
```
### xem code ở learningHook/useState.js

React jS là one-way binding
2 - way binding có nghĩa là vừa đúng trên giao diện và đúng cả trong code



# useEffect
Cần thông tạo event có sẵn và event custom

--> Dùng để: Side Effects
- Update DOM --> OK
- Call APIs --> OK
- Listen DOM events
    - Scroll
    - Resize
- Cleanup

# Cú Pháp:
--- Đối số thứ 2 ko bắt buộc - nó là cái mảng thôi và dependency

### useEffect(callback, [deps])

Có 3 trường hợp sử dụng
    1. useEffect(callback)
        - Gọi callback mỗi khi component re-render
        - Gọi callback sau khi component thêm element vào DOM
    2. useEffect(callback, [])
        - Gọi callback 1 lần sau khi component mounted
    3. useEffect(callback, [deps])
        - Callback sẽ đc gọi lại mỗi khi dependency thay đổi - là cái thằng truyền vô á
# ---------------------------------------------
Đúng với cả 3 thằng bên trên
1. Callback luôn luôn đc goi sau khi component mounted
2. Clean up function sẽ luôn đc gọi trước khi component đó bị unmounted
3. Clean up function sẽ luôn đc gọi trước khi callback đc gọi (trừ lần mounted)


# useLayoutEffect

Về cơ bản nó gần giống useEffect 100%
- Khác biệt ở chỗ thứ tự thực hiện thôi

### useEffect
1. Cập nhật lại state
2. Cập nhật DOM (mutated)
3. Gọi cleanup nếu [deps] thay đổi
4. Gọi callback trong useEffect 
5. Render UI

### useLayoutEffect
1. Cập nhật lại state
2. Cập nhật DOM (mutated)
3. Render UI
4. Gọi cleanup nếu [deps] thay đổi
5. Gọi callback trong useEffect 
 

 # useRef
 --> Lưu các giá trị qua 1 tham chiếu bên ngoài
 Function component
 --> để biến đc khai báo lại mỗi khi Re-render

--- Ngoài ra còn dùng để lấy đc DOM element


 # memo()  --- HOC: Higher object components

mỗi khi component cha re-render lại thì những component con phụ thuộc nó vẫn bị re-render lại

memo nhận vào 1 component, nó sẽ check xem component có thay đổi hay ko, nếu ko có thay đổi gì cả thì sẽ ko re-render (giải quyết đc vấn đề ở trên), nếu có thì render như bình thường thôi

# Cách dùng:
 ```export default memo(Content) ```


# useCallback
--> dùng để tránh tạo ra những cái hàm mới ko cần thiết

Ứng dụng:
- Reference type
- React memo

# cách dùng
ví dụ:
const handleIncrease = useCallback(function, [])
--- 2 tham số truyền vào y hệt useEffect luôn, nó sẽ lắng nghe xem deps có thằng nào thay đổi hay ko, nếu có thay đổi thì nó sẽ trả lại 1 function ở tham chiếu mới, nếu ko có gì thay đổi thì nó sẽ trả về function trước đó.

### nên dùng:
khi gọi memo thì cứ gọi thằng này trong toàn bộ function truyền qua component


# useMemo
--> dùng để tránh thực hiện lại 1 logic ko cần thiết
 Khi component re-render, các function khai báo bên trong có thể sẽ chạy lại ko cần thiết

### ví dụ
 ```
 const total = useMemo(()=>{
     //tính toán phức tạp

     return [giá trị]
 },[deps])
 ```

 --- cách truyền tham số y như useEffect

 
 # useReducer
 dùng trong các tình huống State nó phức tạp (mà useState khó xử lý)
 --> Đơn giản hóa hơn cho các State phức tạp

 --- Xem code đi 

 # Context

 Dùng để truyền dữ liệu giữa các component với nhau

 # Cách dùng
 1. Create context
 2. Provider
 3. Consumer

 # Global State = Context + useReducer
 -- Xem global state todo

 # useImperativeHandle
 hạn chế method có thể gọi của children
 --- Xem code đi ko biết giải thích

 # css modules 
 --> đổi tên file từ .css -> module.css
 --> Class name của thẻ sẽ thay đổi
 --> Đặt lại tên : 
 
 import styles from 'tên file.module.css'
  ```className={styles.className} ``` (đổi class name thành giống trg file)

 # Chú ý:
 Cách này ko sử dụng theo tagName đc - nó sẽ ảnh hưởng toàn bộ css

 # Một thẻ có nhiều class name
  ```className = {`${style.classNam1} className2`} ```
 --> Nó nhận vào cái chuỗi, làm sao cũng đc

 # clsx 
 Cài vào npm bình thường thôi: npm i clsx
 ```
 className ={clsx(style.className1, "className2")}
 ```
 # class động thì sao
  ```
 className ={clsx(style.className1, {
     [styles.className2] : true
 })} ```

 // True là hiện False là ko - ko có [] nó sẽ ko nhận đúng đâu

 # scss 
 install và xài như bình thường thôi, nó tự hiểu
  ```npm i sass ``` ---> ko phải scss đâu

 # Router DOM
 Đơn giản là định tuyến
 ```
 npm i react-router-dom@6
 ```