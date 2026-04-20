import React, { useMemo, useState } from "react";

const cards = [
  { id: "acceptance", title: "受容", short: "今の自分を受け止める", message: "まずは今の状態を否定せず、そのまま認めることから始まります。" },
  { id: "trust", title: "信頼", short: "流れを信頼する", message: "今起きていることにも意味があると、少しだけ信じてみてください。" },
  { id: "release", title: "手放し", short: "執着をゆるめる", message: "握りしめている考えを少しゆるめるだけで流れが変わります。" },
  { id: "truth", title: "真実", short: "本音に気づく", message: "問題の奥にある本当の願いに目を向けてください。" },
  { id: "courage", title: "勇気", short: "一歩踏み出す", message: "小さな行動が現実を変えるきっかけになります。" }
];

function buildGuidance(selectedCard, note) {
  return `今回のカードは「${selectedCard.title}」です。${selectedCard.message}\n\n${note ? `補足メモ：${note}\n\n` : ""}焦らず、今日ひとつだけできることを選んでみてください。`;
}

export default function App() {
  const [selectedCardId, setSelectedCardId] = useState("acceptance");
  const [note, setNote] = useState("");

  const selectedCard = useMemo(
    () => cards.find((c) => c.id === selectedCardId) || cards[0],
    [selectedCardId]
  );

  const text = buildGuidance(selectedCard, note);

  return (
    <div style={{ padding: 20 }}>
      <h1>Being Card</h1>

      <div>
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => setSelectedCardId(card.id)}
            style={{ margin: 5 }}
          >
            {card.title}
          </button>
        ))}
      </div>

      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="メモ"
        style={{ width: "100%", height: 100, marginTop: 10 }}
      />

      <pre style={{ marginTop: 20 }}>{text}</pre>
    </div>
  );
}
