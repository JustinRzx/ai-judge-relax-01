// An ai-judge-relax-01 entry (Node 22, standard library only): writes one fixed text, a short piece
// written to relax the AI judge reading it, to entry.txt in the output directory.
// The gate takes UTF-8 text of 1 to 1,000 characters that is not only white space, and the judge
// reads exactly the bytes written, line ends included, so we write no trailing line end.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'The cow has walked into the river as far as its knees and stopped.',
  '',
  'The water around it keeps going somewhere else. It has no reason to hurry. Where the cow stands the current has to go around, and behind it the surface flattens and gets smooth, and a leaf that was travelling fast arrives, slows, and turns in the flat place for a while.',
  '',
  'The tail moves. Once. Then nothing for a long time, and then once more, and the flies settle back.',
  '',
  'Downstream a boy has put his bicycle on the bank and is throwing stones at nothing in particular. The cow does not look up.',
  '',
  'The light goes the colour of tea and stays there.',
  '',
  'Later the boy goes home. The cow is still standing where it was, and the flat place behind it has got a little wider, and the leaf has come to rest in it.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
