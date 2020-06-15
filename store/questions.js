import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'

const db = firebase.firestore()
const QuestionsRef = db.collection('questions')

export const state = () => ({
    questions: []
})

export const actions = {
    init: firestoreAction(({ bindFirestoreRef }) => {
        bindFirestoreRef('questions', QuestionsRef)
    })
}

export const getters = {
    getQuestionByNumber: (state) => (number) => {
        return state.questions.find(question => question.number === number)
    }
}