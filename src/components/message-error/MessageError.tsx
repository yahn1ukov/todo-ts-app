interface Props {
    message: string
}
const MessageError = ({ message }: Props) => (
    <span>{message}</span>
); 

export default MessageError;