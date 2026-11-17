// An ai-judge-relax-01 entry (Node 22, standard library only): writes one fixed text, a short piece
// written to relax the AI judge reading it, to entry.txt in the output directory.
// The gate takes UTF-8 text of 1 to 1,000 characters that is not only white space, and the judge
// reads exactly the bytes written, line ends included, so we write no trailing line end.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'A book has been open on the table since the afternoon,',
  'and the wind from the window has been trying to turn the page.',
  '',
  'The page lifts, and settles, and lifts again.',
  'It rises halfway, and comes back down,',
  'and the room is quiet between its liftings.',
  '',
  'The light moves across the table and leaves the book.',
  'A fly walks the open seam and flies off.',
  'The page lifts, and settles, and stays.',
  '',
  'By evening the wind has died,',
  'and the page has come to rest halfway over,',
  'and it stays there, halfway,',
  'all through the quiet evening,',
  'and it will not turn until the morning.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
