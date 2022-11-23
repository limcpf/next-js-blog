import Home from "assets/home-alt.svg";

export default function Head() {

    return <div className="grid head-wrapper">
        <div>
            <Home stroke="#FFFFFF" className="head-home"/>
        </div>
        <div className="heelo">
            <span className="head-home-span">heelo</span>
        </div>
        <div dir="rtl">asd2</div>
    </div>;
}