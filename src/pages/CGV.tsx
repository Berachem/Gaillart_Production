import { Footer } from "@/components/Footer";

const prestations = [
  "Tournage vidéo",
  "Montage vidéo",
  "Post-production",
  "Captation d'événements",
  "Films institutionnels, promotionnels ou publicitaires",
  "Vidéos pour réseaux sociaux",
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
            <p className="text-white/70">Prestations de vidéaste</p>
            <p className="text-base md:text-lg text-white/80">
              Les présentes Conditions Générales de Vente (ci-après « CGV »)
              régissent les relations contractuelles entre :{" "}
              <strong>Le Prestataire : GAILLART PRODUCTION</strong> (ci-après
              « le Prestataire ») et <strong>Le Client</strong> : toute personne
              physique ou morale faisant appel aux services du Prestataire.
              Toute commande implique l'adhésion pleine et entière du Client aux
              présentes CGV, à l'exclusion de tout autre document.
            </p>
          </header>

          <section className="space-y-10">
            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gold">
                Article 1 – Objet
              </h2>
              <p className="text-white/80">
                Les présentes CGV ont pour objet de définir les conditions dans
                lesquelles le Prestataire fournit au Client des prestations de
                services de création audiovisuelle, incluant notamment (liste
                non exhaustive) :
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
              <p className="text-white/80">
                Toute prestation fait l'objet d'un devis détaillé, valable pour
                une durée de 30 jours à compter de sa date d'émission. La
                commande est considérée comme ferme et définitive à réception
                par le Prestataire :
              </p>
              <ul className="list-disc list-inside text-white/80 grid gap-2">
                <li>
                  du devis daté, signé, et portant la mention « bon pour
                  accord »,
                </li>
                <li>et, le cas échéant, du versement d'un acompte.</li>
              </ul>
              <p className="text-white/80">
                Toute modification demandée après validation du devis pourra
                faire l'objet d'un devis complémentaire.
              </p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gold">
                Article 3 – Tarifs
              </h2>
              <p className="text-white/80">
                Les prix sont exprimés en euros (€) et hors taxes (HT), sauf
                mention contraire. Ils comprennent uniquement les prestations
                expressément mentionnées dans le devis. Toute prestation
                supplémentaire (heures de tournage additionnelles, modifications
                non prévues, déplacements supplémentaires, etc.) sera facturée
                en sus. Les frais annexes (déplacements, hébergement,
                restauration, location de matériel spécifique, droits musicaux,
                etc.) peuvent être facturés séparément s'ils ne sont pas inclus
                dans le devis initial.
              </p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gold">
                Article 4 – Modalités de paiement
              </h2>
              <p className="text-white/80">
                Sauf indication contraire sur le devis :
              </p>
              <ul className="list-disc list-inside text-white/80 grid gap-2">
                <li>
                  un acompte de 30 % à 50 % du montant total est exigible à la
                  commande,
                </li>
                <li>
                  le solde est payable à la livraison du projet ou au plus tard
                  à 30 jours à compter de la date de facturation.
                </li>
              </ul>
              <p className="text-white/80">
                Les paiements s'effectuent par virement bancaire, chèque ou
                tout autre moyen accepté par le Prestataire. Tout retard de
                paiement entraînera, de plein droit et sans mise en demeure
                préalable :
              </p>
              <ul className="list-disc list-inside text-white/80 grid gap-2">
                <li>
                  des pénalités de retard calculées sur la base du taux légal en
                  vigueur,
                </li>
                <li>
                  une indemnité forfaitaire pour frais de recouvrement de 40 €
                  (article L441-10 du Code de commerce).
                </li>
              </ul>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gold">
                Article 5 – Déroulement de la prestation
              </h2>
              <p className="text-white/80">
                Le Prestataire s'engage à réaliser la prestation conformément au
                devis accepté et selon les règles de l'art. Le Client s'engage
                à :
              </p>
              <ul className="list-disc list-inside text-white/80 grid gap-2">
                <li>
                  fournir toutes les informations nécessaires à la bonne
                  réalisation du projet,
                </li>
                <li>
                  être présent ou représenté lors des étapes clés si nécessaire,
                </li>
                <li>
                  valider les éléments demandés dans des délais raisonnables.
                </li>
              </ul>
              <p className="text-white/80">
                Tout retard imputable au Client pourra entraîner un report des
                délais de livraison, sans que la responsabilité du Prestataire
                ne puisse être engagée.
              </p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gold">
                Article 6 – Délais de livraison
              </h2>
              <p className="text-white/80">
                Les délais de livraison sont donnés à titre indicatif, sauf
                mention contraire écrite. Ils dépendent notamment :
              </p>
              <ul className="list-disc list-inside text-white/80 grid gap-2">
                <li>de la complexité du projet,</li>
                <li>de la réactivité du Client pour les validations,</li>
                <li>du nombre de retours demandés.</li>
              </ul>
              <p className="text-white/80">
                Un retard raisonnable ne pourra en aucun cas justifier
                l'annulation de la commande ou une demande de dommages et
                intérêts.
              </p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gold">
                Article 7 – Modifications et retours
              </h2>
              <p className="text-white/80">
                Sauf mention contraire dans le devis, le prix inclut un nombre
                limité de retours/modifications. Toute demande de modification
                supplémentaire, ou sortant du cadre initialement défini
                (changement de scénario, ajout de séquences, modification
                majeure du montage), fera l'objet d'une facturation
                complémentaire.
              </p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gold">
                Article 8 – Annulation
              </h2>
              <p className="text-white/80 font-medium">
                Annulation par le Client
              </p>
              <p className="text-white/80">
                En cas d'annulation de la commande par le Client :
              </p>
              <ul className="list-disc list-inside text-white/80 grid gap-2">
                <li>l'acompte versé reste acquis au Prestataire,</li>
                <li>
                  si l'annulation intervient après le début de la prestation, le
                  Prestataire se réserve le droit de facturer l'intégralité des
                  travaux réalisés.
                </li>
              </ul>
              <p className="text-white/80 font-medium">
                Annulation par le Prestataire
              </p>
              <p className="text-white/80">
                En cas d'impossibilité majeure (force majeure, maladie grave,
                etc.), le Prestataire s'engage à prévenir le Client dans les
                meilleurs délais et à proposer une solution alternative ou le
                remboursement des sommes perçues pour les prestations non
                réalisées.
              </p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gold">
                Article 9 – Propriété intellectuelle
              </h2>
              <p className="text-white/80">
                Les œuvres réalisées par le Prestataire sont protégées par le
                Code de la propriété intellectuelle. Sauf cession de droits
                expressément prévue au devis :
              </p>
              <ul className="list-disc list-inside text-white/80 grid gap-2">
                <li>le Prestataire reste titulaire des droits d'auteur,</li>
                <li>
                  le Client bénéficie d'un droit d'utilisation limité, non
                  exclusif, pour les usages définis au devis (durée, territoire,
                  supports).
                </li>
              </ul>
              <p className="text-white/80">
                Toute utilisation non prévue devra faire l'objet d'un accord
                écrit préalable et, le cas échéant, d'une rémunération
                complémentaire.
              </p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gold">
                Article 10 – Droit à l'image
              </h2>
              <p className="text-white/80">
                Le Client garantit avoir obtenu l'ensemble des autorisations
                nécessaires (droit à l'image des personnes filmées, autorisation
                des lieux, etc.). Le Prestataire ne saurait être tenu
                responsable en cas de litige lié à l'absence ou à
                l'insuffisance de ces autorisations.
              </p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gold">
                Article 11 – Responsabilité
              </h2>
              <p className="text-white/80">
                Le Prestataire est tenu à une obligation de moyens et non de
                résultat. Sa responsabilité ne saurait être engagée en cas :
              </p>
              <ul className="list-disc list-inside text-white/80 grid gap-2">
                <li>de dommages indirects,</li>
                <li>de perte de données imputable au Client,</li>
                <li>
                  d'utilisation du contenu par le Client non conforme à la
                  réglementation en vigueur.
                </li>
              </ul>
              <p className="text-white/80">
                En tout état de cause, la responsabilité du Prestataire est
                limitée au montant total de la prestation facturée.
              </p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gold">
                Article 12 – Confidentialité
              </h2>
              <p className="text-white/80">
                Le Prestataire et le Client s'engagent à conserver
                confidentielles les informations et documents échangés dans le
                cadre de la prestation.
              </p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gold">
                Article 13 – Droit applicable et litiges
              </h2>
              <p className="text-white/80">
                Les présentes CGV sont soumises au droit français. En cas de
                litige, les parties s'engagent à rechercher une solution amiable
                avant toute action judiciaire. À défaut d'accord amiable, le
                litige sera porté devant les tribunaux compétents du ressort du
                siège du Prestataire.
              </p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gold">
                Article 14 – Acceptation des CGV
              </h2>
              <p className="text-white/80">
                Le Client reconnaît avoir pris connaissance des présentes
                Conditions Générales de Vente et les accepter sans réserve.
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
