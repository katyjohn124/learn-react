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




// const production = (
//     <nav>
//         <h1>John's quickshop</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )

// ReactDOM.render(
//     production,
//     document.getElementById('root')
// )

//jsx

// const page = (
//     <div>
//         <img src="images\下载 (2).png" width="40px" />
//         <h1>Fun Facts About React</h1>
//         <ul>
//             <li>omg</li>
//             <li>oops!</li>
//             <li>really huh?</li>
//             <li>are u sure?</li>
//             <li>come on!</li>
//         </ul>
//     </div>
// )

// ReactDOM.render(
//     page,
//     document.getElementById('root')
// )

//custom component

// function Page() {
//     return (
//         <div>
//             <h1>Why Learn React?</h1>
//             <ol>
//                 <li>to find a better job</li>
//                 <li>to run oversea country</li>
//                 <li>to practice my English level</li>
//             </ol>
//         </div>
//     )
// }


// function Reason() {
//     return (
//         <div>
//             <header>
//                 <nav>
//                     <img src="images\下载 (2).png" width="40px" />
//                 </nav>
//             </header>
//             <h1> the reason why i learning react</h1>
//             <ol>
//                 <li>to find a better job</li>
//                 <li>to run oversea country</li>
//                 <li>to practice my English level</li>
//             </ol>
//             <footer>
//                 <small>
//                     @ 2023 john development.All rigths reserved.
//                 </small>
//             </footer>
//         </div>
//     )
// }

// ReactDOM.render(
//     <Reason />,
//     document.getElementById('root')
// )


//parent and child components
import React from 'react';
import Header from "./Header"
import MainContent from "./Maincontent"
import Footer from "./Footer"

function Reason() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(
    <Reason />,
    document.getElementById('root')
)
