import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit'


export const passVariableSlice = createSlice({
    name: 'PassVariable',
    initialState: { value: 'Profile' },
    reducers: {
        setValue: (state, action) => {
            state.value = action.payload;
        },

    },
}
)

// Action creators are generated for each case reducer function

export const { setValue } = passVariableSlice.actions
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default passVariableSlice.reducer