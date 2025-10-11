'use client';

import Image from "next/image";
import Link from "next/link";

export default function PrivacyPage() {
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
              Privacyverklaring Sendwise
            </h1>
            <p className="text-gray-600">
              Laatst bijgewerkt: 11 oktober 2025
            </p>
          </div>

          {/* Content Sections */}
          <div className="prose prose-lg max-w-none">
            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Inleiding</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Deze privacyverklaring heeft tot doel u te informeren over hoe Sendwise (hierna: "wij", "ons", "onze") omgaat met uw persoonsgegevens. Wij hechten groot belang aan de bescherming van uw privacy en verwerken uw gegevens uitsluitend in overeenstemming met de geldende privacywetgeving, waaronder de Algemene Verordening Gegevensbescherming (AVG).
              </p>
              <p className="text-gray-700 leading-relaxed">
                Deze verklaring is van toepassing op het gebruik van onze website www.sendwise.nl en ons online verzendplatform app.sendwise.nl (gezamenlijk: het "Platform"), evenals op alle diensten die wij via deze kanalen aanbieden.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Verwerkingsverantwoordelijke</h2>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="text-gray-700 mb-2"><strong>Sendwise</strong></p>
                <p className="text-gray-700">Ondernemingsweg 66</p>
                <p className="text-gray-700 mb-4">2404HN Alphen aan den Rijn</p>
                <p className="text-gray-700">KvK-nummer: 98390376</p>
                <p className="text-gray-700">Btw-nummer: NL868472256B01</p>
                <p className="text-gray-700">E-mail: info@sendwise.nl</p>
                <p className="text-gray-700">Telefoon: +31 6 19156123</p>
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                Sendwise is de verwerkingsverantwoordelijke voor de verwerking van persoonsgegevens zoals beschreven in deze privacyverklaring.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Persoonsgegevens die wij verwerken</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Wij verwerken persoonsgegevens van verschillende categorieën betrokkenen, afhankelijk van de manier waarop gebruik wordt gemaakt van ons Platform.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">A. Van onze klanten (webshops):</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Bedrijfsnaam, KvK-nummer, btw-nummer</li>
                <li>Voor- en achternaam van contactpersonen</li>
                <li>Adresgegevens</li>
                <li>E-mailadres, telefoonnummer</li>
                <li>Inloggegevens (gebruikersnaam, wachtwoord)</li>
                <li>Betalings- en factuurgegevens</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">B. Van eindklanten (ontvangers van zendingen):</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Naam en adresgegevens</li>
                <li>E-mailadres en/of telefoonnummer (voor verzend- en trackingsmeldingen)</li>
                <li>Zending- en trackingsinformatie</li>
                <li>Gegevens over de gekozen vervoerder en afleveropties</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Doeleinden en rechtsgrondslag van de verwerking</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Wij verwerken persoonsgegevens uitsluitend voor de volgende doeleinden en op basis van de hieronder vermelde rechtsgronden:
              </p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Doel van verwerking</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Rechtsgrondslag (art. 6 AVG)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700">Het aanmaken en beheren van klantaccounts</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Uitvoering van een overeenkomst (6(1)(b))</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700">Het verwerken van zendingen en leveren van verzenddiensten</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Uitvoering van een overeenkomst (6(1)(b))</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700">Het versturen van track & trace notificaties aan ontvangers</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Gerechtvaardigd belang (6(1)(f))</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700">Het uitvoeren van betalingen en facturatie via Mollie</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Wettelijke verplichting & uitvoering overeenkomst (6(1)(c) / (b))</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700">Klantenservice en ondersteuning</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Gerechtvaardigd belang (6(1)(f))</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700">Het verbeteren en beveiligen van onze website en systemen</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Gerechtvaardigd belang (6(1)(f))</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700">Het voldoen aan wettelijke verplichtingen (bijv. belastingwetgeving)</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Wettelijke verplichting (6(1)(c))</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-gray-700 leading-relaxed mt-6">
                Wij gebruiken persoonsgegevens uitsluitend voor de doeleinden waarvoor ze zijn verkregen en bewaren ze niet langer dan noodzakelijk (zie paragraaf 8).
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Delen van persoonsgegevens met derden</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Wij verkopen geen persoonsgegevens aan derden en delen deze uitsluitend indien dat noodzakelijk is voor de uitvoering van onze dienstverlening of om te voldoen aan een wettelijke verplichting.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Wij delen gegevens enkel met:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Vervoerders:</strong> uitsluitend de gegevens die nodig zijn voor het uitvoeren van de zending (zoals naam, adres, e-mailadres en trackingsinformatie).</li>
                <li><strong>Betaaldienstverlener Mollie B.V.:</strong> voor het afhandelen van betalingen en facturatie.</li>
                <li><strong>IT- en hostingpartners:</strong> die het platform, e-mailverkeer of beveiligingssystemen ondersteunen.</li>
                <li><strong>Overheidsinstanties:</strong> indien wij daartoe wettelijk verplicht zijn (bijvoorbeeld politie of Belastingdienst).</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Met alle partijen die namens ons persoonsgegevens verwerken, sluiten wij een verwerkersovereenkomst die voldoet aan de eisen van de AVG. Deze partijen handelen uitsluitend in onze opdracht en volgens onze instructies.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Internationale doorgifte van gegevens</h2>
              <p className="text-gray-700 leading-relaxed">
                Wij streven ernaar alle persoonsgegevens binnen de Europese Economische Ruimte (EER) te verwerken. Indien het noodzakelijk is gegevens door te geven naar een partij buiten de EER, zorgen wij voor passende waarborgen zoals de EU-standaardcontractbepalingen of andere wettelijk toegestane mechanismen.
              </p>
            </section>

            {/* Section 7 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Beveiliging van persoonsgegevens</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sendwise neemt passende technische en organisatorische maatregelen om persoonsgegevens te beschermen tegen verlies, ongeoorloofde toegang, misbruik of wijziging. Deze maatregelen omvatten onder andere:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Versleutelde verbindingen (SSL/TLS)</li>
                <li>Beperkte toegangsrechten tot systemen</li>
                <li>Sterke authenticatieprocedures</li>
                <li>Periodieke beveiligingscontroles en updates</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Bewaartermijnen</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Wij bewaren persoonsgegevens niet langer dan noodzakelijk voor het doel waarvoor ze zijn verzameld, tenzij een langere bewaartermijn wettelijk verplicht is.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Concreet hanteren wij de volgende richtlijnen:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li><strong>Klantaccounts:</strong> zolang de klant actief is + maximaal 2 jaar na beëindiging</li>
                <li><strong>Zending- en factuurgegevens:</strong> 7 jaar (belastingwetgeving)</li>
                <li><strong>Contact- en supportinformatie:</strong> maximaal 2 jaar</li>
                <li><strong>Technische loggegevens:</strong> maximaal 12 maanden</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Na afloop van de bewaartermijn worden gegevens verwijderd of geanonimiseerd.
              </p>
            </section>

            {/* Section 9 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Rechten van betrokkenen</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                U heeft als betrokkene de volgende rechten op grond van de AVG:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Recht op inzage (artikel 15 AVG)</li>
                <li>Recht op rectificatie (artikel 16 AVG)</li>
                <li>Recht op verwijdering ('recht op vergetelheid') (artikel 17 AVG)</li>
                <li>Recht op beperking van verwerking (artikel 18 AVG)</li>
                <li>Recht op overdraagbaarheid van gegevens (artikel 20 AVG)</li>
                <li>Recht van bezwaar tegen verwerking (artikel 21 AVG)</li>
                <li>Recht om een eerder gegeven toestemming in te trekken</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                Een verzoek tot uitoefening van deze rechten kunt u indienen via <a href="mailto:info@sendwise.nl" className="text-[#0066ff] hover:underline">info@sendwise.nl</a>. Wij reageren binnen vier weken op uw verzoek.
              </p>
              <p className="text-gray-700 leading-relaxed">
                U heeft tevens het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens (<a href="https://www.autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-[#0066ff] hover:underline">www.autoriteitpersoonsgegevens.nl</a>).
              </p>
            </section>

            {/* Section 10 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Cookies en vergelijkbare technieken</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Onze website maakt gebruik van functionele en analytische cookies om het gebruiksgemak te verbeteren en onze diensten te optimaliseren.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Trackingcookies of marketingcookies worden alleen geplaatst met uw voorafgaande toestemming, conform de Telecommunicatiewet en de AVG. Meer informatie vindt u in onze Cookieverklaring.
              </p>
            </section>

            {/* Section 11 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Minderjarigen</h2>
              <p className="text-gray-700 leading-relaxed">
                Onze website en diensten zijn niet gericht op personen jonger dan 16 jaar. Wij verzamelen niet bewust gegevens van minderjarigen. Indien u van mening bent dat wij zonder ouderlijke toestemming gegevens hebben verzameld, kunt u contact opnemen via <a href="mailto:info@sendwise.nl" className="text-[#0066ff] hover:underline">info@sendwise.nl</a>. Wij zullen deze informatie dan verwijderen.
              </p>
            </section>

            {/* Section 12 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Wijzigingen in deze privacyverklaring</h2>
              <p className="text-gray-700 leading-relaxed">
                Sendwise behoudt zich het recht voor om deze privacyverklaring te wijzigen. Wijzigingen worden gepubliceerd op <a href="https://www.sendwise.nl/privacy" className="text-[#0066ff] hover:underline">www.sendwise.nl/privacy</a> met vermelding van de datum van inwerkingtreding. Wij adviseren u deze verklaring regelmatig te raadplegen zodat u op de hoogte blijft van de manier waarop wij persoonsgegevens beschermen.
              </p>
            </section>

            {/* Contact Section */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Voor vragen over deze privacyverklaring of de verwerking van persoonsgegevens kunt u contact opnemen via:
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

