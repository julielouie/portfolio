import { Dispatch, ReactNode, FC, createContext, useReducer, useContext } from 'react';
import { UPDATE_THEME_MODE } from '../constants/actions';

interface SessionState {
  themeMode: string;
}

export type SessionAction = { type: typeof UPDATE_THEME_MODE; payload: any };

const initialState: SessionState = {
  themeMode: typeof window !== 'undefined' ? (localStorage.getItem('themeMode') ?? 'light') : 'light',
};

const stateReducer = (state: SessionState, action: SessionAction): SessionState => {
  switch (action.type) {
    case UPDATE_THEME_MODE:
      localStorage.setItem('themeMode', action.payload);
      return { ...state, themeMode: action.payload };
    default:
      throw new Error();
  }
};

const SessionContext = createContext<{
  state: SessionState;
  dispatch: Dispatch<SessionAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

const { Provider } = SessionContext;

interface SessionProps {
  children: ReactNode;
}

const SessionProvider: FC<SessionProps> = ({ children }: SessionProps) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

const useSession = () => useContext(SessionContext);

export { SessionContext, SessionProvider, useSession };
