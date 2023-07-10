import {create} from 'zustand'
import {immer} from 'zustand/middleware/immer'

type State = {
    questions: IQuestion[]
}

type Actions = {
    push: (q: IQuestion) => void
    remove: (id: string) => void
    swap: (id1: string, id2: string) => void
    move: (id: string, delta: number) => void
}

export const useQuestions = create(immer<State & Actions>(set => ({
    questions: [],
    push: (q: IQuestion) => set(state => {
        state.questions.push(q)
    }),
    remove: (id: string) => set(state => {
        const idx = state.questions.findIndex(value => value.id === id)
        if (idx === -1) return
        state.questions.splice(idx, 1)
    }),
    swap: (id1: string, id2: string) => set(state => {
        const idx1 = state.questions.findIndex(value => value.id === id1)
        const idx2 = state.questions.findIndex(value => value.id === id2)
        if(idx1 === -1 || idx2 === -1) return
        swap(state.questions, idx1, idx2)
    }),
    move: (id: string, delta: number) => set(state => {
        const idx = state.questions.findIndex(value => value.id === id)
        if(idx < 0 || idx >= state.questions.length) return
        if(idx + delta < 0 || idx + delta >= state.questions.length) return
        swap(state.questions, idx, idx + delta)
    })
})))


function swap<T>(list: T[], idx1: number, idx2: number) {
    const tmp = list[idx1]
    list[idx1] = list[idx2]
    list[idx2] = tmp
}