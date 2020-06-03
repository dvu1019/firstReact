import React from 'react'
import ReactDOM from 'react-dom';
import './index.css'

const title = "My First React Element!";
const desc = "This is my first description for my paragraphsss";
const titleId = 'main-title'

const header = (
    <header id = {titleId}>
        <h1>{title}</h1>  {/*jsx expression */}
        <p>{desc}</p>
    </header>
);

  ReactDOM.render(
      header,
      document.getElementById('root'),
  );

  console.log(title);