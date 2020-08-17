import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {
            title: 'Dream of Mirrors',
            duration: '3:10'
        },
        {
            title: 'For the Greater Good of God”',
            duration: '2:18'
        },
        {
            title: 'When the Wild Wind Blows',
            duration: '4:30'
        }
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});