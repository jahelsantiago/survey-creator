export type PersonalInfo = {
    name: string;
    email: string;
    phone: string;
}

export type SingleQuestionType = {
    answer: string;
}

export type SingleQuestionProps = {
    title: string;
    questionNumber: number;
    updateAnswer: (answer: FormData) => void;
    nextPage: () => void;
}

export type FormData = PersonalInfo | SingleQuestionType;

export type answer = {
    answer: string;
    question: string;
}