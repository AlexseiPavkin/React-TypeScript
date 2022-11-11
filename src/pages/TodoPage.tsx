import React from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import { ITodo } from '../components/interfaces'

const TodoPage: React.FC = () => {

    const [todo, setTodo] = React.useState<ITodo[]>([])

    React.useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todo') || '[]') as ITodo[]
        setTodo(saved)
    }, [])

    React.useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todo))
    }, [todo])

    const addHandler = (title: string) => {

        const newTodo = {
            title: title,
            id: Date.now(),
            completed: false
        }

        setTodo((prev) => { return [newTodo, ...todo] })

    }

    const toggleHandler = (id: number) => {

        setTodo(prev => prev.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item
        }))

    }

    const removeHandler = (id: number) => {
        const shouldRemove = confirm('Вы уверены, что хотите удалить элемент?')
        if (shouldRemove) {
            setTodo(prev => prev.filter(item => item.id !== id))
        }
    }


    return (
        <>
            <TodoForm onAdd={addHandler} />
            <TodoList todo={todo} onToggle={toggleHandler} onRemove={removeHandler} />
        </>
    )
}

export default TodoPage
