<template>
    <div>
        <ul>
            <li v-for="(question) in questions" :key="question.id" class="mb-5">
                <div class="flex">
                    <div class="w-1/12 flex justify-center">
                        {{question.id}}.
                    </div>
                    <div class="w-11/12">
                        <h3>
                            {{question.q}}
                        </h3>
                        <div class="mb-5">
                            <component :is="answerComponentName(question.type, question.answer)"  :question="question" />
                        </div>
                        <ul v-if="question.childs" class="ml-4">
                            <li v-for="(questionChild) in question.childs" :key="questionChild.id" class="mb-4">
                                <h4>
                                    {{questionChild.q}}    
                                </h4>    
                                <div>
                                    <component :is="answerComponentName(questionChild.type, questionChild.answer)" :question="questionChild" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </li>
        </ul>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import AnswerLink from '../components/AnswerLink.vue';
import AnswerText from '../components/AnswerText.vue';

export default {
    components: {
        AnswerLink,
        AnswerText
    },
    computed: {
        ...mapState([
            'questions'
        ]),
        answerComponentName() {
            return (type = 'text', answer) => {
                let componentName;

                console.log(type, answer);

                switch (type) {
                    case 'link':
                        componentName = 'answer-link';
                        break;
                
                    default:
                        componentName = 'answer-text';
                        break;
                }

                return componentName;
            }
        }
    }    

}
</script>