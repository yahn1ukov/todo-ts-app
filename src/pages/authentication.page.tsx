import AuthenticationForm from "../components/authentication-form/authentication-form";
import ErrorBoundaries from "../components/error-boundaries/error-boundaries";

export const AuthenticationPage = () => {
    return(
        <div className="flex justify-center">
            <ErrorBoundaries>
                <AuthenticationForm />
            </ErrorBoundaries>
        </div>
    );
}