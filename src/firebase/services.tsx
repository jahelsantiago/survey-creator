//create a function to upload the answer to the database to the collection "answers"
import {db} from './firebaseConfig';
import { collection, addDoc } from "firebase/firestore"; 

import { answer } from '../types';

export async function uploadAnswer(answers: answer[]) {
    let answersMap = castAnswersArrayObj(answers);
    await addDoc(collection(db, "Answers"), Object.fromEntries(answersMap));
}

// iterate trought an array of answer types and return an object 
function castAnswersArrayObj(answers: answer[]) {
    let obj = new Map();
    answers.forEach((answer) => {
        if (answer){
            obj.set(answer.question, answer.answer)
        }
    });
    return obj;
}

