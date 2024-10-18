import { column, defineDb, defineTable } from 'astro:db';

const Kunde = defineTable({
  columns: {
    code: column.number({ primaryKey: true }),
    name: column.text(),
    adresse: column.text(),
    anlageAm: column.date(),
  },
});

const Bestellung = defineTable({
  columns: {
    nummer: column.number({ primaryKey: true }),
    kundencode: column.number({ references: () => Kunde.columns.code }),
    bestellung: column.text(),
    datum: column.date(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Kunde, Bestellung },
});
