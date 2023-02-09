export const useRounder = (theme) => {
  const squareAlgorithm = (seed) => {
    let mapTokens = theme;

    const keys = Object.keys(mapTokens).filter((token) => {
      return (
        token === "borderRadiusLG" ||
        token === "borderRadiusSM" ||
        token === "borderRadiusXS" ||
        token === "borderRadiusOuter" ||
        token === "borderRadius"
      );
    });

    for (let key in keys) {
      console.log(keys[key]);
      mapTokens = {
        ...mapTokens,
        [keys[key]]: 0,
      };
    }

    console.log(mapTokens);
    return mapTokens;
  };

  const rounderAlgorithm = (seed) => {
    let mapTokens = theme;

    const keys = Object.keys(mapTokens).filter((token) => {
      return (
        token === "borderRadiusLG" ||
        token === "borderRadiusSM" ||
        token === "borderRadiusXS" ||
        token === "borderRadiusOuter" ||
        token === "borderRadius"
      );
    });

    for (let key in keys) {
      console.log(keys[key]);
      mapTokens = {
        ...mapTokens,
        [keys[key]]: mapTokens[keys[key]] + 10,
      };
    }

    console.log(mapTokens);
    return mapTokens;
  };

  return [squareAlgorithm, rounderAlgorithm];
};
