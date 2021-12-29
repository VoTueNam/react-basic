# React.createElement()
Nhận 3 đối số:
    1. Tên thẻ
    2. Prop
    3. Children

# JSX
Viết XML trong JS mà ko bị lỗi 

# Props
- Thẻ XML gọi là element
    - Thay đổi: 
        - class -> className
        - for -> htmlFor
- function return XML gọi là component
    - Tên phải viết hoa chữ đầu
    - Truyền đối số trong XML:
        (<Example title="tittle nè"/>)
        
        Gọi thì Example(prop)
        -> prop.title là ra (nó nhận lại obj mà)
        
        Lấy trực tiếp thì
        Example({title}) là ra

        Đặt callback prop như 1 function 

        Đừng quên thằng children, truyền prop vô thì gọi bằng biến children
        children là thằng sẽ nằm bên trong của 1 thẻ, ko phải prop