import { Colors } from "./types";

type ColorsItem = Record<string, string | object>;

const createCssVar = (items: ColorsItem, prefix = "-"): string[] =>
  Object.entries(items).flatMap(([key, value]) => {
    const varName = `${prefix}-${key}`;
    if (typeof value === "object")
      return createCssVar(value as ColorsItem, varName);
    return `${varName}:${value}`;
  });

export const createCssVars = (colors: Colors) => createCssVar(colors).join(";");
