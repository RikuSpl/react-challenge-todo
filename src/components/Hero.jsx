

function Hero({ todo }) {

    let count = todo.filter(item => item.completed === true)

    

    return (
        <div className="hero-container">
            <p className="hero-text">Tasks Done: </p>
            <p className="hero-count">{count.length}/{todo.length}</p>
        </div>
    )
}

export default Hero