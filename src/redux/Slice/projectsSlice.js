import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchProjects = createAsyncThunk(
    'projectsSlice/fetchProjects',
    async () => {
        const responce = await axios.get('https://backend.cyberia.studio/api/v1/projects')
        return responce.data;
    }
)

export const fetchCategory = createAsyncThunk(
    'projectsSlice/fetchCategory',
    async () => {
        const responce = await axios.get('https://backend.cyberia.studio/api/v1/project-categories')
        return responce.data;
    }
)


const initialState = {
    projects: [],
    category: [],
    filtredProjects: [],
    isLoading: false,
}

export const projectsSlice = createSlice({
    name: 'projectsSlice',
    initialState,
    reducers: {
        filtred: (state, action) => {
            state.filtredProjects = state.projects.filter(proj => proj.categories.find(item => item.id === action.payload))
        }
    },
    extraReducers: {
        [fetchProjects.pending]: (state) => {
            state.isLoading = true;
            console.log('Pending')
        },
        [fetchProjects.fulfilled]: (state, action) => {
            state.projects = action.payload.items;
            state.filtredProjects = action.payload.items;
            state.isLoading = false;
        },
        [fetchProjects.rejected]: (state) => {
            console.log('Rejected')
            state.isLoading = true;
        },
        [fetchCategory.pending]: (state) => {
            state.isLoading = true;
            console.log('Pending')
        },
        [fetchCategory.fulfilled]: (state, action) => {
            state.category = action.payload.items;
            state.isLoading = false;
        },
        [fetchCategory.rejected]: (state) => {
            console.log('Rejected')
            state.isLoading = true;
        },
    }
})

export default projectsSlice.reducer;
export const { filtred } = projectsSlice.actions;