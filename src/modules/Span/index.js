function Span(props) {
    const { spanClass, children } = props

    return (
        <span className={spanClass || ''}>
            {children}
        </span>
    )
}

export default Span