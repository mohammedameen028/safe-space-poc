import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LearnMore from "./components/LearnMore";
import ReportForm from "./components/ReportForm";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/reportForm" element={<ReportForm />}/>
        <Route path="/learnMore" element={<LearnMore />}/>
      </Routes>
    </BrowserRouter>
  );
}