import AuthForm from "../components/auth-form/auth-form";
import ErrorBoundaries from "../components/error-boundaries/error-boundaries";

export const AuthPage = () => {
    return (
        <div className="flex justify-center">
            <ErrorBoundaries>
                <AuthForm />
            </ErrorBoundaries>
        </div>
    );
}
