import { ErrorResponse } from "../../types/error";

interface Props {
    error: ErrorResponse | null;
}

const MessageError = ({ error }: Props) => (
    <div className="w-[250px] mb-1.5 border-2 border-red-700 py-1 px-2 rounded-md bg-red-400 text-center">
        <span className="text-sm font-bold text-red-700 break-all">{error?.message ?? "Something was wrong"}</span>
    </div>
);

export default MessageError;
