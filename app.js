const App = {
    data() {
        return {
            title: 'Список заметок: ',
            placeholderValue: 'Введите название заметки',
            inputValue: '',
            notes: [
                'Note 1',
                'Note 2',
                'Note 3'
            ]
        }
    },
    //
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },
        addNote() {
            this.inputValue.trim().length > 0 && this.notes.push(this.inputValue)
            this.inputValue = ''
        },
        // inputKeypress(event){
        //     if(event.key === 'Enter'){this.addNote()}
        // },
        deleteNote(idx, event) {
            console.log(event)
            this.notes.splice(idx, 1)
        },
        textToUpperCase(text) {
            return text.toUpperCase()
        },
    },
    //computed возвращают значения на основании той модели состояния компонента(data), которая используется в методе, следят за ней Являются геттерами и сеттерами, не вызываются а передаются как переменные
    computed:{
        doubleCountComputed() {
            console.log('doubleCountComputed method')
            return this.notes.length * 2;
        },
    },
    //watch позволяет нам наблюдать за одноименной моделью состояния
    watch:{
        inputValue(){
            const mat = ['хуй', 'пизда', 'бля']
            mat.forEach(word=>{
                if(this.inputValue.includes(word)){
                    this.inputValue = ""
                    alert('Не ругайся, подонок')
                }
            })
        }
    }
}
Vue.createApp(App).mount("#app")