import React from 'react'

interface TodoFormProps {
    onAdd(title: string): void
}

const TodoForm: React.FC<TodoFormProps> = (props) => {

    //const [title, setTitle] = React.useState<string>('')

    /* const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    } */

    const ref = React.useRef<HTMLInputElement>(null)

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            /* console.log(title)
            setTitle('') */
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
        }
    }

    return (
        <div className="input-field mt2">
            <input
                //onChange={changeHandler}
                //value={title}
                ref={ref}
                onKeyPress={keyPressHandler}
                type="text"
                id="title"
                placeholder="Введите название дела" />
            <label htmlFor="title" className="active">Введите название дела</label>
        </div>
    )
}

export default TodoForm
