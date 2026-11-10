// Fails while any temporary client/advisor name in src/content/placeholders.json is unconfirmed.
import fs from 'fs';
const data = JSON.parse(fs.readFileSync(new URL('../src/content/placeholders.json', import.meta.url), 'utf8'));
const pending = [];
for (const [group, v] of Object.entries(data)) {
  if (group.startsWith('_')) continue;
  for (const [k, item] of Object.entries(v)) if (!item.confirmed) pending.push(`${group}.${k}: ${item.name}`);
}
if (pending.length) {
  console.error(`\n✖ ${pending.length} placeholder names are not confirmed for publication:\n  ` + pending.join('\n  ') +
    '\n\nReplace them with real clients/advisors (or set confirmed: true) in src/content/placeholders.json.\n');
  process.exit(1);
}
console.log('✓ All client and advisor names are confirmed.');
