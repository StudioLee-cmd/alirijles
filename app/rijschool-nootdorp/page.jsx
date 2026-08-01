import LocatiePagina from '@/components/LocatiePagina';

export const metadata = {
  title: 'Rijschool Nootdorp | rijles in een automaat',
  description:
    'Rijles in een automaat in Nootdorp. Ophalen kan bij de metrohalte. Altijd dezelfde instructeur, al sinds 2012.',
  alternates: { canonical: '/rijschool-nootdorp/' },
};

export default function Nootdorp() {
  return (
    <LocatiePagina
      plaats="Nootdorp"
      ophaalzin="Ophalen kan bij de metrohalte."
      ophaalAlinea={[
        'Ik haal je op bij de metrohalte in Nootdorp, dus je hoeft niet eerst naar Zoetermeer te komen. Na je les zet ik je daar weer af. Komt een ander punt je beter uit, dan hoor ik dat graag.',
      ]}
      buren={[
        { href: '/rijschool-leidschenveen/', label: 'Leidschenveen' },
        { href: '/automaat-rijles-den-haag/', label: 'Den Haag' },
      ]}
    />
  );
}
