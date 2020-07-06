# F.prototype

我们还记得，可以使用诸如 `new F()` 这样的构造函数来创建一个新对象。

如果 `F.prototype` 是一个对象，那么 `new` 操作符会使用它为新对象设置 `[[Prototype]]`。

**请注意**

JavaScript 从一开始就有了原型继承。这是 JavaScript 编程语言的核心特性之一。

请注意，这里的 `F.prototype` 指的是 `F` 的一个名为 `"prototype"` 的常规属性。这听起来与“原型”这个术语很类似，但这里我们实际上指的是具有该名字的常规属性。

下面是一个例子：

```javascript
let animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

alert( rabbit.eats ); // true
```

设置 `Rabbit.prototype = animal` 的字面意思是：“当创建了一个 `new Rabbit` 时，把它的 `[[Prototype]]` 赋值为 `animal`”。

这是结果示意图：

<svg xmlns="http://www.w3.org/2000/svg" width="453" height="160" viewBox="0 0 453 160"><defs><style>@import url(https://fonts.googleapis.com/css?family=Open+Sans:bold,italic,bolditalic%7CPT+Mono);@font-face{font-family:'PT Mono';font-weight:700;font-style:normal;src:local('PT MonoBold'),url(/font/PTMonoBold.woff2) format('woff2'),url(/font/PTMonoBold.woff) format('woff'),url(/font/PTMonoBold.ttf) format('truetype')}</style></defs><g id="inheritance" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g id="proto-constructor-animal-rabbit.svg"><path id="Rectangle-1" fill="#FFF9EB" stroke="#E8C48E" stroke-width="2" d="M233 23h187v28H233z"/><text id="eats:-true" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="243" y="42">eats: true</tspan></text><path id="Rectangle-1-Copy" fill="#FFF9EB" stroke="#E8C48E" stroke-width="2" d="M233 124h187v28H233z"/><text id="name:-&quot;White-Rabbit&quot;" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="246" y="143">name: "White Rabbit"</tspan></text><text id="animal" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="232" y="15">animal</tspan></text><path id="Rectangle-1-Copy-2" fill="#FFF9EB" stroke="#E8C48E" stroke-width="2" d="M10 23h99v28H10z"/><text id="Rabbit" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="9" y="15">Rabbit</tspan></text><text id="rabbit" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="238" y="113">rabbit</tspan></text><path id="Line" fill="#EE6B47" fill-rule="nonzero" d="M321.5 68.5l7 14h-6v28h-2v-28h-6l7-14z"/><path id="Line-Copy" fill="#EE6B47" fill-rule="nonzero" d="M208 27l14 7-14 7v-6h-81v-2h81v-6z"/><text id="[[Prototype]]" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="331" y="92">[[Prototype]]</tspan></text><text id="prototype" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="134" y="22">prototype</tspan></text></g></g></svg>

在上图中，`"prototype"` 是一个水平箭头，表示一个常规属性，`[[Prototype]]` 是垂直的，表示 `rabbit` 继承自 `animal`。

**`F.prototype` 仅用在 `new F` 时**

`F.prototype` 属性仅在 `new F` 被调用时使用，它为新对象的 `[[prototype]]` 赋值

如果在创建之后，`F.prototype` 属性有了变化（`F.prototype = <another object>`），那么通过 `new F` 创建的新对象也将随之拥有新的对象作为 `[[Prototype]]`，但已经存在的对象将保持旧有的值。

## 默认的 F.prototype，构造器属性

每个函数都有 `"prototype"` 属性，即使我们没有提供它。

默认的 `"prototype"` 是一个只有属性为 `constructor` 的对象，属性 `constructor` 指向函数自身。

像这样：

```javascript
function Rabbit() {}

/* default prototype
Rabbit.prototype = { constructor: Rabbit };
*/
```

<svg xmlns="http://www.w3.org/2000/svg" width="449" height="73" viewBox="0 0 449 73"><defs><style>@import url(https://fonts.googleapis.com/css?family=Open+Sans:bold,italic,bolditalic%7CPT+Mono);@font-face{font-family:'PT Mono';font-weight:700;font-style:normal;src:local('PT MonoBold'),url(/font/PTMonoBold.woff2) format('woff2'),url(/font/PTMonoBold.woff) format('woff'),url(/font/PTMonoBold.ttf) format('truetype')}</style></defs><g id="inheritance" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g id="function-prototype-constructor.svg"><path id="Rectangle-1" fill="#FFF9EB" stroke="#E8C48E" stroke-width="2" d="M233 23h170v28H233z"/><path id="Rectangle-1-Copy-2" fill="#FFF9EB" stroke="#E8C48E" stroke-width="2" d="M10 23h108v28H10z"/><text id="Rabbit" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="9" y="15">Rabbit</tspan></text><path id="Line-Copy" fill="#EE6B47" fill-rule="nonzero" d="M218 25.5l14 7-14 7v-6H101v-2h117v-6z"/><path id="Line-Copy-2" fill="#EE6B47" fill-rule="nonzero" d="M133 36.5v6h116v2H133v6l-14-7 14-7z"/><text id="prototype" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="20" y="35">prototype</tspan></text><text id="constructor" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="259" y="47">constructor</tspan></text><text id="default-&quot;prototype&quot;" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="234.2" y="15">default "prototype"</tspan></text></g></g></svg>

我们可以检查一下：

```javascript
function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }

alert( Rabbit.prototype.constructor == Rabbit ); // true
```

通常，如果我们什么都不做，`constructor` 属性可以通过 `[[Prototype]]` 给所有 rabbits 使用：

```javascript
function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }

let rabbit = new Rabbit(); // inherits from {constructor: Rabbit}

alert(rabbit.constructor == Rabbit); // true (from prototype)
```

<svg xmlns="http://www.w3.org/2000/svg" width="460" height="157" viewBox="0 0 460 157"><defs><style>@import url(https://fonts.googleapis.com/css?family=Open+Sans:bold,italic,bolditalic%7CPT+Mono);@font-face{font-family:'PT Mono';font-weight:700;font-style:normal;src:local('PT MonoBold'),url(/font/PTMonoBold.woff2) format('woff2'),url(/font/PTMonoBold.woff) format('woff'),url(/font/PTMonoBold.ttf) format('truetype')}</style></defs><g id="inheritance" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g id="rabbit-prototype-constructor.svg"><g id="Line-Copy-5-+-Line-Copy-4-+-Line-Copy-3" stroke="#EC6B4E" stroke-linecap="square" stroke-width="2" transform="matrix(1 0 0 -1 224 108)"><path id="Line-Copy-5" stroke-dasharray="1,2,1,8" d="M86.372 4.412v14.926c0 30.925-85.263 30.925-85.263 30.925"/><path id="Line-Copy-4" d="M1.663 49.76l8.872-9.047"/><path id="Line-Copy-3" d="M.554 50.766l7.763 6.031"/></g><path id="Rectangle-1" fill="#FFF9EB" stroke="#E8C48E" stroke-width="2" d="M248 23v28h158V23H248z"/><text id="default-&quot;prototype&quot;" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="248.2" y="15">default "prototype"</tspan></text><path id="Rectangle-1-Copy" fill="#FFF9EB" stroke="#E8C48E" stroke-width="2" d="M248 121h158v28H248z"/><path id="Rectangle-1-Copy-2" fill="#FFF9EB" stroke="#E8C48E" stroke-width="2" d="M10 23h99v28H10z"/><text id="Rabbit" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="9" y="15">Rabbit</tspan></text><text id="rabbit" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="248" y="112">rabbit</tspan></text><path id="Line" fill="#EE6B47" fill-rule="nonzero" d="M323.5 65.5l7 14h-6v28h-2v-28h-6l7-14z"/><path id="Line-Copy" fill="#EE6B47" fill-rule="nonzero" d="M207 27l14 7-14 7v-6h-80v-2h80v-6z"/><path id="Line-Copy-2" fill="#EE6B47" fill-rule="nonzero" d="M142 37v6h80v2h-80v6l-14-7 14-7z"/><text id="[[Prototype]]" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="333" y="89">[[Prototype]]</tspan></text><text id="prototype" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="134" y="22">prototype</tspan></text><text id="constructor" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="128" y="62">constructor</tspan></text></g></g></svg>

我们可以使用 `constructor` 属性来创建一个新对象，该对象使用与现有对象相同的构造器。

像这样：

```javascript
function Rabbit(name) {
  this.name = name;
  alert(name);
}

let rabbit = new Rabbit("White Rabbit");

let rabbit2 = new rabbit.constructor("Black Rabbit");
```

我们可以使用 `constructor` 属性来创建一个新对象，该对象使用与现有对象相同的构造器。

像这样：

```javascript
function Rabbit(name) {
  this.name = name;
  alert(name);
}

let rabbit = new Rabbit("White Rabbit");

let rabbit2 = new rabbit.constructor("Black Rabbit");
```

当我们有一个对象，但不知道它使用了哪个构造器（例如它来自第三方库），并且我们需要创建另一个类似的对象时，用这种方法就很方便。

但是，关于 `"constructor"` 最重要的是……

**……JavaScript 自身并不能确保正确的 `"constructor"` 函数值。**

是的，它存在于函数的默认 `"prototype"` 中，但仅此而已。之后会发生什么 —— 完全取决于我们。

特别是，如果我们将整个默认 prototype 替换掉，那么其中就不会有 `"constructor"` 了。

```javascript
function Rabbit() {}
Rabbit.prototype = {
  jumps: true
};

let rabbit = new Rabbit();
alert(rabbit.constructor === Rabbit); // false
```

因此，为了确保正确的 `"constructor"`，我们可以选择添加/删除属性到默认 `"prototype"`，而不是将其整个覆盖：

```javascript
function Rabbit() {}

// 不要将 Rabbit.prototype 整个覆盖
// 可以向其中添加内容
Rabbit.prototype.jumps = true
// 默认的 Rabbit.prototype.constructor 被保留了下来
```

或者，也可以手动重新创建 `constructor` 属性：

```javascript
Rabbit.prototype = {
  jumps: true,
  constructor: Rabbit
};

// 这样的 constructor 也是正确的，因为我们手动添加了它
```

## 总结

了解了通过狗找函数创建的对象设置 `[[Prototype]]` 的方法

- `F.prototype` 属性（不要把它与 `[[Prototype]]`弄混了 ）在 `new F` 被调用为新对象的 `[[Prototype]]` 赋值
- `F.prototype` 的值要么是一个对象，要么就是`null` ：其他的值都不起作用
- `"prototype"` 属性仅在设置了一个构造函数（constructor function）,并通过 `new` 调用时，才具有这种特殊的影响

在常规对象上，`prototype` 没什么特别的：

```javascript
let user = {
  name: "John",
  prototype: "Bla-bla" // 这里没有魔法了
};
```

默认情况下，所有函数都有 `F.prototype = {constructor: F}`，所以我们可以通过访问它的 `"constructor"` 属性来获取一个对象的构造器





























