# Prompt voor ChatGPT / Claude / Nano Banana

## Doel
Maak een exacte recreatie van de CTA (Call-to-Action) sectie achtergrond van de Sendwise website.

---

## Volledige Prompt

```
Ik wil dat je een prachtige, zachte achtergrond maakt voor een website CTA sectie met de volgende specificaties:

BASISACHTERGROND:
- Start met een lichte gradient achtergrond
- Kleuren: van lichtblauw (#eff6ff met 80% opacity) via licht indigo (#e0e7ff met 60% opacity) naar licht paars (#faf5ff met 70% opacity)
- Gradient richting: van linksboven naar rechtsonder (diagonal)

BEWEGENDE BLOBS (4 stuks):
Maak 4 grote, zachte, bewegende kleurblobs die langzaam zweven:

BLOB 1:
- Positie: Linksboven (10% van boven, 10% van links)
- Grootte: 384px diameter (96 * 4)
- Kleuren: gradient van #0066ff met 20% opacity naar lichtblauw #60a5fa met 20% opacity
- Gradient richting: linksboven naar rechtsonder
- Blur: zeer sterk (3xl blur)
- Animatie: langzaam zwevende beweging, 25 seconden cyclus
- Vorm: perfect rond (border-radius: 50%)

BLOB 2:
- Positie: Rechtsboven (33% van boven, 10% van rechts)
- Grootte: 320px diameter (80 * 4)
- Kleuren: gradient van paars #c084fc met 15% opacity naar roze #f9a8d4 met 15% opacity
- Gradient richting: linksboven naar rechtsonder
- Blur: zeer sterk (3xl blur)
- Animatie: langzaam zwevende beweging, 30 seconden cyclus, 2 seconden vertraging
- Vorm: perfect rond

BLOB 3:
- Positie: Linksonder (20% van onder, 25% van links)
- Grootte: 288px diameter (72 * 4)
- Kleuren: gradient van indigo #818cf8 met 20% opacity naar cyaan #67e8f9 met 15% opacity
- Gradient richting: linksboven naar rechtsonder
- Blur: zeer sterk (3xl blur)
- Animatie: langzaam zwevende beweging, 28 seconden cyclus, 4 seconden vertraging
- Vorm: perfect rond

BLOB 4:
- Positie: Rechtsmidden (50% van boven, 33% van rechts)
- Grootte: 256px diameter (64 * 4)
- Kleuren: gradient van roze #f9a8d4 met 15% opacity naar paars #a78bfa met 15% opacity
- Gradient richting: linksboven naar rechtsonder
- Blur: zeer sterk (3xl blur)
- Animatie: langzaam zwevende beweging, 22 seconden cyclus, 1 seconde vertraging
- Vorm: perfect rond

ZWEVENDE ANIMATIE:
De blobs moeten subtiel bewegen in een zwevend patroon:
- Horizontaal: -30px tot +30px
- Verticaal: -30px tot +30px
- Rotatie: -5 tot +5 graden
- Smooth ease-in-out timing
- Infinite loop

BACKDROP BLUR OVERLAY:
Voeg een extra laag toe over alles heen:
- Positie: Over de hele sectie
- Effect: backdrop-blur van 3px
- Transparant (geen achtergrondkleur)
- Pointer-events: none (geen interactie)

LAYER STRUCTUUR (van achter naar voor):
1. Basis gradient achtergrond
2. 4 bewegende blobs
3. Backdrop blur overlay (3px)
4. Content (tekst, buttons, etc.) - niet onderdeel van achtergrond

BELANGRIJKE DETAILS:
- Alle blobs moeten ACHTER de content zijn (z-index lager dan content)
- Pointer-events: none op alle decoratieve elementen
- Overflow: hidden op de sectie container
- Positie: relative op de sectie container
- De animaties moeten oneindig doorlopen
- Elke blob heeft een andere animatie timing voor natuurlijk effect
- Kleuren moeten zeer subtiel zijn (lage opacity) voor een zachte uitstraling

GEWENST RESULTAAT:
Een zachte, dromerige achtergrond met subtiele beweging die niet afleidt van de content maar wel een premium, moderne uitstraling geeft. De beweging moet bijna niet merkbaar zijn maar wel aanwezig.

EXTRA EISEN:
- Responsive design (werkt op mobile en desktop)
- Smooth performance (gebruik CSS transforms voor hardware acceleration)
- Geen flikkering of rare sprongen
- Zachte, harmonieuze kleuren
```

---

## Voor Nano Banana Specifiek

Als je Nano Banana gebruikt voor het genereren van een afbeelding:

```
PROMPT:
Maak een zachte, moderne website achtergrond met de volgende elementen:
- Basis: zeer licht blauw-indigo-paars gradient (bijna wit)
- 4 grote, zachte, ronde kleurblobs:
  1. Lichtblauw blob linksboven (384px)
  2. Roze-paars blob rechtsboven (320px)
  3. Indigo-cyaan blob linksonder (288px)
  4. Roze-paars blob rechtsmidden (256px)
- Alle blobs hebben zeer sterke blur (Gaussian blur 60-80px)
- Zeer lage opacity (15-20%) voor subtiel effect
- Zachte, dromerige uitstraling
- Minimalistische, premium design
- Resolutie: 1920x1080px
- Formaat: PNG met transparantie

STIJL REFERENTIES:
- Modern SaaS design
- Apple-achtige minimalisme
- Glassmorphism esthetiek
- Zachte pastel kleuren
- Premium tech startup vibe

NIET GEWENST:
- Harde randen
- Felle kleuren
- Scherpe contrasten
- Complexe patronen
- Drukke texturen
```

---

## CSS Code Referentie

Voor de developer die dit wil implementeren, hier is de exacte CSS/HTML structuur:

```html
<section class="py-32 relative overflow-hidden">
  <!-- Light gradient background -->
  <div class="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/70"></div>
  
  <!-- Moving background blobs -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <!-- Blob 1 -->
    <div class="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-[#0066ff]/20 to-blue-400/20 rounded-full blur-3xl animate-float" style="animation-duration: 25s;"></div>
    
    <!-- Blob 2 -->
    <div class="absolute top-1/3 right-10 w-80 h-80 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-float" style="animation-duration: 30s; animation-delay: 2s;"></div>
    
    <!-- Blob 3 -->
    <div class="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-br from-indigo-400/20 to-cyan-400/15 rounded-full blur-3xl animate-float" style="animation-duration: 28s; animation-delay: 4s;"></div>
    
    <!-- Blob 4 -->
    <div class="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-pink-400/15 to-purple-500/15 rounded-full blur-3xl animate-float" style="animation-duration: 22s; animation-delay: 1s;"></div>
  </div>

  <!-- Backdrop blur overlay -->
  <div class="absolute inset-0 backdrop-blur-[3px] pointer-events-none"></div>

  <!-- Content hier (z-index hoger dan achtergrond) -->
  <div class="relative z-10">
    <!-- Je content -->
  </div>
</section>
```

```css
/* Float Animation */
@keyframes float {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(30px, -30px) rotate(3deg);
  }
  66% {
    transform: translate(-20px, 20px) rotate(-3deg);
  }
}

.animate-float {
  animation: float 25s ease-in-out infinite;
}
```

---

## Kleuren Specificatie

Voor exacte kleurweergave:

| Element | Base Color | Opacity | Gradient End | Opacity |
|---------|------------|---------|--------------|---------|
| Basis BG Start | `#eff6ff` | 80% | - | - |
| Basis BG Mid | `#e0e7ff` | 60% | - | - |
| Basis BG End | `#faf5ff` | 70% | - | - |
| Blob 1 Start | `#0066ff` | 20% | `#60a5fa` | 20% |
| Blob 2 Start | `#c084fc` | 15% | `#f9a8d4` | 15% |
| Blob 3 Start | `#818cf8` | 20% | `#67e8f9` | 15% |
| Blob 4 Start | `#f9a8d4` | 15% | `#a78bfa` | 15% |

---

## Tips voor Beste Resultaat

1. **Voor AI Image Generation (Nano Banana, Midjourney, DALL-E):**
   - Specificeer "soft focus", "dreamy", "minimal"
   - Vraag om "gaussian blur on colored circles"
   - Vermeld "low opacity overlays"
   - Refereer naar "glassmorphism design trend"

2. **Voor Code Implementation:**
   - Gebruik CSS blur filters (niet image blur)
   - Hardware acceleratie met `transform: translate3d()`
   - `will-change: transform` voor smooth animatie
   - Absolute positioning voor alle decoratieve elementen

3. **Performance:**
   - Gebruik CSS animaties (niet JavaScript)
   - Pointer-events: none op alle decoratieve lagen
   - Backdrop-filter alleen waar nodig
   - Reduceer blur op mobile voor betere performance

---

## Verificatie Checklist

✅ Zachte, subtiele kleuren (geen felle tinten)  
✅ Zeer sterke blur op alle blobs (bijna niet meer als cirkels herkenbaar)  
✅ Beweging is bijna onmerkbaar maar wel aanwezig  
✅ Blobs overlappen elkaar gedeeltelijk  
✅ Verschillende groottes creëren depth  
✅ Backdrop blur geeft glassmorphism effect  
✅ Basis gradient is zeer licht (bijna wit)  
✅ Alle bewegingen zijn smooth en endless  

---

## Voorbeeldvisualisatie

```
[Zeer licht blauw-paars gradient achtergrond]
  ↓
[4 grote, wazig gekleurde cirkels die langzaam bewegen]
  ↓
[Subtiele 3px backdrop blur laag]
  ↓
[Content (tekst, buttons)]
```

Het eindresultaat moet eruitzien als een zachte, dromerige wolkenachtige achtergrond met subtiele kleuraccenten die heel langzaam bewegen.

