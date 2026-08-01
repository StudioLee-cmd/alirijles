import Link from 'next/link';
import LocatiePagina from '@/components/LocatiePagina';
import { FLAGS } from '@/lib/site';

export const metadata = {
  title: 'Rijschool Lansingerland | rijles in een automaat',
  description:
    'Rijles in een automaat in Lansingerland, met ophalen bij station Lansingerland. Altijd dezelfde instructeur, sinds 2012.',
  alternates: { canonical: '/rijschool-lansingerland/' },
};

/**
 * ⚠️ Ali noemde in zijn vragenlijst de GEMEENTE Lansingerland, niet de kernen Berkel en Rodenrijs
 * en Bergschenhoek. kennisbank.md §B: "Daarbuiten: niet toezeggen, eerst Ali bevestigen".
 * Deze pagina staat daarom in de veilige variant: alleen Lansingerland. Zodra Ali bevestigt
 * (site-structuur.md §8 vraag 3, hangt aan todo ali-kenniskaart-controle-bevestiging) zet je
 * FLAGS.lansingerlandKernen op true en komen de twee kernen erbij — 240 zoekopdrachten/mnd.
 *
 * Kannibalisatie-regel: "Bleiswijk" staat NIET in de title, H1 of meta van deze pagina; die
 * plaats heeft z'n eigen pagina (site-structuur.md §9 risicopaar 4).
 */
export default function Lansingerland() {
  const alineas = FLAGS.lansingerlandKernen
    ? [
        <>
          Ik haal je op bij <strong>station Lansingerland</strong>. Kom je uit{' '}
          <strong>Berkel en Rodenrijs</strong> of <strong>Bergschenhoek</strong>, dan is dat vaak het
          handigste punt. Na je les zet ik je daar weer af.
        </>,
      ]
    : [
        <>
          Ik haal je op bij <strong>station Lansingerland</strong>. Na je les zet ik je daar weer af.
          Komt een ander punt je beter uit, dan hoor ik dat graag.
        </>,
      ];

  alineas.push(
    <>
      Woon je in Bleiswijk? Daar kom ik ook.{' '}
      <Link className="inline" href="/rijschool-bleiswijk/">
        Bekijk de pagina voor Bleiswijk
      </Link>
      .
    </>
  );

  return (
    <LocatiePagina
      plaats="Lansingerland"
      ophaalzin="Ophalen kan bij station Lansingerland."
      ophaalAlinea={alineas}
      buren={[
        { href: '/rijschool-bleiswijk/', label: 'Bleiswijk' },
        { href: '/', label: 'Zoetermeer' },
      ]}
    />
  );
}
