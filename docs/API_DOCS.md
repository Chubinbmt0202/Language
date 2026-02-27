openapi: 3.0.0
info:
  title: Polyglot Hub Language API
  description: API definitions for the Language Backend services supplying AI-generated quiz and vocabulary data.
  version: 1.0.0
servers:
  - url: https://language-backend-onoo.onrender.com/api
    description: Production Backend
  - url: http://localhost:9999/api
    description: Local Dev Server

paths:
  /generate-quiz-fill:
    post:
      summary: Generates a fill-in-the-blank quiz (Japanese).
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                type:
                  type: string
                  description: "The script type requested, e.g., hiragana-text or romaji-text."
      responses:
        '200':
          description: Returns generated questions.
          content:
            application/json:
              schema:
                type: object
                properties:
                  questions:
                    type: array
                    items:
                      type: object

  /generate-quiz-vocab:
    post:
      summary: Retrieves generated vocabulary flashcards.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                category:
                  type: string
                  description: "Vocabulary subset (e.g. N5, Daily life)"
      responses:
        '200':
          description: Vocab payload successful.

  /generate-quiz-wordForm:
    post:
      summary: Generates English Word Form questions.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                numQuestions:
                  type: integer
                  default: 10
      responses:
        '200':
          description: Word form payload successful.
