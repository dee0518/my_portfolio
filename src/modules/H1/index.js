function H1(props) {
    const { h1Class, children } = props

    return (
        <h1 className={h1Class || ''}>
            {children}
        </h1>
    )
}

export default H1