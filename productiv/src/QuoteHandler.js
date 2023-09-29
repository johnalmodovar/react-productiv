import React, { useState } from "react";
import Quote from "./Quote";

const BASE_QUOTES_URL = "https://inspo-quotes-api.herokuapp.com/quotes"

/** QuoteHandler: Fetches quote from API and renders quote.
 *
 * State:
 * - quote - text
 *
 * QuoteHandler -> Quote
 */

function QuoteHandler() {
  const [quote, SetQuote] = useState("");

  async function getQuote() {
    const response = await fetch(`${BASE_QUOTES_URL}/random`);
    const data = await response.json()
    const quote = `${data.quote.text} - ${data.quote.author}`

    SetQuote(quote);
  }

  return (
    <div className="QuoteHandler text-md-end mb-3">
      {(quote) && <Quote text={quote} />}
      <button
        className="btn btn-warning"
        onClick={getQuote}>
        {(quote) ? "Nu Quote" : "Click here for an inspirational quote!"}
      </button>
    </div>
  );
}

export default QuoteHandler