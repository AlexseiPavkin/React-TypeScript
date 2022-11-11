import React from 'react'
import { isTemplateExpression } from 'typescript'
import { ITodo } from './interfaces'

type TodoListProps = {
    todo: ITodo[]
    onToggle(id: number): void
    onRemove(id: number): void
}

const TodoList: React.FC<TodoListProps> = ({ todo, onRemove, onToggle }) => {

    if (todo.length === 0) {
        return <p className="center">Пока нет дел!</p>
    }
    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault()
        onRemove(id)
    }


    return (
        <ul>
            {todo.map((item) => {
                const classes = ['todo']
                if (item.completed) {
                    classes.push('completed')
                }
                return (
                    <li className={classes.join(' ')} key={item.id}>
                        <label>
                            <input type="checkbox" checked={item.completed} onChange={onToggle.bind(null, item.id)} />
                            <span>{item.title}</span>
                            <i className="material-icons red-text" onClick={event => { removeHandler(event, item.id) }}>delete</i>
                        </label>
                    </li>
                )
            })}

        </ul>
    )
}

export default TodoList
