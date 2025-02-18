export default function BoutonAppelArchibald() {
  const annonce = "🧙‍♂️ Archibald : J'arrive, j'arrive Aventurier !";
  return (
    <section id="exercice2">
      <h2>Si je ne suis pas là, faites sonner la cloche !</h2>
      <button onClick={() => alert(annonce)} className="btn btn-primary">
        🛎️ Appeler Archibald
      </button>
    </section>
  );
}
