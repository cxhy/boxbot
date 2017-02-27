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

