import { column, defineDb, defineTable } from 'astro:db';

const Kunde = defineTable({
  columns: {
    code: column.number(),
    name: column.text(),
    adresse: column.text(),
  },
});

const Bestellung = defineTable({
  columns: {
    kundencode: column.number(),
    bestellung: column.text(),
    datum: column.date(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Kunde, Bestellung },
});
