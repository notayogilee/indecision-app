class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);

    this.state = {
      isVisibile: false
    }
  }

  toggleVisibility() {
    this.setState((prevState) => {
      return {
        isVisible: !prevState.isVisible
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisibility}>{this.state.isVisible ? 'Hide Details' : 'Show Details'}</button>
        {this.state.isVisible && <p>These are some details...</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let showDetails = false;

// const toggleDetails = () => {
//   showDetails = !showDetails;
//   render();
// }

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle App</h1>
//       <button onClick={toggleDetails}>
//         {showDetails ? 'Hide Details' : 'Show Details'}
//       </button>
//       {showDetails && <p>These are some details</p>}
//     </div>
//   );

//   ReactDOM.render(template, document.getElementById('app'));
// }
// render();