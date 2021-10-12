function Button(props) {
    const { buttonClass, children, value } = props

    const onClick = () => {
        props.onClick(value)
    }

    return (
        <button type="button" className={buttonClass || ''} onClick={() => onClick()}>
            {children}
        </button>
    )
}

export default Button