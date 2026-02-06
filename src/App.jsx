import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomeLayout from "./page/index.jsx";
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
import Vocabulary from "./page/Vocabulary.jsx";
import PracticeTranslate from "./page/English/PracticeTranslate/index.jsx";
import Tense from "./components/english/Grammar/Tense/index.jsx";
import { TenseMenu } from "./components/english/Grammar/Tense/index.jsx";
import VerbConjugation from "./components/english/Grammar/Tense/VerbConjugation/index.jsx";
import MultipleChoice from "./components/english/Grammar/Tense/MultipleChoice/index.jsx";
import ErrorTense from "./components/english/Grammar/Tense/Error/index.jsx";
import Pronouns from "./components/english/Grammar/Pronouns/index.jsx";
import { PronounsMenu } from "./components/english/Grammar/Pronouns/index.jsx";
import ChooseCorrectPronouns from "./components/english/Grammar/Pronouns/ChooseCorrect/index.jsx";
import PronounsMutil from "./components/english/Grammar/Pronouns/Mutil/index.jsx";
import FindErrorPronouns from "./components/english/Grammar/Pronouns/FindError/index.jsx";
import Prepositions from "./components/english/Grammar/Prepositions/index.jsx";
import { PrepositionsMenu } from "./components/english/Grammar/Prepositions/index.jsx";
import MatchingPrepositions from "./components/english/Grammar/Prepositions/Matching/index.jsx";
import Conditionals from "./components/english/Grammar/Conditionals/index.jsx";
import { ConditionalsMenu } from "./components/english/Grammar/Conditionals/index.jsx";
import PassiveVoice, {
  PassiveVoiceMenu,
} from "./components/english/Grammar/PassiveVoice/index.jsx";
import { LanguageProvider } from "./util/LanguageContext.jsx";
import Exercise from "./page/ExercisePage.jsx";
import VocabTaskPage from "./page/VocabTaskPage.jsx";
import Theory from "./page/English/Theory/Theory.jsx";
import Home from "./page/Home/Home.jsx";
import Excercises from "./page/Excercises/index.jsx";
import Upcoming from "./page/Result/Upcomming.jsx";
import Login from "./page/Login.jsx";
import { AuthProvider } from "./util/AuthContext.jsx";
import TimeTracker from "./components/TimeTracker.jsx";
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
            <Route path="ExercisesLibrary" element={<Excercises />} />
            <Route path="exercise/:taskId" element={<Exercise />} />
            <Route path="vocab/:taskId" element={<VocabTaskPage />} />
            <Route path="theory/:taskId" element={<Theory />} />
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
                <Route path="multiple-choice" element={<PronounsMutil />} />
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
