import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Home.css";
import DiwaliLamp from "./images/diwali-lamp.png";
import Ballons from "./images/Ballons.png"
import Lamp from "./images/lamp.png";
import mixs from "./images/mixs.png";

const GREETINGS = [
  "वाढदिवस घेऊन येतो सौख्याची, आनंदाची देणी आपल्या वाढदिवशी सगळं आयुष्य गावो समृद्धीची गाणी यश आपल्या पायाशी असंच खेळत राहो जन्मदिवस तुम्हाला आनंदाचा आणि आरोग्याचा जावो वाढदिवसाच्या हार्दिक शुभेच्छा",
  "🎂🎊 शिखरे उत्कर्षाची सर तुम्ही करीत रहावी !कधी वळून पाहता आमची शुभेच्छा स्मरावी ! तुमच्या इच्छा आकांक्षांचा वेलू गगनाला भिडू दे ! तुमच्या जीवनात सर्वकाही मनासारखे घडू दे ! तुला दिर्घ आयुष्य लाभो ही इच्छा !🎂🎊",
  "वाढदिवस एका रॉयल मराठी ❤️ माणसाचा वाढदिवस दोस्तीच्या 🙌 दुनियेतील राजा माणसाचा वाढदिवस एका कट्टर मित्राचा वाढदिवस एका युवा शांत संयमी मित्राचा  वाढदिवस आपल्या माणसाचा 🎈 लाडक्या मित्राला वाढदिवसाच्या हार्दिक हार्दिक शुभेच्छा 🥳🍰",
  "आपणास शिवनेरीची श्रीमंती 🌄 रायगडाची भव्यता, पुरंदरची दिव्यता 🌟 सिहंगडाची शौर्यता आणि सह्याद्रीची उंची लाभो हीच शिवचरणी प्रार्थना 🙏🏻  आपणास वाढदिवसाच्या हार्दिक शुभेच्छा 🎂",
  "आज तुझा वाढदिवस वाढणार्‍या प्रत्येक दिवसागणिक तुझं यश, तुझं ज्ञान आणि तुझी कीर्ती वृद्धिंगत होत जावो आणि सुखसमृद्धीची बहार तुझ्या आयुष्यात नित्य येत राहो वाढदिवसाच्या हार्दिक शुभेच्छा 🎂",
];

function Home() {
  const [searchParams] = useSearchParams();
  const [to, setTo] = useState(searchParams.get("to"));
  const [from, setFrom] = useState(searchParams.get("from"));
  const [greetingNumber, setGreetingNumber] = useState(
    searchParams.get("s") >= GREETINGS.length ? 0 : searchParams.get("s") || 0
  );
  const [orange, setOrange] = useState(searchParams.get("o"));

  return (
    <>
      <div className="container mt-5" style={{ marginTop: "100px" }}>
        <div
          className={`card custom-card shadow w-md-25 d-block mx-auto ${
            orange === "orange"
                  ? "theme-orange"
                  : orange === "red"
                  ? "theme-red"
                  : orange === "green"
                  ? "theme-green"
                  : orange === "blue"
                  ? "theme-blue"
                  : orange === "purple"
                  ? "theme-purple"
                  : "theme-orange"
          }`}
          style={{ width: "" }}
        >
          <div className=" mt-5 position-relative ">
            <img
              src={Ballons}
              alt="diwali-lamp "
              className="position-absolute left-lamp" 
            />
<img
  src={mixs}
  alt="lamp"
  className="position-absolute center"
  style={{ width: '250px', height: '250px', right: '35%', opacity: 0.8 }}
/>            <img
              src={Ballons}
              alt="diwali-lamp"
              className="position-absolute right-lamp"
            />
          </div>
          <div className="card-body p-5 mb-5  position-relative" >
            <div className="to fs-6  fw-bold">
              <p className=""> 💐 Dear {to}❣️<br/></p>
            </div>

            <div className="mt-4 fs-5  text-center fw-normal">
              <p>{GREETINGS[greetingNumber]}</p>
            </div>

            <div className="from fs-6 ">
              <p className=" fw-bold ">🙏 शुभेच्छुक<br/> {from}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container text-center  fw-bold fs-4"
        style={{ marginTop: "15px" }}
      >
        <p className="generate-tagline " >
          Do You Want To Create Your Own Birthday Greeting ? Customize it here 👇🏻{" "}
        </p>
      </div>
      <div
        className="container w-75  shadow-lg rounded-2 pt-4 pb-2 text-center fw-bold fs-6   bg-light"
        style={{ border: "1px solid grey" }}
      >
        <p
          className="url"
          onClick={() => {
            const url = `${
              import.meta.env.VITE_BASE_URL
            }?to=${to}&from=${from}&s=${greetingNumber}&o=${orange}`;
            navigator.clipboard.writeText(url);
            alert(`url copied successfully ${url}`);
          }}
        >
          {import.meta.env.VITE_BASE_URL}?to={to}&from={from}&s={greetingNumber}
          &o={orange}
        </p>
      </div>
      <div className="container card card-body shadow w-75 mt-4 mb-5 mt-sm-4 mb-sm-4 mt-md-5 mb-md-5">
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 mb-sm-0">
            <input
              type="text"
              className="form-control"
              value={to}
              onChange={(e) => {
                setTo(e.target.value);
              }}
              placeholder="To"
            />
          </div>
          <div className="col-md-3 col-sm-6 mb-3 mb-sm-0">
            <input
              type="text"
              className="form-control"
              value={from}
              onChange={(e) => {
                setFrom(e.target.value);
              }}
              placeholder="From"
            />
          </div>
          <div className="col-md-3 col-sm-6 mb-3 mb-sm-0">
            <select
              className="form-select"
              aria-label="Default select example"
              value={greetingNumber}
              onChange={(e) => {
                setGreetingNumber(e.target.value);
              }}
            >
              <option value="0">Greeting One</option>
              <option value="1">Greeting Two</option>
              <option value="2">Greeting Three</option>
              <option value="3">Greeting Four</option>
              <option value="4">Greeting Five</option>
            </select>
          </div>
          <div className="col-md-3 col-sm-6 d-flex align-items-center justify-content-center  ">
            <div
              className={`orange-square  shadow-lg border-info-subtle  ${
                orange === "orange"
                  ? "theme-orange"
                  : orange === "red"
                  ? "theme-red"
                  : orange === "green"
                  ? "theme-green"
                  : orange === "blue"
                  ? "theme-blue"
                  : orange === "purple"
                  ? "theme-purple"
                  : "theme-orange"
              }`}
              onClick={() => {
                setOrange((prevColor) => {
                  switch (prevColor) {
                    case "orange":
                      return "red";
                    case "red":
                      return "green";
                    case "green":
                      return "blue";
                    case "blue":
                      return "purple";
                    case "purple":
                      return "orange";
                    default:
                      return "orange";
                  }
                });
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
