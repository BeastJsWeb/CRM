import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { dadataApi } from "./daData/dadata.api";

export const store = configureStore({
  reducer: {
    [dadataApi.reducerPath]: dadataApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(dadataApi.middleware)
})

setupListeners(store.dispatch)