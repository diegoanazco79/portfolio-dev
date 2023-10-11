import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface uiState {
  language: string;
}

const initialState: uiState = {
  language: 'en'
};

const uiSlice = createSlice({
  name: 'uiSettings',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    }
  }
});

export const { setLanguage } = uiSlice.actions;
export default uiSlice.reducer;
