export type PersonalInfo = {
    name: string;
    email: string;
    phone: string;
}

export type SingleQuestionType = {
    answer: string;
}


export type FormData = PersonalInfo | SingleQuestionType;