
var cart = new ShoppingCart();
// console.log(cart);
function displOrderlist() {

    let cartList = document.querySelector('#cartList');

    let carData = cart.getDataFromLocalStorage();
    // console.log(carData);
    let orderList = carData.orderList;
    // console.log(orderList);



    for (let i in orderList) {
        let order = orderList[i];
        console.log(order);
        let ordede = document.querySelector('#orderExample').cloneNode(true);
        // console.log(ordede);
        //设置新id
        ordede.id = order.id;
        //获取节点并返回

        //图像

        let imgNode = ordede.querySelector('[data-name="imgSrc"]');
        imgNode.src = 'images/' + order.imgSrc;
        //名字

        let titleNode = ordede.querySelector('[data-name="title"]');
        titleNode.textContent = orderList[i].title;
        //价格

        let priceNode = ordede.querySelector('[data-name="price"]');
        priceNode.textContent = orderList[i].price;
        //数量

        let qtyNode = ordede.querySelector('[data-name="qty"]');
        qtyNode.textContent = orderList[i].qty;
        //选中

        let checkNone = ordede.querySelector('[ data-operator="checkItem"]');
        checkNone.checked = order.selectStatus;
        //小计

        let subQtyNode = ordede.querySelector('[data-name="subPrice"]');
        subQtyNode.textContent = (order.qty * order.price);
        //总数量

        let selectNode = document.querySelector('[data-name="selectedQty"]');
        selectNode.textContent = cart.getSelectedQty();

        //总价格
        let amountNode = document.querySelector('[data-name="selectedAmount"]');
        amountNode.textContent = cart.getSelectedAmount();
        


        
        cartList.appendChild(ordede);
        ordede.classList.remove('d-none');
    }

}

displOrderlist();
//为相关节点注册事件

function regEvent(){
    //获取清空购物车节点
    let element = cartRoot.querySelector(operatorGlobal.clearAll);
    console.log(element);

//注册单击事件
element.onclick = clearAllEventFun;
}
//清空函数触发函数
function clearAllEventFun() {
    cart.clearCart();
    console.log('清空');  
}
//删除事件触发函数
function deleteItemEventFun() {
    ///（1）注册事件
    regEvent()
    //获取一组订单删除按钮

    
   // 为每一个删除按钮设计单击事件—触发deleteItemEventFun
    //（2）设计单击触发函数---独立函数 
   // deleteItemEventFun（e）()
    //（2-1）获取当前被单击的删除按钮 e.target
    //（2-2）根据当前被单击删除按钮找到当前订单id(之前需要在订单加载时给删除按钮注入data-id属性  )
   // element.getAttribute()
   // element.setAttribute()
   // ---》调用购物车类删除订单方法 cart. deleteItem(id)
   // 根据当前订单id找到当前订单节点
   // —》删除节点  订单列表节点.removeChild(当前订单节点)
    修改各种总数据displaySelectedTotal()
    
}
//初始化函数
function init() {
    displayOrderList();
    regEvent();
    displayTotalData();
}



