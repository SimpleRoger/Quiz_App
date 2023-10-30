import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ConnectApi from "../api/ConnectApi";
import Header from "./framework/Header";
import Footer from "./framework/Footer";
// MaterialUI
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import RadioGroup from "@material-ui/core/RadioGroup";
import { Alert, AlertTitle } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  correct: {
    color: "blue",
  },
}));

export default function RandomQuiz() {
  const classes = useStyles();

  const { topic } = useParams();
  console.log(topic);
  const [singularChoice, setSingularChoice] = useState(false);

  const API_URL = "http://127.0.0.1:8000/quiz/r/" + topic;

  console.log(API_URL);
  console.log(ConnectApi(API_URL));
  const { data } = ConnectApi(API_URL);
  const [selectedValue, setSelectedValue] = useState("");

  console.log(data);
  const a = data.flatMap((q) => q.answer);
  console.log("A", a);
  const ac = a.length;
  console.log("AC", ac);
  const [answerCheck, setAnswerCheck] = useState({});
  const [answer, setAnswer] = useState({});

  // useEffect(() => {
  //   if (topic == "maths") {
  //     setSingularChoice(true);
  //   }
  //   console.log("SINGULAR CHOICE", singularChoice);
  // }, []);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  // const [selectedValue, setSelectedValue] = useState(null);

  const handleCheckboxSelection = (e) => {
    setAnswer({ ...answer, [e.target.value]: e.target.checked });
  };

  const handleRadioSelection = (e) => {
    console.log("HI");
    console.log("HI");
    setSelectedValue(e.target.value);
  };
  // const handleSelection = (e) => {
  //   setAnswer({ ...answer, [e.target.value]: e.target.checked });
  // };

  //function to set everything to false intially
  const createInitialAnswers = () => {
    let z = a.flatMap((obj) => obj.id);
    //check whether true or false
    var object = {};
    console.log("ac", ac);
    if (ac != 0) {
      for (var x = 0; x < 3; x++) {
        console.log("object", object);
        object[z[x]] = false;
      }
    }
    return object;
  };

  const checkAnswer = (e) => {
    e.preventDefault();
    let n = a.map((obj) => obj.is_right);
    let y = { ...n };
    console.log("ANSWER LEGIT", y);
    //now we have to match the values
    function arrayEquals(o, p) {
      return (
        Array.isArray(o) &&
        Array.isArray(p) &&
        o.length == p.length &&
        o.every((val, index) => val === p[index])
      );
    }
    //actual answers
    let o = Object.values(y);
    //user answers
    let p = Object.values(answer);
    if (arrayEquals(o, p)) {
      setAnswerCheck(true);
      console.log("correct");
    } else {
      setAnswerCheck(false);
      console.log("incorrect");
    }
  };

  useEffect(() => {
    // console.log("ANSWER", answer);
    if (answer && Object.keys(answer).length === 0) {
      setAnswer(createInitialAnswers());
    }
    console.log("ANSWER", answer);
  }, [answer]);

  function refreshPage() {
    window.location.reload(false);
  }

  function Result() {
    if (answerCheck === true) {
      return (
        <Alert severity="success">
          <AlertTitle>Corrent Answer</AlertTitle>
          Well done you got it right —{" "}
          <Link href="#" variant="body2" onClick={refreshPage}>
            {"Next Question"}
          </Link>
        </Alert>
      );
    } else if (answerCheck === false) {
      return (
        <Alert severity="error">
          <AlertTitle>Wrong Answer</AlertTitle>
          Please try again!
        </Alert>
      );
    } else {
      return <React.Fragment></React.Fragment>;
    }
  }
  return (
    <div>
      <Header />
      <Container component="main" maxWidth="xs">
        {data.map(({ title, answer }, i) => (
          <div key={i}>
            <Typography component="h1" varient="h5">
              {title}
            </Typography>
            <RadioGroup value={selectedValue} onChange={handleRadioSelection}>
              {answer.map(({ answer_text, id }) => (
                <FormControlLabel
                  key={id}
                  value={id}
                  control={<Radio color="primary" />}
                  label={answer_text}
                />
              ))}
            </RadioGroup>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={checkAnswer}
            >
              Submit Answer
            </Button>
            <Result />
          </div>
        ))}
      </Container>
      <Footer />
    </div>
  );
}
