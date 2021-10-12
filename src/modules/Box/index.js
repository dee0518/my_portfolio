function Box(props) {
    const { boxClass, children } = props

    return (
        <div className={boxClass || ''}>
            {children}
        </div>
    )
}

export default Box