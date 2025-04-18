/*

<div id=parent>
    <div id=children>
        <h1>i m h1 tag </h1>
    </div>
</div>

*/

const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "Hi, i am H1 tag"), React.createElement("h2", {}, "Hi, i am H2 tag")]));

console.log(parent);


const heading = React.createElement(
    "h1",
    { id: 'heading' },
    "hello world from react !!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);