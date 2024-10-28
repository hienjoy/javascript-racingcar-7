export const inputValidator = {
  checkCarsNameValidate(text) {
    this.checkEmptyInput(text);
    this.checkUsingComma(text);
    const carNames = text.split(',').map((name) => name.trim());
    this.checkEmptyName(carNames);
    this.checkUniqueNames(carNames);
    this.checkNameLength(carNames);
    return true;
  },

  checkEmptyInput(text) {
    if (!text) {
      throw new Error('[ERROR] 입력이 비어 있습니다.');
    }
  },

  checkUsingComma(text) {
    if (text.length > 5 && !text.includes(',')) {
      throw new Error(
        '[ERROR] 자동차 이름은 1~5글자이며, 쉼표로 구분되어야 합니다.'
      );
    }
  },

  checkEmptyName(carNames) {
    if (carNames.some((name) => name === '')) {
      throw new Error('[ERROR] 지정하지 않은 이름이 있습니다.');
    }
  },

  checkUniqueNames(carNames) {
    const uniqueNames = new Set(carNames);

    if (carNames.length !== uniqueNames.size) {
      throw new Error('[ERROR] 중복된 자동차 이름이 있습니다.');
    }
  },

  checkNameLength(carNames) {
    carNames.forEach((name) => {
      if (name.length < 1 || name.length > 5) {
        throw new Error('[ERROR] 이름의 글자수가 1~5자가 아닙니다.');
      }
    });
  },
};