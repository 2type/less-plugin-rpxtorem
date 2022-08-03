# less-plugin-rpxtorem

基于宽度将rpx转换为rem, 宽度默认750;

> 基于 https://github.com/fengdi/less-plugin-rpx2rem 开发

本项目需结合

1. https://github.com/jieyou/rem_layout
2. https://github.com/2type/rem/blob/gh-pages/index.html#L8


----


Convert rpx to rem plugin for less.js

## lessc usage

```
npm install -g less-plugin-rpxtorem
```

and then on the command line,

```
lessc file.less --rpxtorem
```

You can set the 'width' option to control the ratio of rpx to rem (default 100).


```
lessc --rpxtorem="width=750" index.less index.css.
```

## Programmatic usage

```
var LessPluginRpxToRem = require('less-plugin-rpxtorem');
new LessPluginRpxToRem({
    width:750
})
```

## Browser usage

Browser usage is not supported at this time.
