class Visibility extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility(){
        this.setState((prevState) => {
            console.log(prevState);
            return {
                visibility: !prevState.visibility
            };
        })
    }

    render () {
        return (
            
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && <p>Hey. These are some details you can now see!</p>}
            </div>
        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));

// let visibility = false;

// const toggleVisbility = () => {
//     visibility = !visibility;
//     render();
// };

// const appRoot = document.getElementById('app');

// const render = () => {
//   const jsx = (
//     <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={toggleVisbility}>
//             {visibility ? 'Hide details' : 'Show details'}
//         </button>
//         {visibility && <p>Hey. These are some details you can now see!</p>}
//         {/* You can next paragraph inside parenthesis and div */}

//     </div>
//   );

//   ReactDOM.render(jsx, appRoot);
// };

// render();
