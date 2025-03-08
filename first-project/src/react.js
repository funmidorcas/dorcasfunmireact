import React from 'react';
import ReactDOM from 'react-dom/client';

// Writing JSX directly in index.jsx
const App = () => {
    return (
        <div>
            <h1>Hello from index.jsx!</h1>
            <p>This is where you're writing your JSX instead of using App.js.</p>
        </div>
    );
};

// Render the App component to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



// import { createRoot } from "react-dom/client"
// const root = createRoot(document.getElementById("root"))
// root.render(<h1>Hello, react</h1>)