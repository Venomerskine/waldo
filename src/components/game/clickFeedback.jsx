import "./clickFeedback.css";

export default function ClickFeedback ({x, y, correct, onComplete}) {
    return (
        <div 
        role="status"
        aria-live="polite"
        className={`click-feedback ${correct ? "success" : "miss"}`}
        style={{
            left: `${x}`,
            top: `${y}`,
        }}

        onAnimationEnd={onComplete}
        >
            { correct ? "Found!" : "Try Again"}
        </div>
    )
}