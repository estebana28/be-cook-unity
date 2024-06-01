import type { Pokemon } from '@prisma/client';
import type { Modificator, Result } from '../../lib/types';

export const getWeaknessOrResistance = (
  contester: Pokemon,
  against: Pokemon,
): Modificator => {
  const contesterTypeAdvantage = against.weaknesses.find(
    (weakness) => weakness === contester.type,
  );

  const againstTypeResistance = against.resistances.find(
    (resistance) => resistance === contester.type,
  );

  if (contesterTypeAdvantage) {
    return { modificafor: 'WEAK' };
  } else if (againstTypeResistance) {
    return { modificafor: 'RESIST' };
  } else {
    return { modificafor: 'NORMAL' };
  }
};

export const calculateBattleResult = (
  contester: Pokemon,
  against: Pokemon,
): Result => {
  const modificator = getWeaknessOrResistance(contester, against);
  let attackPower: number = contester.attack;
  if (modificator.modificafor === 'WEAK') {
    attackPower = attackPower * 2;
  } else if (modificator.modificafor === 'RESIST') {
    attackPower = attackPower - 20;
  }
  const result = against.hp - attackPower;
  if (result <= 0) {
    return { result: 'WIN' };
  } else {
    return { result: 'LOSE' };
  }
};
