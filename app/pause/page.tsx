import type { Metadata } from 'next';
import Link from 'next/link';

const PAUSE_TITRE = 'Boutique temporairement fermée';
const PAUSE_TEXTE =
  'La vente en ligne est suspendue le temps de finaliser nos démarches administratives. Aucune commande ne peut être passée pendant cette période.';

// Le layout racine annonce les punchs avec le visuel produit : on surcharge
// openGraph/twitter/keywords, sinon un partage du lien afficherait une accroche
// commerciale alors que la page annonce une fermeture. Le noindex ne protege
// que du referencement, pas des apercus de partage.
export const metadata: Metadata = {
  title: PAUSE_TITRE,
  description: PAUSE_TEXTE,
  keywords: [],
  robots: { index: false, follow: false },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Bô Kay Mwen',
    title: PAUSE_TITRE,
    description: PAUSE_TEXTE,
    images: [],
  },
  twitter: {
    card: 'summary',
    title: PAUSE_TITRE,
    description: PAUSE_TEXTE,
    images: [],
  },
};

export default function PausePage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '48px 24px',
        gap: '20px',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-cinzel-decorative), serif',
          fontSize: '13px',
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          opacity: 0.7,
          margin: 0,
        }}
      >
        Bô Kay Mwen
      </p>

      <h1
        style={{
          fontFamily: 'var(--font-cinzel), serif',
          fontSize: 'clamp(28px, 5vw, 44px)',
          lineHeight: 1.15,
          maxWidth: '18ch',
          margin: 0,
        }}
      >
        Notre boutique est temporairement fermée
      </h1>

      <p style={{ maxWidth: '52ch', lineHeight: 1.7, opacity: 0.85, margin: 0 }}>
        Nous suspendons la vente en ligne le temps de finaliser nos démarches
        administratives. Aucune commande ne peut être passée pendant cette période.
      </p>

      <p style={{ maxWidth: '52ch', lineHeight: 1.7, opacity: 0.85, margin: 0 }}>
        Vous aviez une commande en cours ou une question&nbsp;? Écrivez-nous, nous
        répondons sous 48&nbsp;h.
      </p>

      <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '8px' }}>
        <Link
          href="/contact"
          style={{
            border: '1px solid currentColor',
            padding: '12px 26px',
            textDecoration: 'none',
            color: 'inherit',
            fontSize: '14px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          Nous contacter
        </Link>
        <Link
          href="/newsletter"
          style={{
            border: '1px solid currentColor',
            opacity: 0.65,
            padding: '12px 26px',
            textDecoration: 'none',
            color: 'inherit',
            fontSize: '14px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          Être prévenu de la réouverture
        </Link>
      </div>

      <p style={{ fontSize: '12px', opacity: 0.5, marginTop: '28px', maxWidth: '46ch', lineHeight: 1.6 }}>
        L&apos;abus d&apos;alcool est dangereux pour la santé. À consommer avec modération.
      </p>
    </div>
  );
}
