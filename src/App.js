import "./App.css";
import TodoList from "./components/TodoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TodosContext } from "./contexts/TodosContext";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastProvider } from "./contexts/ToastContext";

const theme = createTheme({
  typography: {
    fontFamily: ["Alexandria"],
  },

  palette: {
    primary: {
      main: "#dd2c00",
    },
  },
});

const initialTodos = [
  {
    id: uuidv4(),
    title: "المهمة الأولى",
    body: "التفاصيل الخاصة بالمهمة الأولى",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "المهمة الثانية",
    body: "التفاصيل الخاصة بالمهمة الثانية",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "المهمة الثالثة",
    body: "التفاصيل الخاصة بالمهمة الثالثة",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "المهمة الرابعة",
    body: "التفاصيل الخاصة بالمهمة الرابعة",
    isCompleted: false,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <div
          className="App"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#191b1f",
            height: "100vh",
            direction: "rtl",
          }}
        >
          <TodosContext.Provider value={{ todos, setTodos }}>
            <TodoList />
          </TodosContext.Provider>
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
