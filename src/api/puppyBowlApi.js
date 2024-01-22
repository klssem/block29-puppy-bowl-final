import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApiUrl = "https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-pt-sf-b-quintal/";

export const puppyBowlApi = createApi({
    reducerPath: "puppyBowlApi",
    baseQuery: fetchBaseQuery({baseUrl: baseApiUrl}),
    endpoints: (builder) => ({
        getPlayers: builder.query({ 
            query: () => "players",
            providesTags: ['Player'],
        }),
        getPlayerInfo: builder.query({ query: (playerId) => `players/${playerId}`}),
        createPlayer: builder.mutation({
            query: (newPlayer) => ({
                url: 'players',
                method: 'POST',
                body: newPlayer,
            }),
            invalidatesTags: ['Player'],
        }),
        deletePlayer: builder.mutation({
            query: (playerId) => ({
                url: `players/${playerId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Player']
        }),
    }),
});

export const { useGetPlayersQuery, useGetPlayerInfoQuery, useCreatePlayerMutation, useDeletePlayerMutation } = puppyBowlApi;