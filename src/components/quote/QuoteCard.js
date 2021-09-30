import React from "react";
import { QuoteList } from "./QuoteList";



const QuoteCard = ({ quote }) => {
    return ( 
        <section className="quote_section">
            <p className="quote">{quote.text}</p>
            <h4 className="quote_author">{quote.author}</h4>
        </section>
     );
}
 
export default QuoteCard;