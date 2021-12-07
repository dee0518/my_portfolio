function Paragraph(props) {
    const { pClass, children } = props

    return (
        <p className={pClass || ''}>
            {children}
        </p>
    )
}

export default Paragraph