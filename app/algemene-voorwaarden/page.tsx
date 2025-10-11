'use client';

import Image from "next/image";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Image
                src="/sendwise-logo.png" 
                alt="Sendwise" 
                width={140} 
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <Link 
              href="/"
              className="text-gray-600 hover:text-[#0066ff] transition-colors font-medium"
            >
              Terug naar website
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Algemene Voorwaarden – Sendwise
            </h1>
            <p className="text-gray-600">
              Versie 1.0 – Ingangsdatum: 11 oktober 2025
            </p>
          </div>

          {/* Company Info */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-12">
            <p className="text-gray-700 mb-2"><strong>Sendwise</strong></p>
            <p className="text-gray-700">Ondernemingsweg 66</p>
            <p className="text-gray-700 mb-4">2404HN Alphen aan den Rijn – Nederland</p>
            <p className="text-gray-700">KvK 98390376 – BTW NL868472256B01</p>
            <p className="text-gray-700">E-mail: info@sendwise.nl – Telefoon: +31 6 19156123</p>
          </div>

          {/* Content Sections */}
          <div className="prose prose-lg max-w-none">
            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Toepasselijkheid</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>1.1</strong> Deze algemene voorwaarden ("Voorwaarden") zijn van toepassing op alle aanbiedingen, overeenkomsten en diensten van Sendwise betreffende het gebruik van het online verzendplatform www.sendwise.nl en app.sendwise.nl (het "Platform").
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>1.2</strong> Door gebruik te maken van het Platform of het plaatsen van een bestelling verklaart de klant ("Klant") akkoord te gaan met deze Voorwaarden.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>1.3</strong> Algemene of inkoopvoorwaarden van de Klant zijn niet van toepassing, tenzij uitdrukkelijk en schriftelijk door Sendwise aanvaard.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>1.4</strong> Sendwise behoudt zich het recht voor deze Voorwaarden te wijzigen. Gewijzigde voorwaarden worden minimaal 30 dagen voor inwerkingtreding via het Platform of per e-mail aangekondigd. Bij een voor de Klant nadelige wijziging mag de Klant binnen deze termijn de overeenkomst beëindigen.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Diensten</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>2.1</strong> Sendwise exploiteert een online platform waarmee Klanten verzendlabels kunnen aanmaken, zendingen kunnen volgen en aanvullende verzendopties kunnen beheren.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>2.2</strong> Alle verzendingen worden uitgevoerd via vervoerders ("Vervoerders") waarmee Sendwise contracten heeft afgesloten. De Klant verzendt dus onder de contracten van Sendwise.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>2.3</strong> De daadwerkelijke uitvoering van het vervoer – inclusief het ophalen, transporteren, afleveren en eventueel verzekeren van pakketten – gebeurt door de betreffende Vervoerder. Sendwise treedt daarbij uitsluitend op als tussenpersoon (expediteur) in de zin van artikel 8:60 Burgerlijk Wetboek.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>2.4</strong> Pickupdiensten en verzekeringen worden altijd uitgevoerd door de Vervoerder. Sendwise is hiervoor niet aansprakelijk.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>2.5</strong> Het aanbod, de actuele vervoerders en eventuele toeslagen worden vermeld op het Platform.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Registratie en gebruik van het Platform</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>3.1</strong> De Klant dient een Account aan te maken om gebruik te kunnen maken van het Platform. Bij registratie moeten correcte en volledige (bedrijfs)gegevens worden verstrekt.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>3.2</strong> De Klant is verantwoordelijk voor het veilig bewaren van inloggegevens en het voorkomen van ongeoorloofd gebruik.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>3.3</strong> Sendwise mag Accounts tijdelijk blokkeren of beëindigen bij vermoeden van misbruik, overtreding van deze Voorwaarden of andere ongeoorloofde handelingen.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>3.4</strong> De Klant is volledig verantwoordelijk voor alle activiteiten die plaatsvinden onder zijn Account.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Acceptable Use (toegestaan gebruik)</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>4.1</strong> Het is de Klant niet toegestaan het Platform te gebruiken voor:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>onrechtmatige, frauduleuze of schadelijke activiteiten;</li>
                <li>verspreiding van spam, malware of virussen;</li>
                <li>toegang tot of verstoring van systemen van Sendwise of derden;</li>
                <li>datamining, scraping of geautomatiseerde extractie van gegevens zonder schriftelijke toestemming;</li>
                <li>het aanbieden of bouwen van concurrerende diensten;</li>
                <li>schending van intellectuele eigendomsrechten of privacy van derden.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                <strong>4.2</strong> Sendwise mag het gebruik van het Platform monitoren en bij overtreding de toegang beperken, opschorten of beëindigen.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Tarieven, toeslagen en betalingen</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>5.1</strong> Klanten betalen uitsluitend voor de daadwerkelijk aangemaakte verzendlabels. Er zijn geen maandelijkse abonnementskosten.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>5.2</strong> Alle prijzen zijn exclusief btw en eventuele heffingen, tenzij anders vermeld.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>5.3</strong> Toeslagen (zoals piektoeslagen, brandstoftoeslagen, of individuele toeslagen wegens afwijkend gewicht, formaat of andere vervoerderskosten) worden doorberekend aan de Klant.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>5.4</strong> De bindende metingen en toeslagen zoals vastgesteld door de Vervoerder zijn leidend voor de facturatie. Sendwise kan deze gegevens zonder verder bewijs hanteren.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>5.5</strong> Structurele of vaste toeslagen worden vermeld bij de betreffende Vervoerder op het Platform. Tijdelijke toeslagen (zoals piektoeslagen) worden tijdig en duidelijk op het Platform gecommuniceerd.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>5.6</strong> Ongebruikte verzendlabels worden automatisch niet gefactureerd.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>5.7</strong> Facturatie vindt automatisch plaats (thans maandelijks, mogelijk later via automatische incasso).
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>5.8</strong> Betaling dient te geschieden binnen 14 dagen na factuurdatum.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>5.9</strong> Bij overschrijding van de betalingstermijn is de Klant van rechtswege in verzuim, zonder dat een ingebrekestelling is vereist. Vanaf dat moment is de Klant wettelijke handelsrente en redelijke buitengerechtelijke incassokosten verschuldigd.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>5.10</strong> Sendwise mag haar dienstverlening opschorten of Accounts blokkeren bij betalingsachterstand.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Transport en aansprakelijkheid van vervoerders</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>6.1</strong> De Vervoerder is volledig verantwoordelijk voor het feitelijke transport, inclusief schade, vertraging of verlies van zendingen.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>6.2</strong> Sendwise bemiddelt namens de Klant bij klachten of schadeclaims richting de Vervoerder, maar is niet aansprakelijk voor de uitkomst van die procedures.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>6.3</strong> Alle zendingen vallen onder de voorwaarden van de betreffende Vervoerder. Deze zijn op aanvraag of via de vervoerderspagina's beschikbaar.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>6.4</strong> Eventuele aansprakelijkheid voor schade tijdens vervoer ligt uitsluitend bij de Vervoerder volgens diens voorwaarden en wettelijke bepalingen. Sendwise sluit elke aansprakelijkheid in dit verband uit.
              </p>
            </section>

            {/* Section 7 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Klachten en aansprakelijkheid</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>7.1</strong> Klachten over facturen of diensten dienen binnen 14 dagen na ontdekking schriftelijk te worden gemeld via <a href="mailto:info@sendwise.nl" className="text-[#0066ff] hover:underline">info@sendwise.nl</a>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>7.2</strong> Na het verstrijken van deze termijn vervalt elk recht op reclamatie of schadevergoeding.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>7.3</strong> Sendwise is niet aansprakelijk voor enige vorm van schade, direct of indirect, waaronder begrepen gevolgschade, winstderving, verlies van gegevens, reputatieschade of bedrijfsstagnatie, behalve bij aantoonbare opzet of bewuste roekeloosheid van de directie van Sendwise.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>7.4</strong> In alle gevallen waarin Sendwise ondanks het voorgaande toch aansprakelijk zou zijn, is de aansprakelijkheid beperkt tot het bedrag van de betreffende zending waarop de schade betrekking heeft.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>7.5</strong> Sendwise is niet verantwoordelijk voor storingen, onderbrekingen of technische problemen met het Platform. Sendwise spant zich in om de dienstverlening naar beste vermogen te continueren ("inspanningsverplichting").
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Intellectuele eigendom en vertrouwelijkheid</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>8.1</strong> Alle intellectuele eigendomsrechten op het Platform, de software, documentatie, lay-out, ontwerpen en handelsnamen behoren toe aan Sendwise.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>8.2</strong> De Klant krijgt een beperkt, niet-exclusief en niet-overdraagbaar gebruiksrecht op het Platform zolang zijn Account actief is.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>8.3</strong> Zonder schriftelijke toestemming mag de Klant geen onderdelen van het Platform kopiëren, hergebruiken of doorverkopen.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>8.4</strong> Partijen zullen vertrouwelijke informatie niet delen met derden, behalve indien wettelijk vereist of voor zover noodzakelijk voor uitvoering van de overeenkomst.
              </p>
            </section>

            {/* Section 9 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Privacy en gegevensbescherming</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>9.1</strong> Sendwise verwerkt persoonsgegevens uitsluitend voor de uitvoering van haar diensten, zoals verzending, communicatie en facturatie.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>9.2</strong> Sendwise verwerkt deze gegevens als verwerker namens de Klant (verwerkingsverantwoordelijke) in de zin van de Algemene Verordening Gegevensbescherming (AVG).
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>9.3</strong> De verwerking geschiedt volgens de <Link href="/privacy" className="text-[#0066ff] hover:underline">Privacyverklaring</Link> en Verwerkersovereenkomst (DPA) van Sendwise, die integraal deel uitmaken van deze Voorwaarden.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>9.4</strong> Alle gegevens worden gehost en opgeslagen binnen de Europese Unie.
              </p>
            </section>

            {/* Section 10 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Beëindiging en opschorting</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>10.1</strong> Sendwise mag de dienstverlening of toegang tot het Platform opschorten of beëindigen indien de Klant zijn verplichtingen niet nakomt, waaronder betalingsachterstand of misbruik van het Platform.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>10.2</strong> Bij beëindiging worden openstaande bedragen onmiddellijk opeisbaar.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>10.3</strong> De Klant kan de overeenkomst beëindigen door het Account te verwijderen of door schriftelijke opzegging. Lopende facturen blijven verschuldigd.
              </p>
            </section>

            {/* Section 11 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Overmacht</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>11.1</strong> Sendwise is niet aansprakelijk bij overmacht, waaronder begrepen storingen bij vervoerders, internetuitval, cyberaanvallen, brand, overheidsmaatregelen, stakingen, of andere omstandigheden die buiten de redelijke invloedssfeer van Sendwise liggen.
              </p>
            </section>

            {/* Section 12 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Toepasselijk recht en geschillen</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>12.1</strong> Op deze Voorwaarden en alle overeenkomsten tussen Sendwise en de Klant is Nederlands recht van toepassing.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>12.2</strong> Geschillen worden exclusief voorgelegd aan de bevoegde rechter te Utrecht.
              </p>
            </section>

            {/* Section 13 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Slotbepalingen</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>13.1</strong> Indien enige bepaling van deze Voorwaarden ongeldig of onafdwingbaar blijkt, blijven de overige bepalingen volledig van kracht. De ongeldige bepaling zal worden vervangen door een bepaling die zoveel mogelijk aansluit bij het doel en de strekking van de oorspronkelijke bepaling.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>13.2</strong> De meest recente versie van deze Voorwaarden is steeds beschikbaar via <a href="https://www.sendwise.nl/algemene-voorwaarden" className="text-[#0066ff] hover:underline">www.sendwise.nl/algemene-voorwaarden</a>.
              </p>
            </section>

            {/* Contact Section */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Vragen?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Voor vragen over deze algemene voorwaarden kunt u contact opnemen via:
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  📧 <a href="mailto:info@sendwise.nl" className="text-[#0066ff] hover:underline">info@sendwise.nl</a>
                </p>
                <p className="text-gray-700">
                  📞 <a href="tel:+31619156123" className="text-[#0066ff] hover:underline">+31 6 19156123</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/">
              <Image
                src="/sendwise-logo.png" 
                alt="Sendwise" 
                width={140} 
                height={40}
                className="h-8 w-auto mx-auto mb-4"
              />
            </Link>
            <p className="text-gray-600 text-sm">
              © 2025 Sendwise. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

