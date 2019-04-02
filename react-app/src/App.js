import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

const baseData = {
  together: '2017-12-27'
}

class App extends Component {
  state = {
    showDT: '~ 亲爱的 ~'
  };
  componentDidMount(){
    setTimeout(() => {
      this.showDT()      
    }, 1000);
  }
  componentWillUnmount(){

  }
  showDT(){
    setTimeout(() => {
      const showDT = this.dateFormat()
      this.setState({
        showDT,
      })
      this.showDT()
    }, 1000);
  }
  dateFormat(){
    // 时间差的毫秒数
    const diffTime = new Date().getTime() - new Date(baseData.together).getTime();      
    
    // 计算出相差天数
    const days = Math.floor(diffTime / (24 * 3600 * 1000))

    //计算天数后剩余的毫秒数
    const leave1 = diffTime % (24 * 3600 * 1000)
    //计算出小时数
    const hours = Math.floor(leave1 / (3600 * 1000))

    //计算小时数后剩余的毫秒数
    const leave2 = leave1 % (3600 * 1000)
    //计算相差分钟数
    const minutes = Math.floor(leave2 / (60 * 1000))

    //计算分钟数后剩余的毫秒数
    const leave3 = leave2 % (60 * 1000)
    //计算相差秒数
    const seconds = Math.round(leave3 / 1000)

    return " 我们已经相识 " + days + " 天 " + hours + " 小时 " + minutes + " 分钟 " + seconds + " 秒 "
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
          {
            this.state.showDT
          }
          </p>
        </header>
        <div>
        </div>
      </div>
    );
  }
}

export default App;
