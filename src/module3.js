//默认暴露 可以暴露任何数据，暴露什么数据接收到的就是什么数据，只能写在一个对象里面

export default{
    msg:'默认暴露',
    foo(){
        console.log(this.msg);
    }
}
