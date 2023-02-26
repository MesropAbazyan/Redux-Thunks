import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editName, loadUser, selectName } from "./features/currentUser/currentUserSlice";

function App() {
  const name = useSelector(selectName);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <div>
      <h1>{name}</h1>

      <input 
        type='text'
        value={name}
        onChange={(evt) => {
          dispatch(editName(evt.target.value));
        }}
      />
    </div>
  );
}

export default App;
