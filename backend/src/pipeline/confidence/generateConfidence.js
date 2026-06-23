export function generateConfidence(
  warnings,
  validation,
  repair
) {

  let score = 100;

  score -= warnings.length * 10;

  if (!validation.ui.valid)
    score -= 10;

  if (!validation.db.valid)
    score -= 10;

  if (!validation.api.valid)
    score -= 10;

  if (!validation.consistency.valid)
    score -= 15;

  if (repair.applied)
    score -= 5;

  if (score < 0)
    score = 0;

  return score;
}