class DemoModel {
  state = {
    count: 0,
  };

  increment() {
    // this.state -> 获取自身 model 的 state
    // this.setState() -> 更新自身 model 的 state
    // this.someAction() -> 调用自身 model 的 action

    // this.models.someModel.state -> 获取其它 model 的 state
    // this.models.someModel.someAction() -> 调用其它 model 的 action

    const { count } = this.state;
    this.setState({ count: count + 1 });
  }

  decrement() {
    const { count } = this.state;
    this.setState({ count: count - 1 });
  }

  async incrementAsync() {
    // 自动生成的 `someAsyncAction.loading` state 可供使用

    await new Promise((resolve) => setTimeout(resolve, 1000));
    this.increment();
  }
}

export default DemoModel;
