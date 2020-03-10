import { AsyncStorage } from "react-native";

import { persistReducer } from "redux-persist";

export default reducers => {
  const persistedReducer = persistReducer(
    { storage: AsyncStorage, key: "gobarber", whitelist: ["auth", "user"] },
    reducers
  );
  return persistedReducer;
};
