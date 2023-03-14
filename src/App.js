import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LearnMore from "./components/LearnMore";
import Login from "./components/Login";
import ReportForm from "./components/ReportForm";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/reportForm" element={<ReportForm />}/>
        <Route path="/learnMore" element={<LearnMore />}/>
        <Route path="/admin" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}