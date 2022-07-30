import { configureStore } from '@reduxjs/toolkit'
import projectsSlice from '../Slice/projectsSlice'

export const store = configureStore({
    reducer: {
        projectsSlice,
    }
});

