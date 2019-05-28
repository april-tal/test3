import React from 'react';
import './App.css';


class App extends React.Component {
  state = {
    value : 1
  }
  handleIncrease = () => {
    this.setState({
      value : this.state.value + 1
    })
  }
  handleDecrease = () => {

      this.setState({
        value : this.state.value - 1
      })

  }
  render(){
    return (
      <div className="wrap">
        <header>
          <div className="header-middle">
            <input type="text" placeholder="搜索商品"/>
          </div>
        </header>

        <div className="container">
          <div className="new-goods-con-left">
            <ul>
              <li className="current">全部商品</li>
              <li>新鲜水果</li>
              <li>时令蔬菜</li>
              <li>生活家居</li>
            </ul>
          </div>
          <div className="new-goods-con-right">
            <ul className="right-con-bd">
              <li className="item">
                <div className="item-pic">
                  <img src="https://img.yzcdn.cn/upload_files/2018/05/31/FrNdOzhckAlPYM5C3KbFe-YBLG81.jpg?imageView2%2F2%2Fw%2F750%2Fh%2F0%2Fq%2F75%2Fformat%2Fjpg" />
                </div>
                <div className="item-info">
                  <a href="javascript:;" className="goods-name">陕西白鹿原大樱桃</a>
                  <div className="item-price">￥74.00</div>
                  <div className="cat-box">
                    <a href="javascript:;" className={this.state.value < 1 ? 'hide' : 'decrease'} onClick={ this.handleDecrease }>-</a>
                    <input type="text" className={this.state.value < 1 ? 'hide' : ''} value={this.state.value} />
                    <a href="javascript:;" className="increase" onClick={ this.handleIncrease }>+</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
