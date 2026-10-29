// Everyone's availability. One private blob per person at avail/<slug>.json
// holding {name, days}, so two friends saving at once never clobber each other.
import { put, list, get } from '@vercel/blob';

const PREFIX = 'avail/';
// Only 7 to 24 December 2026 can be picked.
const DAY = /^2026-12-(0[7-9]|1\d|2[0-4])$/;
const slug = n => n.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const json = (body, status = 200) =>
  Response.json(body, { status, headers: { 'cache-control': 'no-store' } });

export async function GET() {
  const blobs = [];
  let cursor;
  do {
    const page = await list({ prefix: PREFIX, cursor });
    blobs.push(...page.blobs);
    cursor = page.hasMore ? page.cursor : undefined;
  } while (cursor);

  const people = {};
  await Promise.all(blobs.map(async b => {
    const r = await get(b.pathname, { access: 'private', useCache: false });
    if (!r || r.statusCode !== 200) return;
    const doc = JSON.parse(await new Response(r.stream).text());
    people[b.pathname.slice(PREFIX.length, -'.json'.length)] = doc;
  }));
  return json({ people });
}

export async function POST(request) {
  let body;
  try { body = await request.json(); } catch { return json({ error: 'Bad JSON' }, 400); }
  const name = typeof body?.name === 'string' ? body.name.trim().slice(0, 30) : '';
  const s = slug(name);
  if (!s) return json({ error: 'Name required' }, 400);
  if (!Array.isArray(body.days) || body.days.length > 18 || !body.days.every(d => DAY.test(d)))
    return json({ error: 'Days must be between 7 and 24 Dec 2026' }, 400);

  const doc = { name, days: [...new Set(body.days)].sort() };
  await put(`${PREFIX}${s}.json`, JSON.stringify(doc), {
    access: 'private', addRandomSuffix: false, allowOverwrite: true,
    contentType: 'application/json', cacheControlMaxAge: 60,
  });
  return json({ ok: true, id: s, ...doc });
}
