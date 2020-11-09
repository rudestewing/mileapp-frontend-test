import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        questions: [
            {
                id: 1,
                q: 'Do you prefer vuejs or reactjs? Why ?',
                type: 'text',
                answer: 
                ` VueJS
                
                `
            },
            {
                id: 2,
                q: 'What complex things have you done in frontend development ?',
                answer: [
                    // 'Nested Form Array for Registration Ticket in Event Registration Portal Website',
                    'Upload Button with previews',
                    'Animation',
                ]
            },
            {
                id: 3,
                q: 'why does a UI Developer need to know and understand UX? how far do you understand it?',
                answer: 
                ` 
                ...
                `
            },
            {
                id: 4,
                q: 'Give your analysis results regarding https://taskdev.mile.app/login from the UI / UX side!',
                answer: ``
            },
            {
                id: 5,
                q: 'Create a better login page based on https://taskdev.mile.app/login and deploy on https://www.netlify.com (https://www.netlify.com/)!',
                type: 'link',
                answer: `/auth/login`
            },
            {
                id: 6,
                q: 'Solve the logic problems below !',
                childs: [
                    {
                        id: 'a',
                        q: 'Swap the values of variables A and B',
                        type: 'link',
                        answer: '/answer6a',
                    },
                    {
                        id: 'b',
                        q: 'Find the missing numbers from 1 to 100',
                        type: 'link',
                        answer: '/answer6b'
                    },
                    {
                        id: 'c',
                        q: 'Return the number which is called more than 1',
                        type: 'link',
                        answer: '/answer6c'
                    },
                    {
                        id: 'd',
                        q: 'Return Object from array given',
                        type: 'link',
                        answer: '/answer6d'
                    },
                ]
            }
        ]
    },
    mutations: {},
    actions: {},
    modules: {}
})