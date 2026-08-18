// ============================================
// TEAM LINEUP — edit this file to make changes
// ============================================
// Each player has: number, name, position on the pitch
// Positions use percentages: top = how far from top of pitch,
// left = how far from left of pitch (50% = center)
//
// TIP FOR GIT PRACTICE:
// Change a name (e.g. "Salah" → "Bay"), save, refresh the browser.
// Then run: git status  →  git diff  →  git add  →  git commit
// ============================================

const formationName = "4-3-3";
const teamName = "My Dream Team";

const players = [
  // --- GOALKEEPER ---
  { number: 1,  name: "Alisson",           top: "88%", left: "50%" },

  // --- DEFENDERS (back four) ---
  { number: 66, name: "Alexander-Arnold",  top: "72%", left: "82%" },
  { number: 4,  name: "Van Dijk",          top: "75%", left: "62%" },
  { number: 5,  name: "Konaté",            top: "75%", left: "38%" },
  { number: 26, name: "Robertson",         top: "72%", left: "18%" },

  // --- MIDFIELDERS ---
  { number: 8,  name: "Szoboszlai",        top: "52%", left: "72%" },
  { number: 10, name: "Mac Allister",      top: "55%", left: "50%" },
  { number: 38, name: "Gravenberch",       top: "52%", left: "28%" },

  // --- FORWARDS ---
  { number: 11, name: "Bale",             top: "28%", left: "78%" },
  { number: 9,  name: "Núñez",             top: "22%", left: "50%" },
  { number: 7,  name: "Díaz",              top: "28%", left: "22%" },
];
