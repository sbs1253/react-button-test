import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{count}</h3>
        <button
          type="button"
          data-testid="minus-button"
          onClick={() => setCount((prev) => prev - 1)}
        >
          {/* setState는 비동기로 작동한다. = state의 값은 setState가 호출되는 시점이 아닌, 해당 코드가 들어있는 함수가 모두 실행된 이후에 바뀐다.
          => 임시공간에 있는값을 사용하기위해 prev(임시공간) 사용해야 올바른 값이 나옴 */}
          -
        </button>
        <button
          type="button"
          data-testid="plus-button"
          onClick={() => setCount((prev) => prev + 1)}
        >
          +
        </button>
        <div>
          <button
            type="button"
            style={{ backgroundColor: "blue" }}
            data-testid="on/off-button"
          >
            on/off
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
