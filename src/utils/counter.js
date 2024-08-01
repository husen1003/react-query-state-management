import { createGlobalState } from "./state";

export const useCounter = createGlobalState("counter", 0);
