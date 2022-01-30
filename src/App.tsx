import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    const names = ['Dimych', 'Sveta', 'Katya', 'Victor', 'Ignat']
    const users = [{name: 'Dimych'}, {name: 'Sveta'}, {name: 'Katya'}, {name: 'Victor'}, {name: 'Ignat'}]

    //const liElements = names.map(n => <li>{n}</li>)
    const liElements = users.map((u, index) => <li>{ index } - {u.name}</li>)

    return (
        <div className={"App"}>
            <ul>
                {liElements}
            </ul>
        </div>
    );
}

export default App;
