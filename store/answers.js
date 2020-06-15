import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'

const db = firebase.firestore()
const AnswersRef = db.collection('answers')

export const state = () => ({
    answers: []
})

export const actions = {
    init: firestoreAction(({ bindFirestoreRef }) => {
        bindFirestoreRef('answers', AnswersRef)
    })
}

export const getters = {
    getAnswerByName: (state) => (name) => {
        return state.answers.find(answer => answer.name === name)
    }
}