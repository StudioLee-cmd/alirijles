/**
 * FAQ-accordeon. Eerste item open (site-structuur.md §3, autoriteitspagina).
 * <details>/<summary> is bewust gekozen boven een JS-accordeon: 'ie werkt zonder JavaScript,
 * is toetsenbord-bedienbaar out of the box en Google kan de antwoorden lezen.
 */
export default function Faq({ items }) {
  return (
    <div className="faq">
      {items.map((it, i) => (
        <details key={it.v} open={i === 0}>
          <summary>
            <span>{it.v}</span>
            <span className="plus" aria-hidden="true">
              +
            </span>
          </summary>
          <div className="antwoord">
            {(Array.isArray(it.a) ? it.a : [it.a]).map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}
