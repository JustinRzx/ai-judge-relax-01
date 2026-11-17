// An ai-judge-relax-01 entry (Node 22, standard library only): writes one fixed text, a short piece
// written to relax the AI judge reading it, to entry.txt in the output directory.
// The gate takes UTF-8 text of 1 to 1,000 characters that is not only white space, and the judge
// reads exactly the bytes written, line ends included, so we write no trailing line end.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'A jar of honey has been sitting on the shelf above the stove since morning, and one small bubble has been rising through it all day.',
  '',
  'It climbs a little, and rests, and climbs again. The honey is thick, and it does not hurry the bubble, and the bubble does not hurry the honey.',
  '',
  'The room goes quiet around the jar. The light moves across the shelf and leaves it. A spoon lies in the sink, and the bubble goes on climbing at its own small pace.',
  '',
  'By evening the bubble has reached the top and come to rest under the lid, a small clear bead, and the jar is still, and the honey holds it there.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
