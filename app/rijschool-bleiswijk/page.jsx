import LocatiePagina from '@/components/LocatiePagina';

export const metadata = {
  title: 'Rijschool Bleiswijk | rijles in een automaat',
  description:
    'Rijles in een automaat in Bleiswijk. Altijd dezelfde instructeur, al sinds 2012. Vraag een proefles aan.',
  alternates: { canonical: '/rijschool-bleiswijk/' },
};

/**
 * ⚠️ Zelfde notitie als Leidschenveen: Ali gaf voor Bleiswijk geen herkenningspunt
 * (kennisbank.md §G) — site-structuur.md §8 vraag 2.
 * Kannibalisatie: DEZE pagina staat op `rijschool bleiswijk`, de Lansingerland-pagina niet.
 */
export default function Bleiswijk() {
  return (
    <LocatiePagina
      plaats="Bleiswijk"
      ophaalzin="Je wordt opgehaald op een plek die jou uitkomt."
      ophaalAlinea={[
        'Ik kom in Bleiswijk en haal je op waar het jou uitkomt. Na je les zet ik je daar weer af. Zeg bij je aanvraag even waar je opgehaald wilt worden, dan spreken we dat af.',
      ]}
      buren={[
        { href: '/rijschool-lansingerland/', label: 'Lansingerland' },
        { href: '/', label: 'Zoetermeer' },
      ]}
    />
  );
}
