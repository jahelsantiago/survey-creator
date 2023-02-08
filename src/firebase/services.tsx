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
    //delete undefined values
    answers = answers.filter((answer) => answer !== undefined);
    //if the value is an array, spread it
    const new_ansers: answer[] = [];
    answers.forEach((elem) => {
        if (Array.isArray(elem)){
            elem.forEach((ans : answer) => {
                new_ansers.push({...ans})
            })
        } else {
            new_ansers.push(elem)
        }
    })
    console.log(new_ansers);

    let obj = new Map();
    new_ansers.forEach((elem) => {
        obj.set(elem.question, elem.answer)
    });
    return obj;
}

