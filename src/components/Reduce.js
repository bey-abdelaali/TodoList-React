import { useState, useReducer } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Paper,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { ResultReduce } from "../reducers/ResultReduce";

export default function ReduceCapacity() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [language, setLanguage] = useState("ar"); // "en" or "ar"
  const [result2, dispatch] = useReducer(ResultReduce, null);
  const translations = {
    ar: {
      title: "آلة العمليات الحسابية",
      firstNumber: "العدد الأول",
      secondNumber: "العدد الثاني",
      sum: "جمع",
      sub: "طرح",
      mul: "ضرب",
      div: "قسمة",
      result: "النتيجة",
      error: "لا يمكن القسمة على صفر",
      lang: "اللغة",
    },
    en: {
      title: "Calculator",
      firstNumber: "First Number",
      secondNumber: "Second Number",
      sum: "Add",
      sub: "Subtract",
      mul: "Multiply",
      div: "Divide",
      result: "Result",
      error: "Cannot divide by zero",
      lang: "Language",
    },
  };

  const t = translations[language];

  const handleLangChange = (e, newLang) => {
    if (newLang !== null) {
      setLanguage(newLang);
    }
  };

  function handleClickSum() {
    dispatch({ type: "Sum", payload: { number1, number2, language } });
  }

  function handleClickSub() {
    dispatch({ type: "Sub", payload: { number1, number2, language } });
  }

  function handleClickMul() {
    dispatch({ type: "Mul", payload: { number1, number2, language } });
  }

  function handleClickDiv() {
    dispatch({
      type: "Div",
      payload: { number1, number2, errorMsg: translations[language].error },
    });
  }

  return (
    <Container
      maxWidth="sm"
      style={{
        marginTop: "50px",
        direction: language === "ar" ? "rtl" : "ltr",
      }}
    >
      <Paper elevation={4} style={{ padding: "30px" }}>
        <Grid container spacing={2}>
          <Grid size={12} style={{ textAlign: "center" }}>
            <Typography variant="h4">{t.title}</Typography>
            <ToggleButtonGroup
              value={language}
              exclusive
              onChange={handleLangChange}
              size="small"
              style={{ marginTop: 10 }}
            >
              <ToggleButton value="ar">عربي</ToggleButton>
              <ToggleButton value="en">EN</ToggleButton>
            </ToggleButtonGroup>
          </Grid>

          <Grid size={12}>
            <TextField
              fullWidth
              label={t.firstNumber}
              variant="outlined"
              type="number"
              value={number1}
              onChange={(e) => setNumber1(e.target.value)}
            />
          </Grid>

          <Grid size={12}>
            <TextField
              fullWidth
              label={t.secondNumber}
              variant="outlined"
              type="number"
              value={number2}
              onChange={(e) => setNumber2(e.target.value)}
            />
          </Grid>

          <Grid size={3}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleClickSum}
            >
              {t.sum}
            </Button>
          </Grid>
          <Grid size={3}>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              onClick={handleClickSub}
            >
              {t.sub}
            </Button>
          </Grid>
          <Grid size={3}>
            <Button
              fullWidth
              variant="contained"
              color="success"
              onClick={handleClickMul}
            >
              {t.mul}
            </Button>
          </Grid>
          <Grid size={3}>
            <Button
              fullWidth
              variant="contained"
              color="error"
              onClick={handleClickDiv}
            >
              {t.div}
            </Button>
          </Grid>
          <Grid size={12}>
            <Typography
              variant="h6"
              align="center"
              style={{ marginTop: "20px", color: "darkred" }}
            >
              {result2 !== null && `${t.result}: ${result2}`}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
