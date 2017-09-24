/*
react-dom.js之后会在window下增加一个ReactDOM属性
也就是说会增加这样的一个全局的变量
*/
// 1.参数
// 2.画布要渲染的那个DOM元素的内容；
ReactDOM.render(
    <h1>jihu</h1>,
    document.getElementById('app')
);