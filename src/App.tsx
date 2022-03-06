import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <div>APP {count}</div>
            <button type="button" onClick={() => setCount(count + 1)}>
                add
            </button>
        </div>
    );
}

export default App;
