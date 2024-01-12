// ReactDOM.render(
//     <ul><li>hello</li><li>my love learn reactjs</li></ul>,
//     document.getElementById("root"));

// function MainContent() {
//     return (
//         <h1>i'm learning reactjs!</h1>
//     )
// }


// ReactDOM.render(
//     <div>
//         <MainContent />
//     </div>
//     , document.getElementById("root")
// )

//add a class
// ReactDOM.render(<h1 className="header">this is a big deal,huh?</h1>, document.getElementById('root'))

//jsx


const production = (
    <nav>
        <h1>John's quickshop</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(
    production,
    document.getElementById('root')
)