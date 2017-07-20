# webpack-react
技术栈:

  react+react-router4.0+redux+webpack2.0+sass+ES6/7


下载:


  git clone git@github.com:zhangxinjie/webpack-react.git
  cd webpack-react
  npm install


运行:


  npm run start (正常运行)
  npm run build (打包)


React组件化:


  组件的创造方法为React.createClass() ——创造一个类，react系统内部设计了一套类系统，利用它来创造react组件。但这并不是必须的，我们还可以用es6的class类来创造组件,这也是Facebook官方推荐的写法。这两种写法实现的功能一样但是原理却是不同，es6的class类可以看作是构造函数的一个语法糖，可以把它当成构造函数来看，extends实现了类之间的继承 —— 定义一个类Main 继承React.Component所有的属性和方法，组件的生命周期函数就是从这来的。constructor是构造器，在实例化对象时调用，super调用了父类的constructor创造了父类的实例对象this，然后用子类的构造函数进行修改。这和es5的原型继承是不同的，原型继承是先创造一个实例化对象this，然后再继承父级的原型方法。了解了这些之后我们在看组件的时候就清楚很多。

  当我们使用组件< Main />时，其实是对Main类的实例化——new Main，只不过react对这个过程进行了封装，让它看起来更像是一个标签。

  有三点值得注意：1、定义类名字的首字母必须大写 2、因为class变成了关键字，类选择器需要用className来代替。 3、类和模块内部默认使用严格模式，所以不需要用use strict指定运行模式。
组件的生命周期:
  组件在初始化时会触发5个钩子函数：

  1、getDefaultProps()

  设置默认的props，也可以用dufaultProps设置组件的默认属性。


  2、getInitialState()

  在使用es6的class语法时是没有这个钩子函数的，可以直接在constructor中定义this.state。此时可以访问this.props。


  3、componentWillMount()

  组件初始化时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state。


  4、 render()

  react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行。此时就不能更改state了。


  5、componentDidMount()

  组件渲染之后调用，可以通过this.getDOMNode()获取和操作dom节点，只调用一次。
  在更新时也会触发5个钩子函数：


  6、componentWillReceivePorps(nextProps)
  组件初始化时不调用，组件接受新的props时调用。


  7、shouldComponentUpdate(nextProps, nextState)

  react性能优化非常重要的一环。组件接受新的state或者props时调用，我们可以设置在此对比前后两个props和state是否相同，如果相同则返回false阻止更新，因为相同的属性状态一定会生成相同的dom树，这样就不需要创造新的dom树和旧的dom树进行diff算法对比，节省大量性能，尤其是在dom结构复杂的时候。不过调用this.forceUpdate会跳过此步骤。


  8、componentWillUpdate(nextProps, nextState)

  组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state


  9、render()

  不多说


  10、componentDidUpdate()

  组件初始化时不调用，组件更新完成后调用，此时可以获取dom节点。
  还有一个卸载钩子函数

  
  11、componentWillUnmount()

  组件将要卸载时调用，一些事件监听和定时器需要在此时清除。
  以上可以看出来react总共有10个周期函数（render重复一次），这个10个函数可以满足我们所有对组件操作的需求，利用的好可以提高开发效率和组件性能。
