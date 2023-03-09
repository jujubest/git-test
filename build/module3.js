'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//默认暴露 可以暴露任何数据，暴露什么数据接收到的就是什么数据，只能写在一个对象里面

exports.default = {
    msg: '默认暴露',
    foo: function foo() {
        console.log(this.msg);
    }
};