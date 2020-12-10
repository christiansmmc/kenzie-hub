import { users } from "./types";

const defaultState = { devs: [] };

const Users = (state = defaultState, action) => {
  const { list, type } = action;
  const { devs } = state;
  switch (type) {
    case users:
      return { devs: [...devs, ...list] };

    default:
      return state;
  }
};

export default Users;
