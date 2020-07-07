# 原生的原型

`"prototype"` 属性在 JavaScript 自身的核心部分中被广泛地应用。所有的内置构造函数都用到了它。

## Object.prototype

假如我们输出一个空对象：

```javascript
let obj = {};
alert( obj ); // "[object Object]" ?
```

生成字符串 `"[object Object]"` 的代码在哪里？那就是一个内建的 `toString` 方法，但是它在哪里呢？`obj` 是空的！

……然而简短的表达式 `obj = {}` 和 `obj = new Object()` 是一个意思，其中 `Object` 就是一个内建的对象构造函数，其自身的 `prototype` 指向一个带有 `toString` 和其他方法的一个巨大的对象。

就像这样：

<svg xmlns="http://www.w3.org/2000/svg" width="453" height="94" viewBox="0 0 453 94"><defs><style>@import url(https://fonts.googleapis.com/css?family=Open+Sans:bold,italic,bolditalic%7CPT+Mono);@font-face{font-family:'PT Mono';font-weight:700;font-style:normal;src:local('PT MonoBold'),url(/font/PTMonoBold.woff2) format('woff2'),url(/font/PTMonoBold.woff) format('woff'),url(/font/PTMonoBold.ttf) format('truetype')}</style></defs><g id="inheritance" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g id="object-prototype.svg"><path id="Rectangle-1" fill="#FFF9EB" stroke="#E8C48E" stroke-width="2" d="M233 23h208v58H233z"/><text id="constructor:-Object" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="243" y="39">constructor: Object</tspan> <tspan x="243" y="54">toString: function</tspan> <tspan x="243" y="69">...</tspan></text><text id="Object.prototype" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="232" y="15">Object.prototype</tspan></text><path id="Rectangle-1-Copy-2" fill="#FFF9EB" stroke="#E8C48E" stroke-width="2" d="M10 23h107v28H10z"/><text id="Object" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="9" y="15">Object</tspan></text><path id="Line-Copy" fill="#EE6B47" fill-rule="nonzero" d="M194 27l14 7-14 7v-6h-67v-2h67v-6z"/><text id="prototype" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="134" y="22">prototype</tspan></text></g></g></svg>

当 `new Object()` 被调用（或一个字面量对象 `{...}` 被创建），这个对象的 `[[Prototype]]` 属性被设置为`Object.prototype`：

<svg xmlns="http://www.w3.org/2000/svg" width="453" height="199" viewBox="0 0 453 199"><defs><style>@import url(https://fonts.googleapis.com/css?family=Open+Sans:bold,italic,bolditalic%7CPT+Mono);@font-face{font-family:'PT Mono';font-weight:700;font-style:normal;src:local('PT MonoBold'),url(/font/PTMonoBold.woff2) format('woff2'),url(/font/PTMonoBold.woff) format('woff'),url(/font/PTMonoBold.ttf) format('truetype')}</style></defs><g id="inheritance" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g id="object-prototype-1.svg"><path id="Rectangle-1" fill="#FFF9EB" stroke="#E8C48E" stroke-width="2" d="M238 23h208v58H238z"/><text id="constructor:-Object" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="248" y="40">constructor: Object</tspan> <tspan x="248" y="55">toString: function</tspan> <tspan x="248" y="70">...</tspan></text><path id="Rectangle-1-Copy" fill="#FFF9EB" stroke="#E8C48E" stroke-width="2" d="M238 164h178v28H238z"/><text id="Object.prototype" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="237" y="15">Object.prototype</tspan></text><path id="Rectangle-1-Copy-2" fill="#FFF9EB" stroke="#E8C48E" stroke-width="2" d="M10 23h108v28H10z"/><text id="Object" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="9" y="15">Object</tspan></text><text id="obj-=-new-Object()" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="243" y="154">obj = new Object()</tspan></text><path id="Line" fill="#EE6B47" fill-rule="nonzero" d="M326.5 94.5l7 14h-6v28h-2v-28h-6l7-14z"/><path id="Line-Copy" fill="#EE6B47" fill-rule="nonzero" d="M212.5 27l14 7-14 7v-6H127v-2h85.5v-6z"/><text id="[[Prototype]]" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="336" y="118">[[Prototype]]</tspan></text><text id="prototype" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="134" y="22">prototype</tspan></text></g></g></svg>

所以，之后当 `obj.toString()` 被调用时，这个方法是从 `Object.prototype` 中获取的。

我们可以这样验证它：

```javascript
let obj = {};

alert(obj.__proto__ === Object.prototype); // true
// obj.toString === obj.__proto__.toString == Object.prototype.toString
```

请注意在 `Object.prototype` 上方的链中没有更多的 `[[Prototype]]`：

```javascript
alert(Object.prototype.__proto__); // null
```

## 其他内建原型

其他内建对象，像 `Array`、`Date`、`Function` 及其他，都在 prototype 上挂载了方法。

例如，当我们创建一个数组 `[1, 2, 3]`，在内部会默认使用 `new Array()` 构造器。因此 `Array.prototype` 变成了这个数组的 prototype，并为这个数组提供数组的操作方法。这样内存的存储效率是很高的。

按照规范，所有的内建原型顶端都是 `Object.prototype`。这就是为什么有人说“一切都从对象继承而来”。

下面是完整的示意图（3 个内建对象）：

<svg xmlns="http://www.w3.org/2000/svg" width="692" height="411" viewBox="0 0 692 411"><defs><style>@import url(https://fonts.googleapis.com/css?family=Open+Sans:bold,italic,bolditalic%7CPT+Mono);@font-face{font-family:'PT Mono';font-weight:700;font-style:normal;src:local('PT MonoBold'),url(/font/PTMonoBold.woff2) format('woff2'),url(/font/PTMonoBold.woff) format('woff'),url(/font/PTMonoBold.ttf) format('truetype')}</style></defs><g id="inheritance" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g id="native-prototypes-classes.svg"><path id="Rectangle-1" fill="#FFF9EB" stroke="#E8C48E" stroke-width="2" d="M240 93h198v58H240z"/><text id="toString:-function" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="250" y="116">toString: function</tspan> <tspan x="250" y="131">other object methods</tspan></text><text id="Object.prototype" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="239" y="85">Object.prototype</tspan></text><path id="Line-2" fill="#EE6B47" fill-rule="nonzero" d="M299.5 27.5l7 14h-6v28h-2v-28h-6l7-14z"/><path id="Line-3" fill="#EE6B47" fill-rule="nonzero" d="M299.5 160.5l7 14h-6v28h-2v-28h-6l7-14z"/><text id="null" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="285" y="16">null</tspan></text><path id="Rectangle-1" fill="#FFF9EB" stroke="#E8C48E" stroke-width="2" d="M14 224h198v58H14z"/><text id="slice:-function" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="24" y="247">slice: function</tspan> <tspan x="24" y="262">other array methods</tspan></text><text id="[[Prototype]]" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="66" y="174">[[Prototype]]</tspan></text><text id="[[Prototype]]-Copy-6" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="518" y="175">[[Prototype]]</tspan></text><text id="[[Prototype]]-Copy" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="310" y="187">[[Prototype]]</tspan></text><text id="[[Prototype]]-Copy-2" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="310" y="54">[[Prototype]]</tspan></text><text id="[[Prototype]]" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="310" y="317">[[Prototype]]</tspan></text><text id="[[Prototype]]-Copy-4" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="582" y="317">[[Prototype]]</tspan></text><text id="[[Prototype]]-Copy-5" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="117" y="317">[[Prototype]]</tspan></text><text id="Array.prototype" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="13" y="216">Array.prototype</tspan></text><path id="Rectangle-1" fill="#FFF9EB" stroke="#E8C48E" stroke-width="2" d="M243 224h198v58H243z"/><text id="call:-function-other" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="253" y="247">call: function</tspan> <tspan x="253" y="262">other function methods</tspan></text><text id="Function.prototype" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="242" y="216">Function.prototype</tspan></text><path id="Rectangle-1" fill="#FFF9EB" stroke="#E8C48E" stroke-width="2" d="M474 224h198v58H474z"/><text id="toFixed:-function" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="484" y="247">toFixed: function</tspan> <tspan x="484" y="262">other number methods</tspan></text><text id="Number.prototype" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="473" y="216">Number.prototype</tspan></text><path id="Line" fill="#EE6B47" fill-rule="nonzero" d="M204.855 157.011l15.645.489-9.778 12.223-2.515-5.448-65.288 30.133-.908.419-.838-1.816.908-.419 65.288-30.133-2.514-5.448zM478.147 157.088l-2.542 5.435 64.319 30.071.905.424-.847 1.811-.906-.423-64.318-30.071-2.54 5.436L462.5 157.5l15.647-.412z"/><path id="Rectangle-5" fill="#FFF9EB" stroke="#E8C48E" stroke-width="2" d="M48 339h117v23H48z"/><text id="[1,-2,-3]" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="71" y="354">[1, 2, 3]</tspan></text><path id="Rectangle-6" fill="#FFF9EB" stroke="#E8C48E" stroke-width="2" d="M243 339h198v65H243z"/><text id="function-f(args)-{" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="264" y="358">function f(args) {</tspan> <tspan x="264" y="373"> ...</tspan> <tspan x="264" y="388">}</tspan></text><path id="Rectangle-7" fill="#FFF9EB" stroke="#E8C48E" stroke-width="2" d="M541 339h69v23h-69z"/><text id="5" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="573" y="355">5</tspan></text><path id="Line-4" fill="#EE6B47" fill-rule="nonzero" d="M299.5 290.5l7 14h-6v28h-2v-28h-6l7-14z"/><path id="Line-5" fill="#EE6B47" fill-rule="nonzero" d="M576.5 290.5l7 14h-6v28h-2v-28h-6l7-14z"/><path id="Line-6" fill="#EE6B47" fill-rule="nonzero" d="M106.5 290.5l7 14h-6v28h-2v-28h-6l7-14z"/></g></g></svg>

让我们手动验证原型：

```javascript
let arr = [1, 2, 3];

// 它继承自 Array.prototype？
alert( arr.__proto__ === Array.prototype ); // true

// 接下来继承自 Object.prototype？
alert( arr.__proto__.__proto__ === Object.prototype ); // true

// 原型链的顶端为 null。
alert( arr.__proto__.__proto__.__proto__ ); // null
```

一些方法在原型上可能会发生重叠，例如，`Array.prototype` 有自己的 `toString` 方法来列举出来数组的所有元素并用逗号分隔每一个元素。

```javascript
let arr = [1, 2, 3]
alert(arr); // 1,2,3 <-- Array.prototype.toString 的结果
```

正如我们之前看到的那样，`Object.prototype` 也有 `toString` 方法，但是 `Array.prototype` 在原型链上更近，所以数组对象原型上的方法会被使用。

<svg xmlns="http://www.w3.org/2000/svg" width="209" height="316" viewBox="0 0 209 316"><defs><style>@import url(https://fonts.googleapis.com/css?family=Open+Sans:bold,italic,bolditalic%7CPT+Mono);@font-face{font-family:'PT Mono';font-weight:700;font-style:normal;src:local('PT MonoBold'),url(/font/PTMonoBold.woff2) format('woff2'),url(/font/PTMonoBold.woff) format('woff'),url(/font/PTMonoBold.ttf) format('truetype')}</style></defs><g id="inheritance" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g id="native-prototypes-array-tostring.svg"><path id="Rectangle-1" fill="#FFF9EB" stroke="#E8C48E" stroke-width="2" d="M17 156h168v58H17z"/><text id="toString:-function" font-family="PTMono-Bold, PT Mono" font-size="14" font-weight="bold"><tspan x="27" y="179" fill="#EC6B4E">toString: function</tspan>  <tspan x="27" y="194" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-weight="normal">...</tspan></text><text id="Array.prototype" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="16" y="148">Array.prototype</tspan></text><path id="Rectangle-1" fill="#FFF9EB" stroke="#E8C48E" stroke-width="2" d="M17 23h168v58H17z"/><text id="toString:-function" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="27" y="46">toString: function</tspan> <tspan x="27" y="61">...</tspan></text><text id="Object.prototype" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="16" y="15">Object.prototype</tspan></text><path id="Rectangle-1" fill="#FFF9EB" stroke="#E8C48E" stroke-width="2" d="M17 273h168v28H17z"/><path id="Line" fill="#EE6B47" fill-rule="nonzero" d="M76.5 222.5l7 14h-6v28h-2v-28h-6l7-14z"/><text id="[[Prototype]]" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="86" y="244">[[Prototype]]</tspan></text><path id="Line-2" fill="#EE6B47" fill-rule="nonzero" d="M76.5 90.5l7 14h-6v28h-2v-28h-6l7-14z"/><text id="[[Prototype]]" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="86" y="112">[[Prototype]]</tspan></text><text id="[1,-2,-3]" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="41" y="291">[1, 2, 3]</tspan></text></g></g></svg>

浏览器内的工具，像 Chrome 开发者控制台也会显示继承性（可能需要对内置对象使用 `console.dir`）：

<div class="image" style="width:567px">
      <img src="data:image/png;base64,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" alt="" width="567" height="292" class="image__image">
      </div>

其他内建对象也以同样的方式运行。即使是函数 —— 它们是内建构造器 `Function` 的对象，并且它们的方法（`call`/`apply` 及其他）都取自`Function.prototype`。函数也有自己的 `toString` 方法。

```javascript
function f() {}

alert(f.__proto__ == Function.prototype); // true
alert(f.__proto__.__proto__ == Object.prototype); // true, inherit from objects
```

## 基本数据类型

最复杂的事情发生在字符串、数字和布尔值上。

正如我们记忆中的那样，它们并不是对象。但是如果我们试图访问它们的属性，那么临时包装器对象将会通过内建的构造器 `String`、`Number` 和 `Boolean` 被创建。它们提供给我们操作字符串、数字和布尔值的方法然后消失。

这些对象对我们来说是无形地创建出来的。大多数引擎都会对其进行优化，但是规范中描述的就是通过这种方式。这些对象的方法也驻留在它们的 prototype 中，可以通过 `String.prototype`、`Number.prototype` 和 `Boolean.prototype` 进行获取。

**值 `null` 和 `undefined` 没有对象包装器**

特殊值 `null` 和 `undefined` 比较特殊。它们没有对象包装器，所以它们没有方法和属性。并且它们也没有相应的原型

## 更改原生原型

原生的原型是可以被修改的。例如，我们向 `String.prototype` 中添加一个方法，这个方法将对所有的字符串都是可用的：

```javascript
String.prototype.show = function() {
  alert(this);
};

"BOOM!".show(); // BOOM!
```

在开发的过程中，我们可能会想要一些新的内建方法，并且想把它们添加到原生原型中。但这通常是一个很不好的想法。

**重要：**

原型是全局的，所以很容易造成冲突。如果有两个库都添加了 `String.prototype.show` 方法，那么其中的一个方法将被另一个覆盖。

所以，通常来说，修改原生原型被认为是一个很不好的想法。

**在现代编程中，只有一种情况下允许修改原生原型。那就是 polyfilling。**

Polyfilling 是一个术语，表示某个方法在 JavaScript 规范中已存在，但是特定的 JavaScript 引擎尚不支持该方法，那么我们可以通过手动实现它，并用以填充内建原型。

```javascript
f (!String.prototype.repeat) { // 如果这儿没有这个方法
  // 那就在 prototype 中添加它

  String.prototype.repeat = function(n) {
    // 重复传入的字符串 n 次

    // 实际上，实现代码比这个要复杂一些（完整的方法可以在规范中找到）
    // 但即使是不够完美的 polyfill 也常常被认为是足够好的
    return new Array(n + 1).join(this);
  };
}

alert( "La".repeat(3) ); // LaLaLa
```

## 从原型中借用

在 [装饰者模式和转发，call/apply](https://zh.javascript.info/call-apply-decorators#method-borrowing) 学习了借用

那是指我们从一个对象获取一个方法，并将其复制到另一个对象

一些原生原型的方法通常会被借用。

例如，如果我们要创建类数组对象，则可能需要向其中复制一些 `Array` 方法。

例如：

```javascript
let obj = {
  0: "Hello",
  1: "world!",
  length: 2,
};

obj.join = Array.prototype.join;

alert( obj.join(',') ); // Hello,world!
```

上面这段代码有效，是因为内建的方法 `join` 的内部算法只关心正确的索引和 `length` 属性。它不会检查这个对象是否是真正的数组。许多内建方法就是这样。

另一种方式是通过将 `obj.__proto__` 设置为 `Array.prototype`，这样 `Array` 中的所有方法都自动地可以在 `obj` 中使用了

但是如果 `obj` 已经从另一个对象进行了继承，那么这种方法就不可行了（译注：因为这样会覆盖掉已有的继承。此处 `obj` 其实已经从 `Object` 进行了继承，但是 `Array` 也继承自 `Object`，所以此处的方法借用不会影响 `obj` 对原有继承的继承，因为 `obj` 通过原型链依旧继承了 `Object`）。请记住，我们一次只能继承一个对象。

方法借用很灵活，它允许在需要时混合来自不同对象的方法。



## 总结

- 所有的内建对象都遵循相同的模式（pattern）
  - 方法都存储在 `prototype` 中（`Array.prototype`、`Object.prototype`、`Date/prototype`等）
  - 对象本身只储存数据（数组元素，对象属性、日期）
- 原始数据类型也将方法存储在包装器独享的`prototype`：`Number.prototype`、`String.prototyep`和 `Boolean.prototype`，只有 `undefined` 和 `null` 没有包装器对象
- 内建原型可以被修改或被用新的方法填充。但是不建议更改它们。唯一允许的情况可能是，当我们添加一个还没有被 JavaScript 引擎支持，但已经被加入 JavaScript 规范的新标准时，才可能允许这样做。

















































































