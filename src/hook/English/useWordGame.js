import React from "react";

export const useWordGame = () => {
  const [gameState, setGameState] = React.useState({
    isLoading: false,
    isStarted: false,
    isCompleted: false,
    questionData: null,
    userAnswer: "",
  });   
    const updateState = (updates) =>
    setGameState((prev) => ({ ...prev, ...updates }));

  const startExercise = async () => {
    updateState({
        isLoading: true,
        isCompleted: false,
        questionData: null,
        userAnswer: "",
        isStarted: false,
        }); 
    };
    const handleAnswerChange = (value) => {

    updateState({ userAnswer: value });
    };
    return {
    gameState,
    handleAnswerChange,
    acction: { 
        startExercise
    }
    };
};

