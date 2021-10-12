function Image(props) {
    const { imgClass, imgSource, imgTitle } = props

    return (
        <img className={imgClass || ''} src={imgSource} alt={imgTitle}/>
    )
}

export default Image