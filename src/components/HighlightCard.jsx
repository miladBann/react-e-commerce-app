

function HighlightCard({logo, title, paragraph})
{
    return (
        <div>
            <div className="card">
                <div className="logoo">
                    <i className={`${logo}`}></i>
                </div>
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
        </div>
    );
}

export default HighlightCard;