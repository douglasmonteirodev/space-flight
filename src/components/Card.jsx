import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ card }) => {
    const { id, title, imageUrl, publishedAt, summary } = card;

    return (
        <div className='card--container'>
            <div className='card--article-left'>
                <img src={imageUrl} alt={title} />
            </div>

            <div className='card--article-right'>
                <div className='card--article-content'>
                    <h3>{title}</h3>
                    <div className='card--article-Binfos'>
                        <div className='card--publishedAt'>
                            {publishedAt
                                .slice(0, -14)
                                .split("-")
                                .reverse()
                                .join("/")}
                        </div>
                    </div>
                </div>
                <p>
                    {summary.length > 100
                        ? `${summary.substring(0, 100)}...`
                        : `${summary}`}
                </p>
                <Link to={`/${id}`} className='btn--card'>
                    Ver mais
                </Link>
            </div>
        </div>
    );
};

export default Card;
