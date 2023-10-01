function HomePage() {
    return (
        <div>
      <h1 className="hello-title">Hello!</h1>
      <p className="instruction">Please choose one of the following options:</p>
      <div className="button-container">
        <button className="option-button">Option 1</button>
        <button className="option-button">Option 2</button>
        <button className="option-button">Option 3</button>
        <button className="option-button">Option 4</button>
      </div>
    </div>
    );
}

export default HomePage;