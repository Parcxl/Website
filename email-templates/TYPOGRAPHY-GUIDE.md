# Sendwise Typography & Gradient Styling Guide

## CTA Sectie: "Klaar om wise te verzenden?"

### Volledige HTML & CSS Implementatie

---

## 📝 Lettertype Specificaties

### Font Family
```css
font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
```

**Poppins Font:**
- **Bron:** Google Fonts
- **Import URL:** `https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap`
- **Gebruikte weights:** 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Tekst Styling

**Titel: "Klaar om wise te verzenden?"**

```css
.cta-title {
    font-family: 'Poppins', sans-serif;
    font-size: 3.75rem;        /* 60px - desktop */
    font-weight: 700;          /* Bold */
    line-height: 1.1;
    color: #111827;            /* Donker grijs/zwart */
    margin-bottom: 1.5rem;     /* 24px */
}

/* Mobile responsive */
@media (max-width: 768px) {
    .cta-title {
        font-size: 2.25rem;    /* 36px - mobile */
    }
}
```

**Tailwind CSS Equivalenten:**
- `text-4xl md:text-6xl` → Font size (36px mobile, 60px desktop)
- `font-bold` → Font weight 700
- `mb-6` → Margin bottom 24px
- `text-gray-900` → Color #111827

---

## 🌈 Gradient op "wise"

### Gradient Specificaties

**CSS Gradient:**
```css
.text-gradient {
    background: linear-gradient(135deg, #0066ff 0%, #00a3ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent; /* Fallback */
}
```

### Gradient Details

**Type:** Linear Gradient  
**Richting:** 135 graden (diagonaal van linksboven naar rechtsonder)

**Kleur 1 (Start - 0%):**
- **Hex:** `#0066ff`
- **RGB:** `rgb(0, 102, 255)`
- **Naam:** Sendwise Blauw (Primary)
- **Positie:** Linksboven

**Kleur 2 (Eind - 100%):**
- **Hex:** `#00a3ff`
- **RGB:** `rgb(0, 163, 255)`
- **Naam:** Licht Blauw / Cyaan
- **Positie:** Rechtsonder

**Kleurverschil:**
- Start: Dieper, verzadigd blauw (#0066ff)
- Eind: Lichter, helderder blauw (#00a3ff)
- Effect: Van donker naar licht, van verzadigd naar levendig

---

## 📄 Volledige HTML Implementatie

### Complete CTA Section

```html
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        /* Text Gradient - Exact zoals op de website */
        .text-gradient {
            background: linear-gradient(135deg, #0066ff 0%, #00a3ff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
            display: inline;
        }

        /* CTA Title Styling */
        .cta-title {
            font-family: 'Poppins', sans-serif;
            font-size: 60px;
            font-weight: 700;
            line-height: 1.1;
            color: #111827;
            margin: 0 0 24px 0;
            text-align: center;
        }

        /* Subtitle */
        .cta-subtitle {
            font-family: 'Poppins', sans-serif;
            font-size: 20px;
            font-weight: 400;
            color: #4b5563;
            margin: 0 0 40px 0;
            text-align: center;
            max-width: 672px;
            margin-left: auto;
            margin-right: auto;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .cta-title {
                font-size: 36px;
            }
            .cta-subtitle {
                font-size: 18px;
            }
        }
    </style>
</head>
<body>
    <div style="padding: 60px 20px; text-align: center;">
        <h2 class="cta-title">
            Klaar om <span class="text-gradient">wise</span> te verzenden?
        </h2>
        <p class="cta-subtitle">
            Bespaar duizenden euro's per jaar met Sendwise
        </p>
    </div>
</body>
</html>
```

---

## 🎨 Gradient Breakdown

### Visuele Representatie

```
┌─────────────────────────────┐
│ #0066ff (0%)                │ ← Start: Donker verzadigd blauw
│   ↘                          │
│     ↘                        │ ← 135° hoek (diagonaal)
│       ↘                      │
│         ↘                    │
│           ↘ #00a3ff (100%)  │ ← Eind: Licht helder blauw
└─────────────────────────────┘
```

### Gradient Hoek Opties

**135deg** (Huidige):
```
Linksboven → Rechtsonder
╲
 ╲
  ╲
```

**Andere opties:**
- `90deg` → Van boven naar beneden
- `180deg` → Van links naar rechts
- `45deg` → Van linksonder naar rechtsboven

---

## 🔧 Aanpassingsmogelijkheden

### Gradient Varianten

**Optie 1 - Drie kleuren:**
```css
background: linear-gradient(135deg, 
    #0066ff 0%,      /* Sendwise blauw */
    #0084ff 50%,     /* Midden blauw */
    #00a3ff 100%     /* Licht blauw */
);
```

**Optie 2 - Levendiger:**
```css
background: linear-gradient(135deg, 
    #0066ff 0%,      /* Sendwise blauw */
    #00d4ff 100%     /* Helderder cyaan */
);
```

**Optie 3 - Subtiele variant:**
```css
background: linear-gradient(135deg, 
    #0066ff 0%, 
    #0077ff 100%     /* Iets lichter blauw */
);
```

---

## 📊 Kleuranalyse

### #0066ff (Start)
- **Hue:** 214° (Blauw)
- **Saturation:** 100%
- **Lightness:** 50%
- **Gebruik:** Primary brand color, headers, buttons

### #00a3ff (Eind)
- **Hue:** 199° (Cyaan-blauw)
- **Saturation:** 100%
- **Lightness:** 50%
- **Gebruik:** Gradient highlights, accenten

**Verschil:**
- Hue shift: 15° (van blauw naar cyaan)
- Saturation: Beide 100%
- Lightness: Beide 50%
- Effect: Subtiele shift naar helderder, energieker blauw

---

## 💡 Browser Compatibiliteit

### Text Gradient Support

**Volledig ondersteund:**
- ✅ Chrome/Edge (Chromium)
- ✅ Safari
- ✅ Firefox
- ✅ Opera

**Prefix vereist:**
```css
-webkit-background-clip: text;  /* Voor Safari en oude Chrome */
-webkit-text-fill-color: transparent;
background-clip: text;          /* Standaard */
```

---

## 📱 Responsive Breakpoints

| Schermgrootte | Font Size | Beschrijving |
|---------------|-----------|--------------|
| < 768px (Mobile) | 36px (2.25rem) | Klein scherm |
| ≥ 768px (Tablet) | 48px (3rem) | Medium scherm |
| ≥ 1024px (Desktop) | 60px (3.75rem) | Groot scherm |

---

## 🎯 Exacte Tailwind Classes (zoals op website)

```jsx
<h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
  Klaar om <span className="text-gradient">wise</span> te verzenden?
</h2>
```

**Breakdown:**
- `text-4xl` → 2.25rem / 36px (mobile)
- `md:text-6xl` → 3.75rem / 60px (desktop ≥768px)
- `font-bold` → font-weight: 700
- `mb-6` → margin-bottom: 1.5rem / 24px
- `text-gray-900` → color: #111827
- `text-gradient` → Custom gradient class (zie boven)

---

## 🖼️ Font Loading Best Practice

### Method 1: Google Fonts CDN (Snelst)
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Method 2: CSS Import
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
```

### Method 3: Preload (Beste performance)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet">
```

---

## ✨ Extra Styling Tips

### Shadow voor meer diepte
```css
.text-gradient {
    background: linear-gradient(135deg, #0066ff 0%, #00a3ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    filter: drop-shadow(0 2px 4px rgba(0, 102, 255, 0.2));
}
```

### Animatie optie
```css
@keyframes gradient-shift {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

.text-gradient-animated {
    background: linear-gradient(135deg, #0066ff 0%, #00a3ff 50%, #0066ff 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient-shift 3s ease infinite;
}
```

---

## 📋 Quick Copy-Paste

### Minimale Versie
```html
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');

.text-gradient {
    background: linear-gradient(135deg, #0066ff 0%, #00a3ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
</style>

<h2 style="font-family: 'Poppins', sans-serif; font-size: 60px; font-weight: 700; color: #111827;">
    Klaar om <span class="text-gradient">wise</span> te verzenden?
</h2>
```

---

**Laatst bijgewerkt:** 12 oktober 2025  
**Versie:** 1.0

