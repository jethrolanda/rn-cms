import { createSlice, Dispatch } from "@reduxjs/toolkit";

type TData = {
  id: string;
  title: string;
  date: string;
  content: string;
  imageURI: string;
}[];

interface IData {
  data: TData;
  showModal: boolean;
  edit: string;
}

const initialState: IData = {
  data: [
    // {
    //   id: 1,
    //   title: "React",
    //   date: new Date().toLocaleString(),
    //   content: `ReactJS is a declarative, efficient, and flexible JavaScript library for building user interfaces.`
    // },
    // {
    //   id: 2,
    //   title: "React Native",
    //   date: new Date().toLocaleString(),
    //   content: `React Native: It is a framework developed by Facebook for creating native-style apps for iOS & Android.`
    // }
  ],
  showModal: false,
  edit: ""
};
// Recaptcha state
export const blogSlice = createSlice({
  name: "loginState",
  initialState,
  reducers: {
    addBlog: (state, action) => {
      // console.log(JSON.stringify([...state.data, action.payload], null, "\t"));

      state.data = [...state.data, action.payload];
    },
    setEditBlogId: (state, action) => {
      state.edit = action.payload;
    },
    updateBlog: (state, action) => {
      // console.log(JSON.stringify(action.payload));
      state.data = action.payload;
    },
    removeBlog: (state, action) => {
      // console.log(
      //   JSON.stringify(
      //     state.data.filter((el) => el.id !== action.payload),
      //     null,
      //     "\t"
      //   )
      // );
      state.data = state.data.filter((el) => el.id !== action.payload);
    },
    toggleModal: (state, action) => {
      state.showModal = action.payload;
    }
  }
});

export const { addBlog, setEditBlogId, updateBlog, removeBlog, toggleModal } =
  blogSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

export const updateBlogPost =
  ({ id, post, cb }: { id: number; post: TData; cb: () => void }) =>
  (dispatch: Dispatch) => {
    console.log(id, post, cb);
  };
export default blogSlice.reducer;
