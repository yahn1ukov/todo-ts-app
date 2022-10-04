import { useDispatch } from "react-redux";
import { RootDispatch } from "../store/store";

export const useAppDispatch: () => RootDispatch = useDispatch;
