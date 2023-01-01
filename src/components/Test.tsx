import React,{PureComponent} from "react";
import './test.less'
// 装饰器
function addAge(Target: Function){
  Target.prototype.age = 18
}
@addAge
export class Test extends PureComponent {
  age?:number
  render() {
    console.log('this',this);
    
    return (
      <div>
        我是test组件 --- {this.age}
        <p>
          测试host
        </p>
      </div>
    )
  }
}