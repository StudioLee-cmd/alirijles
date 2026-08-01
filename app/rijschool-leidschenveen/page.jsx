import LocatiePagina from '@/components/LocatiePagina';

export const metadata = {
  title: 'Rijschool Leidschenveen | rijles in een automaat',
  description:
    'Rijles in een automaat in Leidschenveen. Altijd dezelfde instructeur, al sinds 2012. Vraag een proefles aan.',
  alternates: { canonical: '/rijschool-leidschenveen/' },
};

/**
 * ⚠️ Deze pagina mist z'n lokale anker: Ali gaf herkenningspunten voor Zoetermeer, Nootdorp,
 * Lansingerland en Den Haag, maar niet voor Leidschenveen (kennisbank.md §G). Eén zin van hem
 * ("waar haal je in Leidschenveen meestal op?") maakt 'm uniek — site-structuur.md §8 vraag 2,
 * aangehangen aan todo ali-kenniskaart-controle-bevestiging.
 */
export default function Leidschenveen() {
  return (
    <LocatiePagina
      plaats="Leidschenveen"
      ophaalzin="Je wordt opgehaald op een plek die jou uitkomt."
      ophaalAlinea={[
        'Ik kom in Leidschenveen en haal je op waar het jou uitkomt. Na je les zet ik je daar weer af. Zeg bij je aanvraag even waar je opgehaald wilt worden, dan spreken we dat af.',
      ]}
      buren={[
        { href: '/rijschool-nootdorp/', label: 'Nootdorp' },
        { href: '/automaat-rijles-den-haag/', label: 'Den Haag' },
      ]}
    />
  );
}
