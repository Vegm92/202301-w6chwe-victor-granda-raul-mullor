import { Provider } from "react-redux";
import { store } from "../src/store/store";

export interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};

export default Wrapper;
