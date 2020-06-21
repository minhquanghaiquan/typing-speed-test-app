import React, { useState } from "react";
import "./styles.css";
import Preview from "./Preview";
import Speed from "./Speed";
import getText from "./getText";
import {
  Alert,
  Button,
  Jumbotron,
  Navbar,
  NavbarBrand,
  NavItem,
  NavbarText,
  NavLink
} from "reactstrap";
// import axios from 'axios'

export default function App() {
  const [text, setText] = useState(getText());
  const [userInput, setUserInput] = useState("");
  const [symbols, setSymbols] = useState(0);
  const [sec, setSec] = useState(0);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  //text lấy từ API dài quá, nên em lấy text nhập sẵn. Code bên dưới hoạt động bình thường
  // useEffect(()=> {
  //   const getdata = async function() {
  //     const texts = (await axios.get('https://baconipsum.com/api/?type=meat-and-filler')).data;
  //     const gettext = texts[Math.floor(Math.random()*texts.length)];
  //     setText(gettext);
  //   }
  //   getdata();
  // },[])

  const onRestart = () => {
    setText(getText());
    setUserInput("");
    setSymbols(0);
    setSec(0);
    setStarted(false);
    setFinished(false);
  };

  const onUserInputChange = e => {
    const v = e.target.value;
    setTimer(v);
    onFinish(v);
    setUserInput(v);
    setSymbols(countCorrectSymbols(v));
  };

  const countCorrectSymbols = value => {
    const thistext = text.replace(" ", "");
    return userInput
      .replace(" ", "")
      .split("")
      .filter((s, i) => s === thistext[i]).length;
  };

  const setTimer = value => {
    if (!started) {
      setStarted(true);
      setIntervalId(
        setInterval(() => {
          setSec(pre => {
            return pre + 1;
          });
          console.log(intervalId);
        }, 1000)
      );
    }
  };

  const onFinish = value => {
    console.log("finished");
    console.log(value);
    if (value === text) {
      clearInterval(intervalId);
      setFinished(true);
      console.log(intervalId);
    }
  };
  const wpm = Math.round(symbols / 5 / (sec / 60));
  return (
    <div className="container">
      <Navbar color="light" light expand="md" className="navbar">
        <NavbarBrand href="/">
          <img
            src="https://lh3.googleusercontent.com/proxy/XRjXmUzrZz8_lqk-zMdorWuVtIENo-o0-f_-FpsJ3bJOeDVqH3y7L_Wi2Qmq22c7n9aIzdeznN3wF6rASxhjEhe7FUWCapfLCDSqLwalTf8W8Nlp09-Qc-volxXvReLeYNucf4jd_Re_HETE6NamKQ"
            className="img"
            alt="noimg"
          />
        </NavbarBrand>

        <NavLink href="/components/">
          <h2 className="title">TEST APP</h2>
        </NavLink>
      </Navbar>
      <div className="row">
        <div className="col">
          <Jumbotron>
            <h3>
              <i>Typing speed test</i>
            </h3>
            <Preview text={text} userInput={userInput} />
          </Jumbotron>
          <textarea
            value={userInput}
            onChange={onUserInputChange}
            className="form-control mb-3"
            placeholder="Start typing..."
            readOnly={finished}
          />
          <Speed symbols={symbols} sec={sec} />
          <div className="text-right">
            <Button color="success" onClick={onRestart}>
              Restart
            </Button>
          </div>
          {finished && (
            <Alert color="success">Done! - Your result is {wpm} wpm </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
