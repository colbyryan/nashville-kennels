import React from "react";
import { useEffect, useState } from "react";
import getAllQuotes from "../../modules/QuoteManager";
import QuoteCard from "./QuoteCard";

export const QuoteList = () => {
    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState([])

    const getQuotes = () => {
        return getAllQuotes().then(quotesFromAPI => {
            setQuotes(quotesFromAPI)
        })
    }
    const handleNewQuote = () => {
        let newQuote = <QuoteCard quote={quotes[Math.floor(Math.random() * quotes.length)]} />
        return newQuote
    }
    useEffect(() => {
        getQuotes();
    }, []);

    return (
        <div className="quote-card">
            {quotes.length > 0 ? <QuoteCard quote={quotes[Math.floor(Math.random() * quotes.length)]} /> : <p>There are no quotes.</p>}
            <button className="random-quote" onClick={handleNewQuote()}>New Quote</button>
        </div>
    )
};
