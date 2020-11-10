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
                ` VueJS, is easy to learn and understandable, learning process is more easier than react.

                React more like library instead of framework, if I want to build an powerful web app, it will take much times to setup.
                
                I learned ReactJS the first before VueJS, it took months to understand the ecosystem (Redux & Context)
                Then I know about Vue, it much easier to learn because the documentation is well writen.
                concept of VueJs is not much different to ReactJS. that's very helpful to learn react first before going into vue.
                until now there are still a project that I'am working on with React, but not very complex.
                `
            },
            {
                id: 2,
                q: 'What complex things have you done in frontend development ?',
                answer: [
                    'Make spesific shapes through CSS',
                    'Animations',
                ]
            },
            {
                id: 3,
                q: 'why does a UI Developer need to know and understand UX? how far do you understand it?',
                answer: 
                ` Developer must know bout UX, every design that is made is not necesserily be implemented in website & accessible by user.
                User Interface should make users interested and make it easier to achieve the goals the user wants
                `
            },
            {
                id: 4,
                q: 'Give your analysis results regarding https://taskdev.mile.app/login from the UI / UX side!',
                answer: [
                    'After web loaded, user need to know the focus of where to fill in first.',
                    'login page must be loaded full in 1 page, user see entire login page in 1 page without scrolling again.',
                    'must add container or extra padding in mobile view because card login form is stick to screen size. need more extra padding little bit.'
                ]
            },
            {
                id: 5,
                q: 'Create a better login page based on https://taskdev.mile.app/login and deploy on https://www.netlify.com (https://www.netlify.com/)!',
                type: 'link',
                answer: `/login`
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