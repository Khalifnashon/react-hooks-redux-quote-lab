import React from "react";
import { useDispatch } from "react-redux";
import { upvoteQuote, downvoteQuote } from "./quotesSlice";

function QuoteCard(props) {
  const { content, author, votes, id } = props.quote;
  const dispatch = useDispatch();

  const handleUpvote = () => {
    dispatch(upvoteQuote(id));
  }

  const handleDownvote = () => {
    dispatch(downvoteQuote(id));
  };

  return (
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>{content}</p>
            <footer>
              - {author}{" "}
              <cite title="Source Title">{/*Render Quote Author*/}</cite>
            </footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" className="btn btn-primary" onClick={handleUpvote}>
              Upvote
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleDownvote}>
              Downvote
            </button>
            <button type="button" className="btn btn-danger">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>Votes: {votes}</div>
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;
