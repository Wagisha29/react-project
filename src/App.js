import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";


/**
 * Header
 * - logo
 * - nav items 
 * 
 * Body
 * - search 
 * - search input 
 * - Restaurant container 
 *      - restaurant cards
 *          - img 
 *          - name of restaurants 
 *          - star raiting, cuisines, time for delivery, price for two, 
 * 
 * Footer
 * -copyright
 * - links
 * - contacts
 * 
 */






const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)