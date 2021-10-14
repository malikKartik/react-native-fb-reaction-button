import {REACTION_ENUM} from '../constants/enums';
export const getActiveReaction = (x, REACTIONS = REACTION_ENUM) => {
  for (let index = 0; index < REACTIONS.length; index++) {
    if (x > (300 * index) / 5 && x < (300 * (index + 1)) / 5) {
      return REACTIONS[index];
    }
  }

  return null;
};
