# 原型继承

## [[[Prototype\]]](https://zh.javascript.info/prototype-inheritance#prototype)

在 JavaScript 中，对象有一个特殊的隐藏属性 `[[Prototype]]`（如规范中所命名的），它要么为 `null`，要么就是对另一个对象的引用。该对象被称为“原型”：

<svg xmlns="http://www.w3.org/2000/svg" width="191" height="150" viewBox="0 0 191 150"><defs><style>@import url(https://fonts.googleapis.com/css?family=Open+Sans:bold,italic,bolditalic%7CPT+Mono);@font-face{font-family:'PT Mono';font-weight:700;font-style:normal;src:local('PT MonoBold'),url(/font/PTMonoBold.woff2) format('woff2'),url(/font/PTMonoBold.woff) format('woff'),url(/font/PTMonoBold.ttf) format('truetype')}</style></defs><g id="inheritance" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g id="object-prototype-empty.svg"><path id="Rectangle-1" fill="#FFF9EB" stroke="#E8C48E" stroke-width="2" d="M14 23h118v28H14z"/><text id="prototype-object" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="12" y="15">prototype object</tspan></text><path id="Rectangle-1" fill="#FFF9EB" stroke="#E8C48E" stroke-width="2" d="M14 111h118v28H14z"/><text id="object" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="13" y="103">object</tspan></text><path id="Line" fill="#EE6B47" fill-rule="nonzero" d="M73.5 60.5l7 14h-6v28h-2v-28h-6l7-14z"/><text id="[[Prototype]]" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="83" y="82">[[Prototype]]</tspan></text></g></g></svg>

原型有点“神奇”。当我们想要从 `object` 中读取一个缺失的属性时，JavaScript 会自动从原型中获取该属性。在编程中，这种行为被称为“原型继承”。许多炫酷的语言特性和编程技巧都基于此。

属性 `[[Prototype]]` 是内部的而且是隐藏的，但是这儿有很多设置它的方式。

其中之一就是使用特殊的名字 `__proto__`，就像这样：

```javascript
let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal;
```

**`__proto__` 是  `[[Prototype]]` 的因历史原因而留下来的 getter/setter**

请注意，`__proto__` 与  `[[Prototype]]` **不一样**。 `__proto__` 是 `[[Prototype]]` 的 getter/setter

`__proto__` 的存在是历史的原因，在现代编程语言中，将其替换为函数 `Object.getPrototypeOf/Object.setPrototypeOf` 也能 get/set 原型。

根据规范，`__proto__` 必须仅在浏览器环境下才能得到支持，但实际上，包括服务端在内的所有环境都支持它。

如果我们在 `rabbit` 中查找一个缺失的属性，JavaScript 会自动从 `animal` 中获取它。

例如：

```javascript
let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal; // (*)

// 现在这两个属性我们都能在 rabbit 中找到：
alert( rabbit.eats ); // true (**)
alert( rabbit.jumps ); // true
```

这里的 `(*)` 行将 `animal` 设置为 `rabbit` 的原型。

 `alert` 试图读取 `rabbit.eats` `(**)` 时，因为它不存在于 `rabbit` 中，所以 JavaScript 会顺着 `[[Prototype]]` 引用，在 `animal` 中查找（自下而上）：

<svg xmlns="http://www.w3.org/2000/svg" width="191" height="150" viewBox="0 0 191 150"><defs><style>@import url(https://fonts.googleapis.com/css?family=Open+Sans:bold,italic,bolditalic%7CPT+Mono);@font-face{font-family:'PT Mono';font-weight:700;font-style:normal;src:local('PT MonoBold'),url(/font/PTMonoBold.woff2) format('woff2'),url(/font/PTMonoBold.woff) format('woff'),url(/font/PTMonoBold.ttf) format('truetype')}</style></defs><g id="inheritance" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g id="proto-animal-rabbit.svg"><path id="Rectangle-1" fill="#FFF9EB" stroke="#E8C48E" stroke-width="2" d="M14 23h118v28H14z"/><text id="eats:-true" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="24" y="40">eats: true</tspan></text><text id="animal" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="13" y="15">animal</tspan></text><path id="Rectangle-1" fill="#FFF9EB" stroke="#E8C48E" stroke-width="2" d="M14 111h118v28H14z"/><text id="jumps:-true" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="24" y="128">jumps: true</tspan></text><text id="rabbit" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="13" y="103">rabbit</tspan></text><path id="Line" fill="#EE6B47" fill-rule="nonzero" d="M73.5 60.5l7 14h-6v28h-2v-28h-6l7-14z"/><text id="[[Prototype]]" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="83" y="82">[[Prototype]]</tspan></text></g></g></svg>

在这儿我们可以说 "`animal` 是 `rabbit` 的原型"，或者说 "`rabbit` 的原型是从 `animal` 继承而来的"。

因此，如果 `animal` 有许多有用的属性和方法，那么它们将自动地变为在 `rabbit` 中可用。这种属性被称为“继承”。

如果我们在 `animal` 中有一个方法，它可以在 `rabbit` 中被调用：

```javascript
let animal = {
  eats: true,
  walk() {
    alert("Animal walk");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

// walk 方法是从原型中获得的
rabbit.walk(); // Animal walk
```

该方法是自动地从原型中获得的，像这样：

<figure><div class="image" style="width:205px">
      <object type="image/svg+xml" data="/article/prototype-inheritance/proto-animal-rabbit-walk.svg" width="205" height="173" class="image__image">
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDUiIGhlaWdodD0iMTczIiB2aWV3Qm94PSIwIDAgMjA1IDE3MyI+PGRlZnM+PHN0eWxlPkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6Ym9sZCxpdGFsaWMsYm9sZGl0YWxpYyU3Q1BUK01vbm8pO0Bmb250LWZhY2V7Zm9udC1mYW1pbHk6JmFwb3M7UFQgTW9ubyZhcG9zOztmb250LXdlaWdodDo3MDA7Zm9udC1zdHlsZTpub3JtYWw7c3JjOmxvY2FsKCZhcG9zO1BUIE1vbm9Cb2xkJmFwb3M7KSx1cmwoL2ZvbnQvUFRNb25vQm9sZC53b2ZmMikgZm9ybWF0KCZhcG9zO3dvZmYyJmFwb3M7KSx1cmwoL2ZvbnQvUFRNb25vQm9sZC53b2ZmKSBmb3JtYXQoJmFwb3M7d29mZiZhcG9zOyksdXJsKC9mb250L1BUTW9ub0JvbGQudHRmKSBmb3JtYXQoJmFwb3M7dHJ1ZXR5cGUmYXBvczspfTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJpbmhlcml0YW5jZSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSI+PGcgaWQ9InByb3RvLWFuaW1hbC1yYWJiaXQtd2Fsay5zdmciPjxwYXRoIGlkPSJSZWN0YW5nbGUtMSIgZmlsbD0iI0ZGRjlFQiIgc3Ryb2tlPSIjRThDNDhFIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xNCAyM2gxMzV2NDhIMTR6Ii8+PHRleHQgaWQ9ImVhdHM6LXRydWUiIGZvbnQtZmFtaWx5PSJQVE1vbm8tUmVndWxhciwgUFQgTW9ubyIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9Im5vcm1hbCI+PHRzcGFuIHg9IjI0IiB5PSI0MiIgZmlsbD0iIzhBNzA0RCI+ZWF0czogdHJ1ZTwvdHNwYW4+IDx0c3BhbiB4PSIyNCIgeT0iNTciIGZpbGw9IiNFQzZCNEUiIGZvbnQtZmFtaWx5PSJQVE1vbm8tQm9sZCwgUFQgTW9ubyIgZm9udC13ZWlnaHQ9ImJvbGQiPndhbGs6IGZ1bmN0aW9uPC90c3Bhbj48L3RleHQ+PHRleHQgaWQ9ImFuaW1hbCIgZmlsbD0iIzhBNzA0RCIgZm9udC1mYW1pbHk9IlBUTW9uby1SZWd1bGFyLCBQVCBNb25vIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0ibm9ybWFsIj48dHNwYW4geD0iMTMiIHk9IjE1Ij5hbmltYWw8L3RzcGFuPjwvdGV4dD48cGF0aCBpZD0iUmVjdGFuZ2xlLTEiIGZpbGw9IiNGRkY5RUIiIHN0cm9rZT0iI0U4QzQ4RSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMTQgMTM1aDEzNXYyOEgxNHoiLz48dGV4dCBpZD0ianVtcHM6LXRydWUiIGZpbGw9IiM4QTcwNEQiIGZvbnQtZmFtaWx5PSJQVE1vbm8tUmVndWxhciwgUFQgTW9ubyIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9Im5vcm1hbCI+PHRzcGFuIHg9IjI0IiB5PSIxNTIiPmp1bXBzOiB0cnVlPC90c3Bhbj48L3RleHQ+PHRleHQgaWQ9InJhYmJpdCIgZmlsbD0iIzhBNzA0RCIgZm9udC1mYW1pbHk9IlBUTW9uby1SZWd1bGFyLCBQVCBNb25vIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0ibm9ybWFsIj48dHNwYW4geD0iMTMiIHk9IjEyNyI+cmFiYml0PC90c3Bhbj48L3RleHQ+PHBhdGggaWQ9IkxpbmUiIGZpbGw9IiNFRTZCNDciIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTc4LjUgODQuNWw3IDE0aC02djI4aC0ydi0yOGgtNmw3LTE0eiIvPjx0ZXh0IGlkPSJbW1Byb3RvdHlwZV1dIiBmaWxsPSIjOEE3MDREIiBmb250LWZhbWlseT0iUFRNb25vLVJlZ3VsYXIsIFBUIE1vbm8iIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJub3JtYWwiPjx0c3BhbiB4PSI4OCIgeT0iMTA2Ij5bW1Byb3RvdHlwZV1dPC90c3Bhbj48L3RleHQ+PC9nPjwvZz48L3N2Zz4=" alt="" width="205" height="173">
      </object>
      </div></figure>

原型链可以很长：

```javascript
let animal = {
  eats: true,
  walk() {
    alert("Animal walk");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

let longEar = {
  earLength: 10,
  __proto__: rabbit
};

// walk 是通过原型链获得的
longEar.walk(); // Animal walk
alert(longEar.jumps); // true（从 rabbit）
```

<svg xmlns="http://www.w3.org/2000/svg" width="206" height="258" viewBox="0 0 206 258"><defs><style>@import url(https://fonts.googleapis.com/css?family=Open+Sans:bold,italic,bolditalic%7CPT+Mono);@font-face{font-family:'PT Mono';font-weight:700;font-style:normal;src:local('PT MonoBold'),url(/font/PTMonoBold.woff2) format('woff2'),url(/font/PTMonoBold.woff) format('woff'),url(/font/PTMonoBold.ttf) format('truetype')}</style></defs><g id="inheritance" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g id="proto-animal-rabbit-chain.svg"><path id="Rectangle-1" fill="#FFF9EB" stroke="#E8C48E" stroke-width="2" d="M14 23h134v48H14z"/><text id="eats:-true" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="24" y="42">eats: true</tspan> <tspan x="24" y="57">walk: function</tspan></text><text id="animal" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="13" y="15">animal</tspan></text><path id="Rectangle-1" fill="#FFF9EB" stroke="#E8C48E" stroke-width="2" d="M14 134h134v28H14z"/><text id="jumps:-true" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="24" y="151">jumps: true</tspan></text><text id="rabbit" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="13" y="126">rabbit</tspan></text><path id="Line" fill="#EE6B47" fill-rule="nonzero" d="M78.5 83.5l7 14h-6v28h-2v-28h-6l7-14z"/><text id="[[Prototype]]" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="88" y="105">[[Prototype]]</tspan></text><path id="Rectangle-1-Copy" fill="#FFF9EB" stroke="#E8C48E" stroke-width="2" d="M14 227h134v28H14z"/><text id="earLength:-10" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="24" y="244">earLength: 10</tspan></text><text id="longEar" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="13" y="219">longEar</tspan></text><path id="Line-Copy" fill="#EE6B47" fill-rule="nonzero" d="M78.5 176.5l7 14h-6v28h-2v-28h-6l7-14z"/><text id="[[Prototype]]-Copy" fill="#8A704D" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="88" y="198">[[Prototype]]</tspan></text></g></g></svg>

这里只有两个限制：

1. 引用不能形成闭环。如果我们试图在一个闭环中分配 `__proto__`，JavaScript 会抛出错误。
2. `__proto__` 的值可以是对象，也可以是 `null`。而其他的类型都会被忽略。

当然，这可能很显而易见，但是仍然要强调：**只能有一个 `[[Prototype]]`。一个对象不能从其他两个对象获得继承。**

## 写入不适用原型

原型仅用于读取属性。

对于写入/删除操作可以直接在对象上进行。

在下面的示例中，我们将为 `rabbit` 分配自己的 `walk`：

```javascript
let animal = {
  eats: true,
  walk() {
    /* rabbit 不会使用此方法 */
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.walk = function() {
  alert("Rabbit! Bounce-bounce!");
};

rabbit.walk(); // Rabbit! Bounce-bounce!
```

从现在开始，`rabbit.walk()` 将立即在对象中找到该方法并执行，而无需使用原型：

<figure><div class="image" style="width:202px">
      <object type="image/svg+xml" data="/article/prototype-inheritance/proto-animal-rabbit-walk-2.svg" width="202" height="173" class="image__image">
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDIiIGhlaWdodD0iMTczIiB2aWV3Qm94PSIwIDAgMjAyIDE3MyI+PGRlZnM+PHN0eWxlPkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6Ym9sZCxpdGFsaWMsYm9sZGl0YWxpYyU3Q1BUK01vbm8pO0Bmb250LWZhY2V7Zm9udC1mYW1pbHk6JmFwb3M7UFQgTW9ubyZhcG9zOztmb250LXdlaWdodDo3MDA7Zm9udC1zdHlsZTpub3JtYWw7c3JjOmxvY2FsKCZhcG9zO1BUIE1vbm9Cb2xkJmFwb3M7KSx1cmwoL2ZvbnQvUFRNb25vQm9sZC53b2ZmMikgZm9ybWF0KCZhcG9zO3dvZmYyJmFwb3M7KSx1cmwoL2ZvbnQvUFRNb25vQm9sZC53b2ZmKSBmb3JtYXQoJmFwb3M7d29mZiZhcG9zOyksdXJsKC9mb250L1BUTW9ub0JvbGQudHRmKSBmb3JtYXQoJmFwb3M7dHJ1ZXR5cGUmYXBvczspfTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJpbmhlcml0YW5jZSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSI+PGcgaWQ9InByb3RvLWFuaW1hbC1yYWJiaXQtd2Fsay0yLnN2ZyI+PHBhdGggaWQ9IlJlY3RhbmdsZS0xIiBmaWxsPSIjRkZGOUVCIiBzdHJva2U9IiNFOEM0OEUiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTE0IDIzaDEzNnY0OEgxNHoiLz48dGV4dCBpZD0iZWF0czotdHJ1ZSIgZmlsbD0iIzhBNzA0RCIgZm9udC1mYW1pbHk9IlBUTW9uby1SZWd1bGFyLCBQVCBNb25vIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0ibm9ybWFsIj48dHNwYW4geD0iMjQiIHk9IjQyIj5lYXRzOiB0cnVlPC90c3Bhbj4gPHRzcGFuIHg9IjI0IiB5PSI1NyI+d2FsazogZnVuY3Rpb248L3RzcGFuPjwvdGV4dD48dGV4dCBpZD0iYW5pbWFsIiBmaWxsPSIjOEE3MDREIiBmb250LWZhbWlseT0iUFRNb25vLVJlZ3VsYXIsIFBUIE1vbm8iIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJub3JtYWwiPjx0c3BhbiB4PSIxMyIgeT0iMTUiPmFuaW1hbDwvdHNwYW4+PC90ZXh0PjxwYXRoIGlkPSJSZWN0YW5nbGUtMSIgZmlsbD0iI0ZGRjlFQiIgc3Ryb2tlPSIjRThDNDhFIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xNCAxMzRoMTM2djI4SDE0eiIvPjx0ZXh0IGlkPSJ3YWxrOi1mdW5jdGlvbiIgZmlsbD0iI0VDNkI0RSIgZm9udC1mYW1pbHk9IlBUTW9uby1Cb2xkLCBQVCBNb25vIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCI+PHRzcGFuIHg9IjI0IiB5PSIxNTIiPndhbGs6IGZ1bmN0aW9uPC90c3Bhbj48L3RleHQ+PHRleHQgaWQ9InJhYmJpdCIgZmlsbD0iIzhBNzA0RCIgZm9udC1mYW1pbHk9IlBUTW9uby1SZWd1bGFyLCBQVCBNb25vIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0ibm9ybWFsIj48dHNwYW4geD0iMTMiIHk9IjEyNiI+cmFiYml0PC90c3Bhbj48L3RleHQ+PHBhdGggaWQ9IkxpbmUiIGZpbGw9IiNFRTZCNDciIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTc4LjUgODMuNWw3IDE0aC02djI4aC0ydi0yOGgtNmw3LTE0eiIvPjx0ZXh0IGlkPSJbW1Byb3RvdHlwZV1dIiBmaWxsPSIjOEE3MDREIiBmb250LWZhbWlseT0iUFRNb25vLVJlZ3VsYXIsIFBUIE1vbm8iIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJub3JtYWwiPjx0c3BhbiB4PSI4OCIgeT0iMTA1Ij5bW1Byb3RvdHlwZV1dPC90c3Bhbj48L3RleHQ+PC9nPjwvZz48L3N2Zz4=" alt="" width="202" height="173">
      </object>
      </div></figure>

访问器（accessor）属性是一个例外，因为分配（assignment）操作是由 setter 函数处理的。因此，写入此类属性实际上与调用函数相同。

也就是这个原因，所以下面这段代码中的 `admin.fullName` 能够正常运行：

```javascript
let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

let admin = {
  __proto__: user,
  isAdmin: true
};

alert(admin.fullName); // John Smith (*)

// setter triggers!
admin.fullName = "Alice Cooper";// (**)
```

在 `(*)` 行中，属性 `admin.fullName` 在原型 `user` 中有一个 getter，因此它会被调用。在 `(**)` 行中，属性在原型中有一个 setter，因此它会被调用。

## "this" 的值

`this` 不受原型的影响。

**无论在哪里找到方法：在一个对象还是在原型中。在一个方法调用中，`this` 始终是点符号 `.` 前面的对象。**

这是一件非常重要的事儿，因为我们可能有一个带有很多方法的大对象，并且还有从其继承的对象。当继承的对象运行继承的方法时，它们将仅修改自己的状态，而不会修改大对象的状态。

例如，这里的 `animal` 代表“方法存储”，`rabbit` 在使用其中的方法。

调用 `rabbit.sleep()` 会在 `rabbit` 对象上设置 `this.isSleeping`：

```javascript
// animal 有一些方法
let animal = {
  walk() {
    if (!this.isSleeping) {
      alert(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  }
};

let rabbit = {
  name: "White Rabbit",
  __proto__: animal
};

// 修改 rabbit.isSleeping
rabbit.sleep();

alert(rabbit.isSleeping); // true
alert(animal.isSleeping); // undefined（原型中没有此属性）
```

结果示意图：

<figure><div class="image" style="width:206px">
      <object type="image/svg+xml" data="/article/prototype-inheritance/proto-animal-rabbit-walk-3.svg" width="206" height="190" class="image__image">
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDYiIGhlaWdodD0iMTkwIiB2aWV3Qm94PSIwIDAgMjA2IDE5MCI+PGRlZnM+PHN0eWxlPkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6Ym9sZCxpdGFsaWMsYm9sZGl0YWxpYyU3Q1BUK01vbm8pO0Bmb250LWZhY2V7Zm9udC1mYW1pbHk6JmFwb3M7UFQgTW9ubyZhcG9zOztmb250LXdlaWdodDo3MDA7Zm9udC1zdHlsZTpub3JtYWw7c3JjOmxvY2FsKCZhcG9zO1BUIE1vbm9Cb2xkJmFwb3M7KSx1cmwoL2ZvbnQvUFRNb25vQm9sZC53b2ZmMikgZm9ybWF0KCZhcG9zO3dvZmYyJmFwb3M7KSx1cmwoL2ZvbnQvUFRNb25vQm9sZC53b2ZmKSBmb3JtYXQoJmFwb3M7d29mZiZhcG9zOyksdXJsKC9mb250L1BUTW9ub0JvbGQudHRmKSBmb3JtYXQoJmFwb3M7dHJ1ZXR5cGUmYXBvczspfTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJpbmhlcml0YW5jZSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSI+PGcgaWQ9InByb3RvLWFuaW1hbC1yYWJiaXQtd2Fsay0zLnN2ZyI+PHBhdGggaWQ9IlJlY3RhbmdsZS0xIiBmaWxsPSIjRkZGOUVCIiBzdHJva2U9IiNFOEM0OEUiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTcgMjNoMTkwdjQ4SDd6Ii8+PHRleHQgaWQ9IndhbGs6LWZ1bmN0aW9uIiBmaWxsPSIjOEE3MDREIiBmb250LWZhbWlseT0iUFRNb25vLVJlZ3VsYXIsIFBUIE1vbm8iIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJub3JtYWwiPjx0c3BhbiB4PSIyNCIgeT0iNDIiPndhbGs6IGZ1bmN0aW9uPC90c3Bhbj4gPHRzcGFuIHg9IjI0IiB5PSI1NyI+c2xlZXA6IGZ1bmN0aW9uPC90c3Bhbj48L3RleHQ+PHRleHQgaWQ9ImFuaW1hbCIgZmlsbD0iIzhBNzA0RCIgZm9udC1mYW1pbHk9IlBUTW9uby1SZWd1bGFyLCBQVCBNb25vIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0ibm9ybWFsIj48dHNwYW4geD0iOCIgeT0iMTUiPmFuaW1hbDwvdHNwYW4+PC90ZXh0Pjx0ZXh0IGlkPSJyYWJiaXQiIGZpbGw9IiM4QTcwNEQiIGZvbnQtZmFtaWx5PSJQVE1vbm8tUmVndWxhciwgUFQgTW9ubyIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9Im5vcm1hbCI+PHRzcGFuIHg9IjgiIHk9IjEyNiI+cmFiYml0PC90c3Bhbj48L3RleHQ+PHBhdGggaWQ9IkxpbmUiIGZpbGw9IiNFRTZCNDciIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTc4LjUgODMuNWw3IDE0aC02djI4aC0ydi0yOGgtNmw3LTE0eiIvPjx0ZXh0IGlkPSJbW1Byb3RvdHlwZV1dIiBmaWxsPSIjOEE3MDREIiBmb250LWZhbWlseT0iUFRNb25vLVJlZ3VsYXIsIFBUIE1vbm8iIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJub3JtYWwiPjx0c3BhbiB4PSI4OCIgeT0iMTA1Ij5bW1Byb3RvdHlwZV1dPC90c3Bhbj48L3RleHQ+PHBhdGggaWQ9IlJlY3RhbmdsZS0xLUNvcHkiIGZpbGw9IiNGRkY5RUIiIHN0cm9rZT0iI0U4QzQ4RSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNyAxMzhoMTkwdjQ4SDd6Ii8+PHRleHQgaWQ9Im5hbWU6LSZxdW90O1doaXRlLVJhYmJpdCZxdW90OyIgZm9udC1mYW1pbHk9IlBUTW9uby1SZWd1bGFyLCBQVCBNb25vIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0ibm9ybWFsIj48dHNwYW4geD0iMjAiIHk9IjE1NyIgZmlsbD0iIzhBNzA0RCI+bmFtZTogJnF1b3Q7V2hpdGUgUmFiYml0JnF1b3Q7PC90c3Bhbj4gPHRzcGFuIHg9IjIwIiB5PSIxNzIiIGZpbGw9IiNFQzZCNEUiIGZvbnQtZmFtaWx5PSJQVE1vbm8tQm9sZCwgUFQgTW9ubyIgZm9udC13ZWlnaHQ9ImJvbGQiPmlzU2xlZXBpbmc6IHRydWU8L3RzcGFuPjwvdGV4dD48L2c+PC9nPjwvc3ZnPg==" alt="" width="206" height="190">
      </object>
      </div></figure>

如果我们还有从 `animal` 继承的其他对象，像 `bird` 和 `snake` 等，它们也将可以访问 `animal` 的方法。但是，每个方法调用中的 `this` 都是在调用时（点符号前）评估的对应的对象，而不是 `animal`。因此，当我们将数据写入 `this` 时，会将其存储到这些对象中。

所以，方法是共享的，但对象状态不是。

## for...in 循环

`for..in` 循环也会迭代继承的属性

例如：

```javascript
let animal = {
  eats: true
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

// Object.keys 只返回自己的 key
alert(Object.keys(rabbit)); // jumps

// for..in 会遍历自己以及继承的键
for(let prop in rabbit) alert(prop); // jumps，然后是 eats
```

如果这不是我们想要的，并且我们想排除继承的属性，那么这儿有一个内建方法 [obj.hasOwnProperty(key)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)：如果 `obj` 具有自己的（非继承的）名为 `key` 的属性，则返回 `true`。

因此，我们可以过滤掉继承的属性（或对它们进行其他操作）：

```javascript
let animal = {
  eats: true
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

for(let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    alert(`Our: ${prop}`); // Our: jumps
  } else {
    alert(`Inherited: ${prop}`); // Inherited: eats
  }
}
```

这里我们有以下继承链：`rabbit` 从 `animal` 中继承，`animal` 从 `Object.prototype` 中继承（因为 `animal` 是对象字面量 `{...}`，所以这是默认的继承），然后再向上是 `null`：

<figure><div class="image" style="width:233px">
      <object type="image/svg+xml" data="/article/prototype-inheritance/rabbit-animal-object.svg" width="233" height="344" class="image__image">
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMzMiIGhlaWdodD0iMzQ0IiB2aWV3Qm94PSIwIDAgMjMzIDM0NCI+PGRlZnM+PHN0eWxlPkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6Ym9sZCxpdGFsaWMsYm9sZGl0YWxpYyU3Q1BUK01vbm8pO0Bmb250LWZhY2V7Zm9udC1mYW1pbHk6JmFwb3M7UFQgTW9ubyZhcG9zOztmb250LXdlaWdodDo3MDA7Zm9udC1zdHlsZTpub3JtYWw7c3JjOmxvY2FsKCZhcG9zO1BUIE1vbm9Cb2xkJmFwb3M7KSx1cmwoL2ZvbnQvUFRNb25vQm9sZC53b2ZmMikgZm9ybWF0KCZhcG9zO3dvZmYyJmFwb3M7KSx1cmwoL2ZvbnQvUFRNb25vQm9sZC53b2ZmKSBmb3JtYXQoJmFwb3M7d29mZiZhcG9zOyksdXJsKC9mb250L1BUTW9ub0JvbGQudHRmKSBmb3JtYXQoJmFwb3M7dHJ1ZXR5cGUmYXBvczspfTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJpbmhlcml0YW5jZSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSI+PGcgaWQ9InJhYmJpdC1hbmltYWwtb2JqZWN0LnN2ZyI+PHBhdGggaWQ9IlJlY3RhbmdsZS0xIiBmaWxsPSIjRkZGOUVCIiBzdHJva2U9IiNFOEM0OEUiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTE0IDk2aDIxOHY1OEgxNHoiLz48dGV4dCBpZD0idG9TdHJpbmc6LWZ1bmN0aW9uIiBmaWxsPSIjOEE3MDREIiBmb250LWZhbWlseT0iUFRNb25vLVJlZ3VsYXIsIFBUIE1vbm8iIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJub3JtYWwiPjx0c3BhbiB4PSIyNCIgeT0iMTEzIj50b1N0cmluZzogZnVuY3Rpb248L3RzcGFuPiA8dHNwYW4geD0iMjQiIHk9IjEyOCI+aGFzT3duUHJvcGVydHk6IGZ1bmN0aW9uPC90c3Bhbj4gPHRzcGFuIHg9IjI0IiB5PSIxNDMiPi4uLjwvdHNwYW4+PC90ZXh0Pjx0ZXh0IGlkPSJPYmplY3QucHJvdG90eXBlIiBmaWxsPSIjOEE3MDREIiBmb250LWZhbWlseT0iUFRNb25vLVJlZ3VsYXIsIFBUIE1vbm8iIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJub3JtYWwiPjx0c3BhbiB4PSIxMyIgeT0iODgiPk9iamVjdC5wcm90b3R5cGU8L3RzcGFuPjwvdGV4dD48cGF0aCBpZD0iUmVjdGFuZ2xlLTEiIGZpbGw9IiNGRkY5RUIiIHN0cm9rZT0iI0U4QzQ4RSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMTQgMjEzaDIxOHYyOEgxNHoiLz48dGV4dCBpZD0iYW5pbWFsIiBmaWxsPSIjOEE3MDREIiBmb250LWZhbWlseT0iUFRNb25vLVJlZ3VsYXIsIFBUIE1vbm8iIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJub3JtYWwiPjx0c3BhbiB4PSIxMyIgeT0iMjA1Ij5hbmltYWw8L3RzcGFuPjwvdGV4dD48cGF0aCBpZD0iTGluZSIgZmlsbD0iI0VFNkI0NyIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNNzMuNSAxNjIuNWw3IDE0aC02djI4aC0ydi0yOGgtNmw3LTE0eiIvPjx0ZXh0IGlkPSJbW1Byb3RvdHlwZV1dIiBmaWxsPSIjOEE3MDREIiBmb250LWZhbWlseT0iUFRNb25vLVJlZ3VsYXIsIFBUIE1vbm8iIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJub3JtYWwiPjx0c3BhbiB4PSI4MyIgeT0iMTg0Ij5bW1Byb3RvdHlwZV1dPC90c3Bhbj48L3RleHQ+PHRleHQgaWQ9IltbUHJvdG90eXBlXV0tQ29weSIgZmlsbD0iIzhBNzA0RCIgZm9udC1mYW1pbHk9IlBUTW9uby1SZWd1bGFyLCBQVCBNb25vIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0ibm9ybWFsIj48dHNwYW4geD0iODMiIHk9IjI3NCI+W1tQcm90b3R5cGVdXTwvdHNwYW4+PC90ZXh0PjxwYXRoIGlkPSJMaW5lLTIiIGZpbGw9IiNFRTZCNDciIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTczLjUgMzAuNWw3IDE0aC02djI4aC0ydi0yOGgtNmw3LTE0eiIvPjx0ZXh0IGlkPSJbW1Byb3RvdHlwZV1dIiBmaWxsPSIjOEE3MDREIiBmb250LWZhbWlseT0iUFRNb25vLVJlZ3VsYXIsIFBUIE1vbm8iIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJub3JtYWwiPjx0c3BhbiB4PSI4MyIgeT0iNTIiPltbUHJvdG90eXBlXV08L3RzcGFuPjwvdGV4dD48dGV4dCBpZD0ibnVsbCIgZmlsbD0iIzhBNzA0RCIgZm9udC1mYW1pbHk9IlBUTW9uby1SZWd1bGFyLCBQVCBNb25vIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0ibm9ybWFsIj48dHNwYW4geD0iNTkiIHk9IjE5Ij5udWxsPC90c3Bhbj48L3RleHQ+PHRleHQgaWQ9ImVhdHM6LXRydWUiIGZpbGw9IiM4QTcwNEQiIGZvbnQtZmFtaWx5PSJQVE1vbm8tUmVndWxhciwgUFQgTW9ubyIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9Im5vcm1hbCI+PHRzcGFuIHg9IjI0IiB5PSIyMzEiPmVhdHM6IHRydWU8L3RzcGFuPjwvdGV4dD48cGF0aCBpZD0iUmVjdGFuZ2xlLTEtQ29weSIgZmlsbD0iI0ZGRjlFQiIgc3Ryb2tlPSIjRThDNDhFIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xNCAzMDJoMjE4djI4SDE0eiIvPjx0ZXh0IGlkPSJyYWJiaXQtY29weSIgZmlsbD0iIzhBNzA0RCIgZm9udC1mYW1pbHk9IlBUTW9uby1SZWd1bGFyLCBQVCBNb25vIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0ibm9ybWFsIj48dHNwYW4geD0iMTMiIHk9IjI5NCI+cmFiYml0PC90c3Bhbj48L3RleHQ+PHBhdGggaWQ9IkxpbmUtQ29weSIgZmlsbD0iI0VFNkI0NyIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNNzMuNSAyNTEuNWw3IDE0aC02djI4aC0ydi0yOGgtNmw3LTE0eiIvPjx0ZXh0IGlkPSJqdW1wczotdHJ1ZSIgZmlsbD0iIzhBNzA0RCIgZm9udC1mYW1pbHk9IlBUTW9uby1SZWd1bGFyLCBQVCBNb25vIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0ibm9ybWFsIj48dHNwYW4geD0iMjQiIHk9IjMyMCI+anVtcHM6IHRydWU8L3RzcGFuPjwvdGV4dD48L2c+PC9nPjwvc3ZnPg==" alt="" width="233" height="344">
      </object>
      </div></figure>

注意，这有一件很有趣的事儿。方法 `rabbit.hasOwnProperty` 来自哪儿？我们并没有定义它。从上图中的原型链我们可以看到，该方法是 `Object.prototype.hasOwnProperty` 提供的。换句话说，它是继承的。

……如果 `for..in` 循环会列出继承的属性，那为什么 `hasOwnProperty` 没有像 `eats` 和 `jumps` 那样出现在 `for..in` 循环中？

答案很简单：它是不可枚举的。就像 `Object.prototype` 的其他属性，`hasOwnProperty` 有 `enumerable:false` 标志。并且 `for..in` 只会列出可枚举的属性。这就是为什么它和其余的 `Object.prototype` 属性都未被列出。

**几乎所有其他键/值获取方法都忽略继承的属性**

几乎所有其他键/值获取方法，例如 `Object.keys` 和 `Object.values` 等，都会忽略继承的属性。

它们只会对对象自身进行操作。**不考虑** 继承自原型的属性。

## 总结 

- 在 JavaScript 中，所有对象都有一个隐藏的 `[[Prototype]]`  属性，它要么是另一个对象，要么就是 `null`
- 可以使用 `obj.__proto__` 访问它（历史遗留下来的 getter/setter）
- 通过 `[[Prototype]]` 引用的对象被称为 "原型"
- 想要读取 `obj` 的一个属性或者调用方法，并且它不存在，那么 JavaScript 就会尝试在原型总查找它
- 写/删除操作直接在对象上进行，他们不使用原型（假设它是数据属性，不是 setter）
- 调用 `obj.method()`，而且 `method`是从原型总获取的，`this` 仍然会引用 `obj。因此，方法始终与当前对象一起使用，即使方法是继承的
- `for...in` 循环在其自身和继承的属性上进行迭代。所有其他的键/值获取方法仅对对象本身起作用





























