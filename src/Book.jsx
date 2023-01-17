
const Book = ( {book} ) => {
    const openUrl = (url) => {
        window.open(url, '_blank', 'noreferrer');
    }
    return (
        <div className={"card m-2"} style={{cursor: 'pointer'}} onClick={()=> openUrl(book.url)}>
            <img src={book.image} className={"card-img-top"} alt={book.alt} />
            <div className={"card-body"}>
                <h5 className={"card-title title"}>{book.title}</h5>
                <p className={"card-text subtitle"}>{book.subtitle}</p>
                <h5 className={"card-text"}>{book.price}</h5>
            </div>
        </div>
    )
}

export default Book