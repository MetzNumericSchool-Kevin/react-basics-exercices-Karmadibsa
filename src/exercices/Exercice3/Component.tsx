import { useState } from "react";

export default function Miroir() {
    const [miroir , setmiroir] = useState(false);
    const styleMiroir = miroir ? {opacity: 1} : {opacity: 0};
    return(
        <section>

        <div className="card bg-dark border border-warning-subtle miroir">

          <img src="aventurier.jpg" className="card-img-top img-fluid" style={styleMiroir} onMouseEnter={() => setmiroir(true)} onMouseLeave={() => setmiroir(false)}/>
          <div className="card-body">

            <h5 className="card-title">Miroir mon beau miroir</h5>
            <p className="card-text">Quel est mon reflet ?</p>
          </div>
        </div>

        <p>Vous avez l'air d'être un aventurier plein de charme dites-moi.</p>
        </section>
    );
}