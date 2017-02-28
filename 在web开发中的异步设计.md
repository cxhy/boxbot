# 先从操作表单说起

之所以先从操作表单开始说起。因为这就是javascript的老本行啊，95年的时候，javascript被设计出来就是为了处理表单的验证操作的。

但是随着时间的推移，这个简陋的语言已经在无数次的修修补补之下变成了如今这个样子

通常来说，当我们需要提交表单的时候，我们一般响应 form 的 onsubmit 事件，就像下面这样

```html
<!-- HTML -->
<form id="test-form" onsubmit="return checkForm()">
    <input type="text" name="test">
    <button type="submit">Submit</button>
</form>

<script>
function checkForm() {
    var form = document.getElementById('test-form');
    // 可以在此修改form的input...
    // 继续下一步:
    return true;
}
</script>
```

一个完整的例子就想下面这样

javascript部分

```javascript
'use strict';
var checkRegisterForm = function () {
}
    // TODO:
    var inputName = document.getElementById('username');
    var firstPwd = document.getElementById('password');
    var secondPwd = document.getElementById('password-2');
    var nameReg = /^[0-9a-zA-Z]{3,10}$/;
    if(!nameReg.test(inputName.value)){
        return false;
    }
    if(firstPwd.value.length < 6 || firstPwd.value.length > 20){
        return false;
    }
    if(firstPwd.value === secondPwd.value){ 
        return true;
    }
    return false;

```

html部分

```html
<form id="test-register" action="#" target="_blank" onsubmit="return checkRegisterForm()">
    <p id="test-error" style="color:red"></p>
    <p>
        用户名: <input type="text" id="username" name="username">
    </p>
    <p>
        口令: <input type="password" id="password" name="password">
    </p>
    <p>
        重复口令: <input type="password" id="password-2">
    </p>
    <p>
        <button type="submit">提交</button> <button type="reset">重置</button>
    </p>
</form>
```

