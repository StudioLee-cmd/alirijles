# alirijles.nl — Autorijschool Zoetermeer

De website van Ali (rijschool, Zoetermeer). Next.js 14 App Router, geen CSS-framework: de tokens
komen letterlijk uit de look die de klant zélf koos.

| | |
|---|---|
| **klant** | `ali-rijschool` (StudioLee) |
| **look** | `ali-warm-persoonlijk` — door Ali gekozen op 29-07-2026 18:59:40, stap 10 van de intake-wizard |
| **bron van de copy** | `clients/ali-rijschool/site-copy.md` (15 pagina's) |
| **bron van de structuur** | `clients/ali-rijschool/site-structuur.md` |
| **bron van de tokens** | `clients/ali-rijschool/design.md` |
| **bron van élk feit** | `clients/ali-rijschool/kennisbank.md` — Ali's eigen intake-antwoorden |

**Nul verzonnen feiten.** Elke claim op deze site is te herleiden naar een regel in de kennisbank.
Wat daar niet in staat, staat hier niet — ook niet als het mooi zou klinken.

## Wat er bewust nog niet in zit

Alles hieronder wacht op een BESLISSING of op de klant, niet op werk. De schakelaars staan in
`lib/site.js` → `FLAGS`; aanzetten is één regel.

| flag | wacht op |
|---|---|
| `prijzen` | Ali's prijs-PDF. Tot dan staat er nergens een bedrag, geen "vanaf" en geen "binnenkort". De enige uitzondering is zijn eigen totaal-indicatie (~€3.050 / gemiddeld 45 lessen), expliciet als indicatie gebracht. |
| `blog` | de managed-upgrade — SEO-content staat op `gated` (`tool-profiel.md`). |
| `chatbot` | Ali's bevestiging van de AI-grenzen. De HighLevel-widget komt rechtsonder, ná cookie-consent. |
| `lansingerlandKernen` | Ali's ja op de vraag of Berkel en Rodenrijs + Bergschenhoek binnen zijn werkgebied vallen. Tot dan noemt de Lansingerland-pagina alleen de gemeente. |

Ook bewust afwezig: **nieuwsbrief** en **klant-reactivatie**. Die bestaan niet in deze UI en horen
er ook nooit in (`tool-profiel.md`).

Nog te schrijven vóór livegang, buiten deze repo: `/privacy/` en `/algemene-voorwaarden/`
(compliance-lane) — geen zin ervan is uit de kennisbank af te leiden.

## De aanvraag-route

`POST /api/proefles` landt op twee plekken:

1. **Supabase** `public.client_site_leads` — de leesbare ledger.
2. **Een mail via Brevo** naar `LEAD_MAIL_TO`.

De aanvraag geldt als geslaagd zodra één van de twee het haalt; een bezoeker mag nooit een fout
zien voor een lead die wél is vastgelegd. Het formulier **plant niets in** en zegt nooit een
tijdstip toe — Ali's eigen voorwaarde. Het voorkeursmoment wordt wél al uitgevraagd, zodat een
agenda-koppeling later inplugbaar is in plaats van een verbouwing.

## Env-vars (Vercel)

| var | waarvoor |
|---|---|
| `SUPABASE_URL` · `SUPABASE_SERVICE_KEY` | de lead-ledger |
| `BREVO_API_KEY` | de meldmail |
| `LEAD_MAIL_TO` | ontvanger van de meldmail — StudioLee tot livegang, daarna Ali |
| `LEAD_MAIL_FROM` | geverifieerde Brevo-afzender |
| `NEXT_PUBLIC_SITE_URL` | canonical + sitemap; wordt `https://alirijles.nl` op de livegang-dag |
| `NEXT_PUBLIC_INDEXEERBAAR` | `1` op de livegang-dag; tot dan staat de preview op `noindex` |

## Livegang (1 september 2026 — Ali's eigen datum)

1. `NEXT_PUBLIC_SITE_URL=https://alirijles.nl` en `NEXT_PUBLIC_INDEXEERBAAR=1`
2. `LEAD_MAIL_TO` op Ali's adres
3. domein koppelen (staat nu nog geparkeerd bij Hostinger), DNS omzetten
4. chatbot-widget aanzetten (`FLAGS.chatbot`) ná cookie-consent
5. `/privacy/` + `/algemene-voorwaarden/` publiceren

## Lokaal

```bash
npm install
npm run dev
```
