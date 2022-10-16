import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Box, Typography, } from '@mui/material';


function PullAShot({inputsArray, setInputsArray}) {
  /*     const initialInputs = localStorage.getItem("inputs") || null; */
  
  const [inputs, setInputs] = useState({});
  const [selectOption] = useState("Pick Extraction level")
  const BackToDashboard = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setInputsArray([...inputsArray, inputs]);
    localStorage.setItem("inputs", JSON.stringify(inputs));
    localStorage.setItem("inputsArray", JSON.stringify(inputsArray));

    BackToDashboard("/Dashboard");
    /* postForm(); */
  };

  /* async function postForm() {
        try {
            const post = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                body: JSON.stringify({
                    inputs
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
            });
            if (!post.ok)
            throw new Error (post.status)
            const returnedPost = await post.json();
            alert(`Your shot has been saved`)
        } catch (e) {
            console.log(e.message);
        }
    } */

  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <Typography variant ="h5" gutterBottom >Pull A Shot</Typography>

      <form onSubmit={handleSubmit}>
        <section>
          <h3>Equipment</h3>
          <label>
            Machine
            <input
              onChange={handleChange}
              className="equipmentInput"
              type="text"
              name="machine"
            />
          </label>
          <label>
            Grinder
            <input
              onChange={handleChange}
              className="equipmentInput"
              type="text"
              name="grinder"
            />
          </label>
          <label>
            Coffee
            <input
              onChange={handleChange}
              className="equipmentInput"
              type="text"
              name="coffee"
            />
          </label>
        </section>
        <section className="shotSection">
          <h3 className="shotHeader">Shot</h3>
          <label className="coffeeIn">
            {" "}
            Coffee in (grams)
            <input
              onChange={handleChange}
              className="shotInput"
              type="number"
              name="coffeeIn"
            />
          </label>
          <label className="grindSize">
            {" "}
            Grind Size (dial 0-100)
            <input
              onChange={handleChange}
              className="shotInput"
              type="number"
              name="grindSetting"
            />
          </label>
          <label className="brewTime">
            {" "}
            Brew Time (seconds)
            <input
              onChange={handleChange}
              className="shotInput"
              type="number"
              name="brewTime"
            />
          </label>
          <label className="coffeeOut">
            {" "}
            Coffee out (grams)
            <input
              onChange={handleChange}
              className="shotInput"
              type="number"
              name="coffeeOut"
            />
          </label>
        </section>
        <section className="results">
          <h3>Result</h3>
          <label className="extraction">
            {" "}
            Extraction (taste)
            <select onChange={handleChange} name="extraction" >
              <option value="under extracted">under extracted</option>
              <option value="balanced">balanced</option>
              <option value="over extracted">over extracted</option>
            </select>
          </label>
          <label>
            {" "}
            Taste Profile
            <input
              onChange={handleChange}
              className="detailsInput"
              type="text"
              name="detailsInput"
              placeholder="  nutty, fruity, bitter, sour ..."
            />
          </label>
        </section>
        <input className="submitButton" type="submit" value="Save Shot" />
      </form>
    </Box>
  );
}

export default PullAShot;
