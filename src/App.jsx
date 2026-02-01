import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./page/home.jsx";
import Grammar from "./components/english/Grammar/index.jsx";
import JapaneseQuiz from "./components/japan/Multichoice/index.jsx";
import VocabularyJapan from "./components/japan/Vocabulary/VocabularyApp.jsx";
import HiraganaPractice from "./components/japan/FillInBlank/index.jsx";
import ListenAndFillJapanese from "./components/japan/ListenAndFill/index.jsx";
import WordForm from "./components/english/Grammar/WordForm/index.jsx";
import { GrammarMenu } from "./components/english/Grammar/index.jsx";
import { WordFormMenu } from "./components/english/Grammar/WordForm/index.jsx";
import FillInBlank from "./components/english/Grammar/WordForm/FillInBlank/index.jsx";
import SuffixExercise from "./components/english/Grammar/WordForm/Suffixes/index.jsx";
import ErrorCorrectionQuiz from "./components/english/Grammar/WordForm/FindError";
import Dashboard from "./page/Dashboard.jsx";
import AddVocabulary from "./components/japan/VocabSave/index.jsx";
import PracticeTranslate from "./page/English/PracticeTranslate/index.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route cha là Home - chứa Sidebar và Breadcrumb */}
        <Route path="/" element={<Home />}>
          {/* Các Route con sẽ được render tại vị trí <Outlet /> trong Home */}
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="english/grammar" element={<Grammar />}>
            <Route index element={<GrammarMenu />} />
            <Route path="word-form" element={<WordForm />}>
              <Route index element={<WordFormMenu />} />{" "}
              <Route path="fill-in-the-blank" element={<FillInBlank />} />
              <Route path="suffix-exercise" element={<SuffixExercise />} />
              <Route path="find-errors" element={<ErrorCorrectionQuiz />} />
            </Route>
          </Route>
          <Route
            path="english/translation-practice"
            element={<PracticeTranslate />}
          />
          <Route path="japanese/multiple-choice" element={<JapaneseQuiz />} />
          <Route path="japanese/vocabulary" element={<VocabularyJapan />} />
          <Route path="japanese/fill-passage" element={<HiraganaPractice />} />
          <Route path="japanese/vocab" element={<AddVocabulary />} />
          <Route
            path="japanese/listen-and-fill"
            element={<ListenAndFillJapanese />}
          />
          <Route path="*" element={<div>Nội dung đang được cập nhật...</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
