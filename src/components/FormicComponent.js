import React from "react";
import { useState, useEffect } from "react";
import RoundSkill from "./RoundSkill";
import "./Skills.css";
const FormicComponent = () => {
  const [Head, setHead] = useState("hi this is head");
  const [Formdata, setFormData] = useState({
    name: "",
    mail: "",
    pass: "",
  });
  const sita = ["html", "css", "js", "node", "react"];

  const handleChange = (e) => {
    setFormData({ ...Formdata, [e.target.name]: e.target.value });
  };

  const [Skillset, setSkillset] = useState([]);
  const handleSkill = (e) => {
    console.log(e.target.value);
    let n = e.target.value;
    let varb = Skillset.filter((x) => x == n);

    if (varb.length == 0) {
      setSkillset([...Skillset, n]);
    }

    // setSkillset([...Skillset, n])

    console.log("skill set : ", Skillset);
  };
  const [active, setActive] = useState(false);

  const isFormSubmit = () => {
    if (
      Formdata.name != "" &&
      Formdata.mail != "" &&
      Formdata.pass != "" &&
      Skillset.length > 0
    ) {
      // setActive(active = true)
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    console.log("use state");
    console.log(isFormSubmit());
    if (Skillset.length > 0 && isFormSubmit()) {
      setHead("now you are gonna be fine dear");
      console.log(Head);
      setActive(true);
    }
    else{
        setActive(false)
        setHead('hi i am head')
    }
  }, [Skillset, FormData]);

  return (
    <div>
      <form className="formic">
        <div className="head"> {Head} </div>
        <div className="form" >

        
        <input
          type="text"
          name="name"
          placeholder="enter your name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="mail"
          placeholder="enter your email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="pass"
          placeholder="enter your password"
          onChange={handleChange}
        />
        <select onChange={handleSkill}>
         
          <option value="html"> html </option>
          <option value="css"> css </option>
          <option value="js"> js </option>
          <option value="react"> react </option>
          <option value="node"> node </option>
        </select>
        <div className="skills">
          {" "}
          {Skillset.map((e) => {
            return (
              <div className="skill-btn">
                {" "}
                {e}{" "}
                <span
                  onClick={() => {
                    setSkillset((prevSkills) =>
                      prevSkills.filter((skill) => skill !== e)
                    );
                  }}
                >
                  {" "}
                  X{" "}
                </span>{" "}
              </div>
            );
          })}
        </div>

        {active ? (
          <button className="form-button-active" id="btn" >CLAIM YOUR FREE TRAIL</button>
        ) : (
          <button className="form-button" id="btn">
            {" "}
            Don' t CLAIM YOUR FREE TRAIL{" "}
          </button>
        )}

</div>
      </form>
    </div>
  );
  console.log("Form data :", Formdata);
};

export default FormicComponent;
