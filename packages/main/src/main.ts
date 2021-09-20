// These imports should resolve the generated package structure:
import { name as catName } from "@monorepo-issue/dep-a/cat/cat";
import { name as dogName } from "@monorepo-issue/dep-a/dog/dog";
import { isEvil } from "@monorepo-issue/dep-a/eggman/eggman";

// Importing from generated lib works:
import { name as catName } from "@monorepo-issue/dep-a/lib/cat/cat";
import { name as dogName } from "@monorepo-issue/dep-a/lib/dog/dog";
import { isEvil } from "@monorepo-issue/dep-a/lib/eggman/eggman";

// Importing from src works:
import { name as catName } from "@monorepo-issue/dep-a/src/cat/cat";
import { name as dogName } from "@monorepo-issue/dep-a/src/dog/dog";
import { isEvil } from "@monorepo-issue/dep-a/src/eggman/eggman";

// Importing from the package index works regardless
import { test } from '@monorepo-issue/dep-a';

(() => {
  console.log(catName);
  console.log(dogName);
  console.log(isEvil());
  console.log(test);
})();
