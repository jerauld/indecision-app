let visibility = false;

const toggleVisbility = () => {
    visibility = !visibility;
    render();
};

const appRoot = document.getElementById('app');

const render = () => {
  const jsx = (
    <div>
        <h1>Visibility Toggle</h1>
        <button onClick={toggleVisbility}>
            {visibility ? 'Hide details' : 'Show details'}
        </button>
        {visibility && <p>Hey. These are some details you can now see!</p>}
        {/* You can next paragraph inside parenthesis and div */}

    </div>
  );

  ReactDOM.render(jsx, appRoot);
};

render();
