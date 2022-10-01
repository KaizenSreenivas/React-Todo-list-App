const FormTodo = ({ handleSubmit, setTodo, todo, editTodo, onChange }) => {
    return (
        <div>
            <h1>My Todo List App</h1>
            <form className='todoForm' onSubmit={handleSubmit}>
                <input type='text' name='items'
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)} />
                <button type='submit' >{editTodo ? 'Edit' : 'Go'}</button>
            </form>
        </div>
    )
}

export default FormTodo;