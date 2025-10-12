# Sendwise Email Templates

## Accountaanvraag Bevestigingsmail

### Bestand
`accountaanvraag-bevestiging.html`

### Beschrijving
Professionele HTML email template voor bevestiging van accountaanvragen via de Sendwise website.

---

## Placeholders

De volgende placeholders moeten worden vervangen met daadwerkelijke data uit de accountaanvraag:

| Placeholder | Beschrijving | Voorbeeld |
|------------|--------------|-----------|
| `{{voornaam}}` | Voornaam van de contactpersoon | Jan |
| `{{bedrijfsnaam}}` | Naam van het bedrijf | Voorbeeld Webshop B.V. |
| `{{kvk}}` | KvK-nummer | 12345678 |
| `{{website}}` | Website URL | https://voorbeeld-webshop.nl |
| `{{email}}` | E-mailadres | jan@voorbeeld.nl |
| `{{telefoon}}` | Telefoonnummer | +31 6 12345678 |

---

## Implementatie Voorbeeld (Node.js)

```javascript
const fs = require('fs');

function generateAccountConfirmationEmail(data) {
  // Lees de template
  let template = fs.readFileSync('accountaanvraag-bevestiging.html', 'utf8');
  
  // Vervang placeholders
  template = template.replace(/\{\{voornaam\}\}/g, data.voornaam || '');
  template = template.replace(/\{\{bedrijfsnaam\}\}/g, data.bedrijfsnaam || '');
  template = template.replace(/\{\{kvk\}\}/g, data.kvk || '');
  template = template.replace(/\{\{website\}\}/g, data.website || '');
  template = template.replace(/\{\{email\}\}/g, data.email || '');
  template = template.replace(/\{\{telefoon\}\}/g, data.telefoon || '');
  
  return template;
}

// Gebruik voorbeeld
const emailData = {
  voornaam: 'Jan',
  bedrijfsnaam: 'Voorbeeld Webshop B.V.',
  kvk: '12345678',
  website: 'https://voorbeeld-webshop.nl',
  email: 'jan@voorbeeld.nl',
  telefoon: '+31 6 12345678'
};

const htmlEmail = generateAccountConfirmationEmail(emailData);

// Verstuur email met je email provider (bijv. Nodemailer, SendGrid, etc.)
```

---

## Email Structuur

### Header
- Sendwise logo (wit op blauwe gradient)
- Professionele uitstraling

### Content Secties

**1. Welkomstbericht**
- Persoonlijke begroeting met voornaam
- Vriendelijke welkomsttekst

**2. Gegevens Overzicht**
- Blauwe info box met alle ingevoerde gegevens
- Duidelijk overzicht voor verificatie

**3. Vervolgstappen**
- 3 genummerde stappen
- Duidelijke verwachtingen
- Tijdsindicatie (24 uur)

**4. USP's**
- Belangrijkste voordelen van Sendwise
- Visuele bullets

**5. Contact Informatie**
- Email en telefoon
- Helpcenter link

### Footer
- Bedrijfsgegevens (adres, KVK, BTW)
- Links naar Privacy Policy en Algemene Voorwaarden
- Copyright

---

## Email Client Compatibiliteit

Deze template is getest en werkt in:
- ✅ Gmail (Desktop & Mobile)
- ✅ Outlook (Desktop & Web)
- ✅ Apple Mail (iOS & macOS)
- ✅ Yahoo Mail
- ✅ Thunderbird

### Best Practices Toegepast
- Inline CSS (sommige email clients strippen `<style>` tags)
- Table-based layout (meest compatibel)
- Web-safe fonts met fallbacks
- Maximum breedte 600px (email standaard)
- Responsive design voor mobile

---

## Kleuren Gebruikt

| Kleur | Hex Code | Gebruik |
|-------|----------|---------|
| Sendwise Blauw | `#0066ff` | Primary color, links, buttons |
| Donker Blauw | `#0052cc` | Gradients |
| Grijs Tekst | `#4b5563` | Body text |
| Donker Grijs | `#111827` | Headings |
| Licht Blauw | `#eff6ff` | Background accents |
| Footer Bg | `#1f2937` | Dark footer background |

---

## Aanpassingen

Als je aanpassingen wilt maken:

1. **Logo wijzigen**: Pas de `src` aan in de header img tag
2. **Kleuren aanpassen**: Wijzig de hex codes in de style sectie
3. **Tekst aanpassen**: Wijzig de content in de HTML
4. **Extra velden**: Voeg nieuwe placeholders toe (bijv. `{{wachtwoord}}`)

---

## Testen

Test de email altijd in verschillende clients voordat je live gaat:

1. Verstuur testmails naar je eigen Gmail, Outlook, etc.
2. Check op mobile en desktop
3. Verifieer dat alle placeholders correct vervangen zijn
4. Check dat links werken
5. Verifieer dat het logo laadt

---

## Support

Voor vragen over deze template:
- Email: info@sendwise.nl
- Telefoon: +31 6 19156123

**Laatste update:** 12 oktober 2025

