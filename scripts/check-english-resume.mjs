import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';

// Check the built HTML, not just Markdown: a successful build must contain the resume.
const source = readFileSync('resume/english.md', 'utf8');
const html = readFileSync('.vitepress/dist/resume/english.html', 'utf8');
const main = html.match(/<main\b[\s\S]*?<\/main>/i)?.[0];
assert(main, 'English resume must be present in server-rendered HTML.');
const text = main.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
for (const required of [
  'DS GLOBAL', 'Future Platform', 'DoubleDown Interactive', 'AdMax / FSN',
  'Wonder Card', 'Dice Master', 'Super High Limit Game',
  'Inbox Advertising Refactoring', 'Internal Deeplink', 'Marketing Email Automation',
  'Player Level', 'Coopang', 'Hansung University', 'Multimedia Engineering',
  'Data Structures', 'Operating Systems', 'C Programming',
  'Aug 2026', 'Jul 2026', 'Mar 2026',
  'Now directly developing and fixing Spring Batch jobs',
  'Development and validation remain ongoing.',
]) {
  assert(text.includes(required), `Missing rendered resume content: ${required}`);
}
const projects = [
  ['Batch Development, Platform Improvements & Policy Validation', 'Aug 2026 – Present'],
  ['Commerce Product Domain Analysis & Migration Criteria', 'Jul 2026'],
  ['Legacy Image Analysis, Migration Scripts & Delivery Policy', 'Jul 2026'],
  ['Event Platform Development', 'Mar 2026 – Apr 2026'],
];
let last = -1;
for (const [title, period] of projects) {
  const marker = `#### ${title}\n**${period}**`;
  const at = source.indexOf(marker);
  assert(at > last, `DS project missing, reordered, or period changed: ${title}`);
  last = at;
}
assert(source.includes('engineers responsible for migration execution'),
  'Retain the distinction between migration criteria and migration execution.');
assert(!/<ClientOnly\b|\bfetch\s*\(|\binnerHTML\b|\bouterHTML\b/.test(source),
  'Do not load resume content or images by client-side DOM composition.');
for (const url of [
  'https://www.dolfarmer.com', 'https://www.foodsafetykorea.go.kr/main.do',
  'https://www.doubledowninteractive.com', 'https://www.ad-max.co.kr',
  'https://www.notion.so/29a47d0245aa804783dbca0ff82ebed3',
  'https://github.com/dev-wonny/coopang/wiki',
]) assert(main.includes(url), `Missing company or evidence link: ${url}`);
assert(!source.includes('https://www.fuples.co.kr') && !main.includes('https://www.fuples.co.kr'),
  'Future Platform company URL was removed at user request; do not restore it.');

// Deeplink TTL belongs to application-server Local Cache entries, not DynamoDB items.
const deeplink = source.match(/#### Internal Deeplink & Short URL Platform\n([\s\S]*?)(?=\n#### |\n### |\n## |$)/)?.[1];
assert(deeplink, 'Retain the Internal Deeplink project.');
const deeplinkText = deeplink.replace(/\*\*/g, '');
for (const required of [
  'DynamoDB for persistence',
  'server-side local caching with TTL-based expiration',
  'After expiration, the next request reloaded the deeplink from DynamoDB and refreshed the cache.',
  'DynamoDB access by approximately 30%',
]) {
  assert(deeplinkText.includes(required) && text.includes(required),
    `Missing confirmed Deeplink caching behavior: ${required}`);
}
assert(!/DynamoDB\s+TTL|TTL[- ]based\s+(?:link\s+)?lifecycle/i.test(deeplinkText),
  'Do not describe Local Cache expiration as DynamoDB TTL or link lifecycle management.');

// These hashes identify image bytes that were decoded and visually reviewed.
const assets = [
  ['event-verified.webp', '6083eee9862725cd8e390b7ad482d85266c5bafc'],
  ['msa.webp', '3690ff47b070826da1eb1a6bf7770d1134716e52'],
];
for (const [name, expected] of assets) {
  const data = readFileSync(`.vitepress/dist/resume/assets/${name}`);
  assert.equal(data.toString('ascii', 0, 4), 'RIFF');
  assert.equal(data.toString('ascii', 8, 12), 'WEBP');
  assert.equal(data.readUInt32LE(4) + 8, data.length, `Truncated image: ${name}`);
  const hash = createHash('sha1').update(`blob ${data.length}\0`).update(data).digest('hex');
  assert.equal(hash, expected, `Image differs from visually verified asset: ${name}`);
  assert(main.includes(`/engineering-notes/resume/assets/${name}`),
    `Missing or incorrect deployed image URL: ${name}`);
}
console.log('English resume checks passed: static content, dates, links, coursework, image integrity, and Deeplink cache behavior.');
