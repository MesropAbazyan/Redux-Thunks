import { applyMiddleware, combineReducers, createStore } from 'redux';
import { currentUserReducer, initialCurrentUser } from '../features/currentUser/currentUserSlice';
import { todosReducer, initialTodos } from '../features/todos/todosSlice';
import { friendsReducer, initialFriends } from '../features/friends/friendsSlice';
import { postsReducer, initialPosts } from '../features/posts/posts';
import thunk from 'redux-thunk';

            // function logger(store) {
            //     return function(next) {
            //         return function(action) {
            //                         // console.log('yay');
            //             action.payload.name += 'o';
            //                         // return next(action);
            //             setTimeout(() => {
            //                 next(action);
            //             }, 2000);
            //         };
            //     };
            // }
            // 
            // const logger2 = (store) => (next) => (action) => {
            //                 // console.log('ok');
            //     action.payload.name += 'v'
            //     return next(action);
            // }

const store = createStore(combineReducers({
        friends: friendsReducer,
        posts: postsReducer,
        todos: todosReducer,
        currentUser: currentUserReducer,
}), {
    friends: initialFriends,
    posts: initialPosts,
    todos: initialTodos,
    currentUser: initialCurrentUser,
}, 
            // applyMiddleware(logger, logger2)
applyMiddleware(thunk)
);

export default store;