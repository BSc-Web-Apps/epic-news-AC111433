/*
  Warnings:

  - You are about to drop the `_ArticleImageToNote` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ArticleToNoteImage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_ArticleImageToNote";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_ArticleToNoteImage";
PRAGMA foreign_keys=on;
