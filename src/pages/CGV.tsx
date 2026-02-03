import { Footer } from "@/components/Footer";

const prestations = [
  "Tournage vidéo",
  "Montage vidéo",
  "Post-production",
  "Captation d'événements",
  "Films institutionnels, promotionnels ou publicitaires",
  "Vidéos pour réseaux sociaux",
  "Sonorisation d'événements",
  "Éclairage scénique et technique",
  "Captation multicaméra",
  "Diffusion live / streaming",
  "Régie technique audiovisuelle",
  "Location, installation et exploitation de matériel audiovisuel",
];

export function CGV() {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <div className="pt-28 pb-12 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <header className="mb-12 space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">
              Gaillart Production
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold text-gold">
              Conditions Générales de Vente (CGV)
            </h1>
            <p className="text-white/70">
              Dernière mise à jour : 3 février 2026
            </p>
            <p className="text-base md:text-lg text-white/80">
              Les présentes conditions générales de vente (ci-après « CGV »)
              définissent les conditions dans lesquelles Gaillart Production,
              société de production et de prestations audiovisuelles
              professionnelles, (ci-après le « Prestataire ») fournit des
              prestations au profit de toute personne physique ou morale (ci-après
              le « Client »). Toute commande implique l'adhésion pleine et
              entière du Client aux présentes CGV, à l'exclusion de tout autre
              document.
            </p>
          </header>

          <section className="space-y-10">
            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gold">
                Article 1 – Objet
              </h2>
              <p className="text-white/80">
                Les présentes CGV ont pour objet de définir les modalités et
                conditions dans lesquelles le Prestataire fournit au Client des
                prestations de création, production et exploitation audiovisuelle
                (liste non exhaustive ci-dessous), en France.
              </p>
              <ul className="list-disc list-inside text-white/75 grid gap-2">
                {prestations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gold">
                Article 2 – Devis et commande
              </h2>
              <ul className="list-disc list-inside text-white/80 grid gap-2">
                <li>
                  Toute prestation fait l'objet d'un devis détaillé valable 30
                  jours à compter de sa date d'émission.
                </li>
                <li>
                  La commande est ferme et définitive à réception du devis daté
                  et signé avec la mention « bon pour accord » et, le cas échéant,
                  du versement d'un acompte.
                </li>
                <li>
                  Toute modification demandée après validation pourra faire
                  l'objet d'un devis complémentaire.
                </li>
              </ul>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gold">
                Article 3 – Tarifs
              </h2>
              <ul className="list-disc list-inside text-white/80 grid gap-2">
                <li>Les prix sont exprimés en euros (€) hors taxes.</li>
                <li>
                  Les tarifs incluent uniquement les prestations mentionnées au
                  devis.
                </li>
                <li>
                  Toute prestation supplémentaire est facturée en sus, après
                  accord du Client.
                </li>
                <li>
                  Les frais annexes (déplacements, hébergements, location
                  spécifique, droits, etc.) peuvent être facturés séparément s'ils
                  ne sont pas inclus au devis.
                </li>
              </ul>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gold">
                Article 4 – Modalités de paiement
              </h2>
              <ul className="list-disc list-inside text-white/80 grid gap-2">
                <li>
                  Un acompte de 30 % à 50 % est demandé à la commande, sauf
                  mention contraire au devis.
                </li>
                <li>
                  Le solde est payable à la livraison ou au plus tard 30 jours
                  après facturation.
                </li>
                <li>
                  Moyens de paiement acceptés : virement bancaire, chèque ou tout
                  autre moyen accepté par le Prestataire.
                </li>
                <li>
                  En cas de retard de paiement, des pénalités au taux légal seront
                  appliquées, ainsi qu'une indemnité forfaitaire de recouvrement
                  de 40 € (article L441-10 du Code de commerce).
                </li>
              </ul>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gold">
                Article 5 – Déroulement de la prestation
              </h2>
              <ul className="list-disc list-inside text-white/80 grid gap-2">
                <li>
                  Le Prestataire est tenu à une obligation de moyens et s'engage
                  à mettre en œuvre toutes les compétences nécessaires à la bonne
                  réalisation de la prestation.
                </li>
                <li>
                  Le Client s'engage à fournir toutes les informations
                  nécessaires, à être présent ou représenté si besoin, et à
                  valider les éléments transmis dans des délais raisonnables.
                </li>
                <li>
                  Tout retard imputable au Client peut entraîner un report des
                  délais de réalisation ou de livraison.
                </li>
              </ul>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gold">
                Article 6 – Délais de livraison
              </h2>
              <ul className="list-disc list-inside text-white/80 grid gap-2">
                <li>Les délais sont donnés à titre indicatif.</li>
                <li>
                  Ils dépendent notamment de la complexité du projet, de la
                  réactivité du Client et du nombre de retours demandés.
                </li>
                <li>
                  Aucun retard raisonnable ne peut justifier une annulation ou
                  l'octroi de dommages et intérêts.
                </li>
              </ul>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gold">
                Article 7 – Modifications et retours
              </h2>
              <ul className="list-disc list-inside text-white/80 grid gap-2">
                <li>
                  Le devis inclut un nombre limité de retours, précisé dans le
                  devis ou le contrat.
                </li>
                <li>
                  Toute modification hors du cadre initial fera l'objet d'une
                  facturation complémentaire.
                </li>
              </ul>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gold">
                Article 8 – Annulation
              </h2>
              <p className="text-white/80 font-medium">Annulation par le Client</p>
              <ul className="list-disc list-inside text-white/80 grid gap-2">
                <li>L'acompte reste acquis au Prestataire.</li>
                <li>
                  Les travaux déjà réalisés peuvent être facturés intégralement.
                </li>
              </ul>
              <p className="text-white/80 font-medium">Annulation par le Prestataire</p>
              <ul className="list-disc list-inside text-white/80 grid gap-2">
                <li>
                  En cas de force majeure, le Prestataire informe rapidement le
                  Client.
                </li>
                <li>
                  Une solution alternative sera proposée ou les prestations non
                  réalisées seront remboursées.
                </li>
              </ul>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gold">
                Article 9 – Propriété intellectuelle
              </h2>
              <ul className="list-disc list-inside text-white/80 grid gap-2">
                <li>
                  Les œuvres réalisées sont protégées par le Code de la propriété
                  intellectuelle.
                </li>
                <li>
                  Sauf cession prévue au devis, le Prestataire reste titulaire
                  des droits et le Client bénéficie d'un droit d'utilisation
                  limité et non exclusif, conforme à l'usage prévu.
                </li>
                <li>
                  Toute utilisation non prévue au devis nécessite un accord écrit
                  du Prestataire et peut être facturée.
                </li>
              </ul>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gold">
                Article 10 – Droit à l'image
              </h2>
              <ul className="list-disc list-inside text-white/80 grid gap-2">
                <li>
                  Le Client garantit avoir obtenu toutes les autorisations
                  nécessaires auprès des personnes filmées ou enregistrées.
                </li>
                <li>
                  Le Prestataire ne peut être tenu responsable en cas de litige
                  relatif au droit à l'image.
                </li>
              </ul>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gold">
                Article 11 – Matériel audiovisuel
              </h2>
              <ul className="list-disc list-inside text-white/80 grid gap-2">
                <li>
                  Le matériel reste la propriété exclusive du Prestataire.
                </li>
                <li>
                  Toute perte, casse ou vol imputable au Client ou au public est
                  facturé au Client.
                </li>
                <li>
                  Le Client est responsable du matériel pendant toute la durée de
                  la prestation.
                </li>
              </ul>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gold">
                Article 12 – Responsabilité
              </h2>
              <ul className="list-disc list-inside text-white/80 grid gap-2">
                <li>Le Prestataire est tenu à une obligation de moyens.</li>
                <li>
                  Le Prestataire ne pourra être tenu responsable des dommages
                  indirects, d'une perte de données imputable au Client, ou d'un
                  usage non conforme des contenus livrés.
                </li>
                <li>
                  La responsabilité du Prestataire est plafonnée au montant total
                  de la prestation facturée.
                </li>
              </ul>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gold">
                Article 13 – Confidentialité
              </h2>
              <p className="text-white/80">
                Les parties s'engagent à conserver confidentielles les
                informations, données et documents échangés dans le cadre des
                prestations, sauf obligation légale ou accord préalable écrit.
              </p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gold">
                Article 14 – Droit applicable et litiges
              </h2>
              <ul className="list-disc list-inside text-white/80 grid gap-2">
                <li>Le droit français est applicable aux présentes CGV.</li>
                <li>
                  Les parties privilégieront une solution amiable en cas de
                  litige.
                </li>
                <li>
                  À défaut, les tribunaux du ressort du siège social du
                  Prestataire seront seuls compétents.
                </li>
              </ul>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gold">
                Article 15 – Acceptation des CGV
              </h2>
              <p className="text-white/80">
                Le Client reconnaît avoir pris connaissance des présentes CGV et
                les accepter sans réserve.
              </p>
            </article>
          </section>
        </div>
      </div>

      <div className="pb-12">
        <Footer />
      </div>
    </div>
  );
}
