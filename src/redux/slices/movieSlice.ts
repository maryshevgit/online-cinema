import { createSlice, PayloadAction, createAsyncThunk, AnyAction } from '@reduxjs/toolkit';
import { IGenres, IMovie } from '../../types';
import requests from '../../utils/requests';

const API_KEY = process.env.REACT_APP_API_KEY

type MoviesState = {
    ratedMovies: IMovie[];
    trendingMovies: IMovie[];
    movies: IMovie[];
    popularMovies: IMovie[];
    movie: IMovie;
    genres: IGenres[];
    loading: boolean;
    error: string | null;
}

export const fetchRatedMovies = createAsyncThunk<IMovie[], undefined, {rejectValue: string}>(
    'movies/fetchRatedMovies',
    async function (_, { rejectWithValue }) {
        const response = await fetch(requests.fetchTopRated);

        if (!response.ok) {
        return rejectWithValue('Server Error!');
        }

        const data = await response.json();


        return data.results;
    }
);

export const fetchTrendingMovies = createAsyncThunk<IMovie[], number | undefined, {rejectValue: string}>(
    'movies/fetchTrendingMovies',
    async function (count, { rejectWithValue }) {
        const response = await fetch(requests.fetchTrending);

        if (!response.ok) {
        return rejectWithValue('Server Error!');
        }

        const data = await response.json();
        if(count) return data.results.slice(0,count);
            
        return data.results
    }
);

export const fetchPopularMovies = createAsyncThunk<IMovie[], undefined, {rejectValue: string}>(
    'movies/fetchPopularMovies',
    async function (_, { rejectWithValue }) {
        const response = await fetch(requests.fetchPopularMovies);

        if (!response.ok) {
        return rejectWithValue('Server Error!');
        }

        const data = await response.json();

        return data.results.slice(0,3);
    }
);

export const fetchFreshMovies = createAsyncThunk<IMovie[], undefined, {rejectValue: string}>(
    'movies/fetchFreshMovies',
    async function (_, { rejectWithValue }) {
        const response = await fetch(requests.fetchFreshMovies);

        if (!response.ok) {
        return rejectWithValue('Server Error!');
        }

        const data = await response.json();

        return data.results;
    }
);

export const fetchMoviesByGenre = createAsyncThunk<IMovie[], number, {rejectValue: string}>(
    'movies/fetchMoviesByGenre',
    async function (id, { rejectWithValue }) {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${id}`);

        if (!response.ok) {
        return rejectWithValue('Server Error!');
        }

        const data = await response.json();

        return [...data.results];
    }
);

export const fetchMoviePage = createAsyncThunk<IMovie, number, {rejectValue: string}>(
    'movies/fetchMoviePage',
    async function (id, { rejectWithValue }) {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);

        if (!response.ok) {
        return rejectWithValue('Server Error!');
        }

        const data = await response.json();

        return data;
    }
);

export const fetchGenres = createAsyncThunk<IGenres[], undefined, {rejectValue: string}>(
    'movies/fetchGenres',
    async function (_, { rejectWithValue }) {
        const response = await fetch(requests.fetchGenres);

        if (!response.ok) {
        return rejectWithValue('Server Error!');
        }

        const data = await response.json();

        return data;
    }
);

const initialState: MoviesState = {
    ratedMovies: [],
    trendingMovies: [],
    movies: [],
    popularMovies: [],
    genres: [],
    movie: {
        title: '',
        backdrop_path: '',
        media_type: '',
        release_date: '',
        first_air_date: '',
        genre_ids: [],
        id: 0,
        name: '',
        origin_country: [],
        original_language: '',
        original_name: '',
        overview: '',
        popularity: 0,
        poster_path: '',
        vote_average: 0,
        vote_count: 0,
        adult: false,
        genres: [{id:0, name: ''}],
        runtime: 0,
        tagline: '',
    },
    loading: false,
    error: null,
  }

  const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchRatedMovies.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchRatedMovies.fulfilled, (state, action) => {
            state.ratedMovies = action.payload;
            state.loading = false;
        })
        .addCase(fetchTrendingMovies.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
            state.trendingMovies = action.payload;
            state.loading = false;
        })
        .addCase(fetchPopularMovies.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchPopularMovies.fulfilled, (state, action) => {
            state.popularMovies = action.payload;
            state.loading = false;
        })
        .addCase(fetchFreshMovies.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchFreshMovies.fulfilled, (state, action) => {
            state.movies = action.payload;
            state.loading = false;
        })
        .addCase(fetchMoviePage.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchMoviePage.fulfilled, (state, action) => {
            state.movie = action.payload;
            state.loading = false;
        })
        .addCase(fetchGenres.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchGenres.fulfilled, (state, action) => {
            state.genres = action.payload;
            state.loading = false;
        })
        .addCase(fetchMoviesByGenre.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchMoviesByGenre.fulfilled, (state, action) => {
            state.movies = action.payload;
            state.loading = false;
        })
        .addMatcher(isError, (state, action: PayloadAction<string>) => {
          state.error = action.payload;
          state.loading = false;
        });
    }
  });
  
  export default moviesSlice.reducer;
  
  function isError(action: AnyAction) {
    return action.type.endsWith('rejected');
  }
  
