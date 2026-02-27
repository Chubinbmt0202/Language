import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomeLayout from "../pages/Layout/index.jsx";
import Grammar from "../pages/English/Grammar/index.jsx";
import JapaneseQuiz from "../pages/Japanese/MultipleChoice/index.jsx";
import VocabularyJapan from "../pages/Japanese/Vocabulary/VocabularyApp.jsx";
import HiraganaPractice from "../pages/Japanese/FillInBlank/index.jsx";
import ListenAndFillJapanese from "../pages/Japanese/ListenAndFill/index.jsx";
import WordForm from "../pages/English/Grammar/WordForm/index.jsx";
import { GrammarMenu } from "../pages/English/Grammar/index.jsx";
import { WordFormMenu } from "../pages/English/Grammar/WordForm/index.jsx";
import FillInBlank from "../pages/English/Grammar/WordForm/FillInBlank/index.jsx";
import SuffixExercise from "../pages/English/Grammar/WordForm/Suffixes/index.jsx";
import ErrorCorrectionQuiz from "../pages/English/Grammar/WordForm/FindError";
import Dashboard from "../pages/Dashboard/index.jsx";
import Vocabulary from "../pages/Vocabulary/index.jsx";
import PracticeTranslate from "../pages/English/PracticeTranslate/index.jsx";
import Tense from "../pages/English/Grammar/Tense/index.jsx";
import { TenseMenu } from "../pages/English/Grammar/Tense/index.jsx";
import VerbConjugation from "../pages/English/Grammar/Tense/VerbConjugation/index.jsx";
import MultipleChoice from "../pages/English/Grammar/Tense/MultipleChoice/index.jsx";
import ErrorTense from "../pages/English/Grammar/Tense/Error/index.jsx";
import Pronouns from "../pages/English/Grammar/Pronouns/index.jsx";
import { PronounsMenu } from "../pages/English/Grammar/Pronouns/index.jsx";
import ChooseCorrectPronouns from "../pages/English/Grammar/Pronouns/ChooseCorrect/index.jsx";
import PronounsMultipleChoice from "../pages/English/Grammar/Pronouns/MultipleChoice/index.jsx";
import FindErrorPronouns from "../pages/English/Grammar/Pronouns/FindError/index.jsx";
import Prepositions from "../pages/English/Grammar/Prepositions/index.jsx";
import { PrepositionsMenu } from "../pages/English/Grammar/Prepositions/index.jsx";
import MatchingPrepositions from "../pages/English/Grammar/Prepositions/Matching/index.jsx";
import Conditionals from "../pages/English/Grammar/Conditionals/index.jsx";
import { ConditionalsMenu } from "../pages/English/Grammar/Conditionals/index.jsx";
import PassiveVoice, {
  PassiveVoiceMenu,
} from "../pages/English/Grammar/PassiveVoice/index.jsx";
import { LanguageProvider } from "./providers/LanguageContext.jsx";
import Exercise from "../pages/Exercises/ExercisePage.jsx";
import VocabTaskPage from "../pages/Exercises/VocabTaskPage.jsx";
// import Theory from "../pages/English/Theory/Theory.jsx"; // Removed old Theory component
import Home from "../pages/Home/Home.jsx";
import ExercisesLibrary from "../pages/Exercises/Library/index.jsx";
import Upcoming from "../pages/Result/Upcoming.jsx";
import Login from "../pages/Login.jsx";
import { AuthProvider } from "./providers/AuthContext.jsx";
import TimeTracker from "../components/TimeTracker.jsx";
import Settings from "../pages/Settings/index.jsx";
import TheoryLesson from "../pages/TheoryLesson/index.jsx";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <LanguageProvider>
          <TimeTracker />
          <Routes>
            {/* Route cha là Home - chứa Sidebar và Breadcrumb */}
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<HomeLayout />}>
              {/* Các Route con sẽ được render tại vị trí <Outlet /> trong Home */}
              <Route index element={<Navigate to="/Home" replace />} />
              <Route path="Home" element={<Home />} />
              <Route path="Distance" element={<Dashboard />} />
              <Route path="ExercisesLibrary" element={<ExercisesLibrary />} />
              <Route path="exercise/:taskId" element={<Exercise />} />
              <Route path="vocab/:taskId" element={<VocabTaskPage />} />
              <Route path="theory/:taskId" element={<TheoryLesson />} />
              <Route path="vocabulary" element={<Vocabulary />} />
              <Route path="english/grammar" element={<Grammar />}>
                <Route index element={<GrammarMenu />} />
                <Route path="word-form" element={<WordForm />}>
                  <Route index element={<WordFormMenu />} />{" "}
                  <Route path="fill-in-the-blank" element={<FillInBlank />} />
                  <Route path="suffix-exercise" element={<SuffixExercise />} />
                  <Route path="find-errors" element={<ErrorCorrectionQuiz />} />
                </Route>
                <Route path="tense" element={<Tense />}>
                  <Route index element={<TenseMenu />} />
                  <Route path="verb-conjugation" element={<VerbConjugation />} />
                  <Route path="multiple-choice" element={<MultipleChoice />} />
                  <Route path="find-errors" element={<ErrorTense />} />
                </Route>
                <Route path="pronouns" element={<Pronouns />}>
                  <Route index element={<PronounsMenu />} />
                  <Route path="choose-pronouns" element={<ChooseCorrectPronouns />} />
                  <Route path="multiple-choice" element={<PronounsMultipleChoice />} />
                  <Route path="find-errors" element={<FindErrorPronouns />} />
                </Route>
                <Route path="prepositions" element={<Prepositions />}>
                  <Route index element={<PrepositionsMenu />} />
                  <Route path="matching" element={<MatchingPrepositions />} />
                </Route>
                <Route path="conditionals" element={<Conditionals />}>
                  <Route index element={<ConditionalsMenu />} />
                </Route>
                <Route path="passive-voice" element={<PassiveVoice />}>
                  <Route index element={<PassiveVoiceMenu />} />
                </Route>
              </Route>
              <Route
                path="english/translation-practice"
                element={<PracticeTranslate />}
              />
              <Route path="japanese/multiple-choice" element={<JapaneseQuiz />} />
              <Route path="japanese/vocabulary" element={<VocabularyJapan />} />
              <Route
                path="japanese/fill-passage"
                element={<HiraganaPractice />}
              />
              <Route
                path="japanese/listen-and-fill"
                element={<ListenAndFillJapanese />}
              />
              <Route path="Setting" element={<Settings />} />
              {/* <Route path="theory-lesson" element={<TheoryLesson />} /> - Removed temporary route */}
              <Route
                path="*"
                element={<Upcoming />}
              />
            </Route>
          </Routes>
        </LanguageProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
