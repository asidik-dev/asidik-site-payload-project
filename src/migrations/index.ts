import * as migration_20250929_111647 from './20250929_111647';
import * as migration_20251207_224104 from './20251207_224104';
import * as migration_20251210_001201 from './20251210_001201';
import * as migration_20251212_210341 from './20251212_210341';

export const migrations = [
  {
    up: migration_20250929_111647.up,
    down: migration_20250929_111647.down,
    name: '20250929_111647',
  },
  {
    up: migration_20251207_224104.up,
    down: migration_20251207_224104.down,
    name: '20251207_224104',
  },
  {
    up: migration_20251210_001201.up,
    down: migration_20251210_001201.down,
    name: '20251210_001201',
  },
  {
    up: migration_20251212_210341.up,
    down: migration_20251212_210341.down,
    name: '20251212_210341'
  },
];
