import React from "react";
import  ReactDOM from 'react-dom/client';
//HMR hotmodule reloading using file watcher 
//algorithm is done by parcel 
//which is written in c++
//parcel minifying file
//clears console.log
//imageoptimization
//caching while development
//compile with older version of browser
//HTTPS on dev

const heading1=React.createElement(
    "h1",
    {
        id:"id1",
    },
    "Heading 1"
);
const heading2=React.createElement(
    "h1",
    {
        id:"id2",
    },
    "Heading 2"
);
const container=React.createElement(
    "div",
    {
        id:"container",
    },
    [heading1,heading2]

)

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(container);