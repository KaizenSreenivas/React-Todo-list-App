const FormDeleteList = ({ completedItems }) => {
    return (
        <>
            {completedItems.length > 0 ? (<>
                <h1>Completed Items</h1>
                <ul className='allTodos'>
                    {completedItems?.map((d) => (
                        <li className='completedTodo'>
                            <span className='todoText' key={d.id}>
                                {d.todo}
                            </span>
                        </li>
                    ))}
                </ul>
            </>) : ''}
        </>
    )
}
export default FormDeleteList;