const ButtonComponent = ({name, onClick}) => {
    return (
        <div>
            <button style={{margin: '5px'}} onClick={onClick} className="btn btn-primary">{name}</button>
        </div>
    )
}

export default ButtonComponent;